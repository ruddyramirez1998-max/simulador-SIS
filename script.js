'use strict';

/* ============================================================
   SIMULADOR // Repositorio — Lógica de la aplicación
   ============================================================ */

const LS_KEYS = {
  THEME: 'simulador_theme',
  HISTORY: 'simulador_historial',
  BEST: 'simulador_mejor_puntaje'
};

const CAT_CODES = {
  'Arquitectura y Sistemas Operativos': 'ARQ',
  'Programación y Estructuras de Datos': 'PROG',
  'Programación Avanzada y Desarrollo Web': 'WEB',
  'Redes y Protocolos': 'RED',
  'Bases de Datos y Modelado': 'BD',
  'Ingeniería de Software y Gestión': 'ISW'
};

const PUNTOS_POR_ACIERTO = 10;

let estado = {
  sesion: [],           // preguntas de la sesión (ya mezcladas, opciones mezcladas)
  indiceActual: 0,
  puntaje: 0,
  respuestas: [],        // historial de respuestas de la sesión actual
  tiempoPorPregunta: 45,
  timerId: null,
  segundosRestantes: 45,
  horaInicio: 0,
  segundosUsadosTotal: 0,
  respondida: false
};

/* ---------------- utilidades ---------------- */

function shuffle(array){
  const a = array.slice();
  for(let i = a.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function formatTime(totalSeconds){
  const m = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
  const s = Math.floor(totalSeconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

function $(id){ return document.getElementById(id); }

function showScreen(id){
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  $(id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
}

/* ---------------- inicio / configuración ---------------- */

function poblarModulos(){
  const cont = $('modules-row');
  const cats = [...new Set(preguntas.map(p => p.categoria))];
  cont.innerHTML = cats.map(c => `<span class="module-chip">[${CAT_CODES[c] || '???'}]</span>`).join('');
}

function initSteppers(){
  const cant = $('cant-preguntas');
  const tiempo = $('tiempo-min');

  $('dec-preguntas').addEventListener('click', () => {
    cant.value = Math.max(5, parseInt(cant.value || 5, 10) - 5);
  });
  $('inc-preguntas').addEventListener('click', () => {
    cant.value = Math.min(preguntas.length, parseInt(cant.value || 5, 10) + 5);
  });
  $('dec-tiempo').addEventListener('click', () => {
    tiempo.value = Math.max(10, parseInt(tiempo.value || 10, 10) - 5);
  });
  $('inc-tiempo').addEventListener('click', () => {
    tiempo.value = Math.min(180, parseInt(tiempo.value || 10, 10) + 5);
  });
  cant.addEventListener('change', () => {
    let v = parseInt(cant.value, 10) || 20;
    v = Math.min(preguntas.length, Math.max(5, v));
    cant.value = v;
  });
  tiempo.addEventListener('change', () => {
    let v = parseInt(tiempo.value, 10) || 45;
    v = Math.min(180, Math.max(10, v));
    tiempo.value = v;
  });
}

function mostrarMejorPuntaje(){
  const best = JSON.parse(localStorage.getItem(LS_KEYS.BEST) || 'null');
  const card = $('best-score-card');
  if(!best){ card.hidden = true; return; }
  card.hidden = false;
  $('best-score-val').textContent = best.porcentaje;
  $('best-score-meta').textContent = `${best.correctas}/${best.total} correctas · ${new Date(best.fecha).toLocaleDateString('es-ES', { day:'2-digit', month:'short', year:'numeric' })}`;
}

/* ---------------- construcción del simulacro ---------------- */

function construirSesion(cantidad){
  const base = shuffle(preguntas).slice(0, cantidad);
  return base.map(p => {
    const letras = ['A', 'B', 'C', 'D'];
    const opcionesConIndice = p.opciones.map((texto, i) => ({ texto, esCorrecta: i === p.correcta }));
    const mezcladas = shuffle(opcionesConIndice);
    return {
      categoria: p.categoria,
      pregunta: p.pregunta,
      justificacion: p.justificacion,
      opciones: mezcladas.map((o, i) => ({ texto: o.texto, esCorrecta: o.esCorrecta, letra: letras[i] }))
    };
  });
}

function iniciarSimulacro(){
  const cantidad = Math.min(preguntas.length, Math.max(5, parseInt($('cant-preguntas').value, 10) || 20));
  const tiempo = Math.min(180, Math.max(10, parseInt($('tiempo-min').value, 10) || 45));

  estado.sesion = construirSesion(cantidad);
  estado.indiceActual = 0;
  estado.puntaje = 0;
  estado.respuestas = [];
  estado.tiempoPorPregunta = tiempo;
  estado.horaInicio = Date.now();
  estado.segundosUsadosTotal = 0;

  $('q-total').textContent = estado.sesion.length;
  showScreen('screen-quiz');
  renderPregunta();
}

/* ---------------- render de preguntas ---------------- */

function renderPregunta(){
  const q = estado.sesion[estado.indiceActual];
  estado.respondida = false;

  $('q-category').textContent = q.categoria;
  $('q-text').textContent = q.pregunta;
  $('q-actual').textContent = estado.indiceActual + 1;
  $('score-val').textContent = estado.puntaje;

  const pct = ((estado.indiceActual) / estado.sesion.length) * 100;
  $('progress-fill').style.width = pct + '%';

  const list = $('options-list');
  list.innerHTML = '';
  q.opciones.forEach(op => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.innerHTML = `<span class="option-letter">${op.letra}</span><span>${escapeHtml(op.texto)}</span>`;
    btn.addEventListener('click', () => seleccionarRespuesta(op, btn));
    list.appendChild(btn);
  });

  $('justificacion').hidden = true;
  $('btn-siguiente').disabled = true;

  iniciarTemporizador();
}

function escapeHtml(str){
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/* ---------------- temporizador ---------------- */

function iniciarTemporizador(){
  clearInterval(estado.timerId);
  estado.segundosRestantes = estado.tiempoPorPregunta;
  actualizarTimerUI();

  estado.timerId = setInterval(() => {
    estado.segundosRestantes--;
    estado.segundosUsadosTotal++;
    actualizarTimerUI();
    if(estado.segundosRestantes <= 0){
      clearInterval(estado.timerId);
      tiempoAgotado();
    }
  }, 1000);
}

function actualizarTimerUI(){
  $('timer-val').textContent = formatTime(Math.max(0, estado.segundosRestantes));
  const hud = $('hud-timer');
  hud.classList.toggle('warn', estado.segundosRestantes <= 10);
}

function tiempoAgotado(){
  if(estado.respondida) return;
  const q = estado.sesion[estado.indiceActual];
  registrarRespuesta(q, null);
  const opts = document.querySelectorAll('.option');
  opts.forEach((btn, i) => {
    btn.disabled = true;
    if(q.opciones[i].esCorrecta) btn.classList.add('correct');
  });
  mostrarJustificacion(false, q.justificacion, true);
  $('btn-siguiente').disabled = false;
}

/* ---------------- respuesta del usuario ---------------- */

function seleccionarRespuesta(opcionElegida, btnElegido){
  if(estado.respondida) return;
  estado.respondida = true;
  clearInterval(estado.timerId);

  const q = estado.sesion[estado.indiceActual];
  const esCorrecta = opcionElegida.esCorrecta;

  registrarRespuesta(q, opcionElegida.letra);

  const botones = document.querySelectorAll('.option');
  botones.forEach(btn => btn.disabled = true);

  if(esCorrecta){
    btnElegido.classList.add('correct');
    estado.puntaje += PUNTOS_POR_ACIERTO;
    $('score-val').textContent = estado.puntaje;
  } else {
    btnElegido.classList.add('incorrect');
    botones.forEach((btn, i) => {
      if(q.opciones[i].esCorrecta) btn.classList.add('correct');
    });
  }

  mostrarJustificacion(esCorrecta, q.justificacion, false);
  $('btn-siguiente').disabled = false;
}

function registrarRespuesta(q, letraElegida){
  const correctaObj = q.opciones.find(o => o.esCorrecta);
  estado.respuestas.push({
    categoria: q.categoria,
    pregunta: q.pregunta,
    opciones: q.opciones,
    justificacion: q.justificacion,
    letraElegida: letraElegida,
    letraCorrecta: correctaObj.letra,
    esCorrecta: letraElegida === correctaObj.letra
  });
}

function mostrarJustificacion(esCorrecta, texto, porTiempo){
  const cont = $('justificacion');
  const tag = $('justificacion-tag');
  cont.hidden = false;
  tag.textContent = porTiempo ? 'Tiempo agotado' : (esCorrecta ? 'Correcto' : 'Incorrecto');
  tag.className = 'justificacion-tag ' + (esCorrecta && !porTiempo ? 'ok' : 'bad');
  $('justificacion-text').textContent = texto;
}

/* ---------------- avanzar / finalizar ---------------- */

function siguientePregunta(){
  estado.indiceActual++;
  if(estado.indiceActual >= estado.sesion.length){
    finalizarSimulacro();
  } else {
    renderPregunta();
  }
}

function finalizarSimulacro(){
  clearInterval(estado.timerId);
  $('progress-fill').style.width = '100%';

  const total = estado.sesion.length;
  const correctas = estado.respuestas.filter(r => r.esCorrecta).length;
  const incorrectas = total - correctas;
  const porcentaje = Math.round((correctas / total) * 100);
  const tiempoUsado = estado.segundosUsadosTotal;

  const resultado = {
    fecha: Date.now(),
    total, correctas, incorrectas,
    puntaje: estado.puntaje,
    porcentaje,
    tiempoUsado
  };

  guardarHistorial(resultado);
  const esRecord = actualizarMejorPuntaje(resultado);

  renderResultados(resultado, esRecord);
  showScreen('screen-resultados');
}

/* ---------------- persistencia ---------------- */

function guardarHistorial(resultado){
  const historial = JSON.parse(localStorage.getItem(LS_KEYS.HISTORY) || '[]');
  historial.unshift(resultado);
  localStorage.setItem(LS_KEYS.HISTORY, JSON.stringify(historial.slice(0, 10)));
}

function actualizarMejorPuntaje(resultado){
  const best = JSON.parse(localStorage.getItem(LS_KEYS.BEST) || 'null');
  if(!best || resultado.porcentaje > best.porcentaje){
    localStorage.setItem(LS_KEYS.BEST, JSON.stringify(resultado));
    return true;
  }
  return false;
}

/* ---------------- render de resultados ---------------- */

function renderResultados(r, esRecord){
  $('res-title').textContent = esRecord ? '¡Nuevo mejor puntaje!' : 'Resultado del simulacro';
  $('res-eyebrow').textContent = esRecord ? '[ récord personal actualizado ]' : '[ simulacro finalizado ]';
  $('res-percent').textContent = r.porcentaje + '%';
  $('res-correctas').textContent = r.correctas;
  $('res-incorrectas').textContent = r.incorrectas;
  $('res-puntaje').textContent = r.puntaje;
  $('res-tiempo').textContent = formatTime(r.tiempoUsado);

  const best = JSON.parse(localStorage.getItem(LS_KEYS.BEST) || 'null');
  $('res-record').textContent = best ? best.porcentaje + '%' : '—';

  requestAnimationFrame(() => {
    $('res-bar-fill').style.width = r.porcentaje + '%';
  });

  renderHistorial();
}

function renderHistorial(){
  const historial = JSON.parse(localStorage.getItem(LS_KEYS.HISTORY) || '[]');
  const wrap = $('historial-wrap');
  const list = $('historial-list');
  if(historial.length <= 1){ wrap.hidden = true; return; }
  wrap.hidden = false;
  list.innerHTML = historial.slice(1, 6).map(h => `
    <div class="historial-item">
      <span class="h-date">${new Date(h.fecha).toLocaleDateString('es-ES', { day:'2-digit', month:'short', hour:'2-digit', minute:'2-digit' })}</span>
      <span>${h.correctas}/${h.total} correctas</span>
      <span class="h-score">${h.porcentaje}%</span>
    </div>
  `).join('');
}

/* ---------------- revisión ---------------- */

function renderRevision(){
  const cont = $('revision-list');
  cont.innerHTML = estado.respuestas.map(r => {
    const badge = r.esCorrecta ? '<span class="revision-badge ok">Correcta</span>' : '<span class="revision-badge bad">Incorrecta</span>';
    const opcionesHtml = r.opciones.map(op => {
      let cls = '';
      if(op.esCorrecta) cls = 'correct';
      else if(op.letra === r.letraElegida) cls = 'chosen-wrong';
      return `<div class="revision-opt ${cls}"><strong>${op.letra})</strong> ${escapeHtml(op.texto)}</div>`;
    }).join('');
    return `
      <div class="revision-item">
        <div class="revision-item-head">
          ${badge}
          <span class="revision-cat">${escapeHtml(r.categoria)}</span>
        </div>
        <div class="revision-q">${escapeHtml(r.pregunta)}</div>
        ${opcionesHtml}
        <div class="revision-just"><strong>Justificación:</strong> ${escapeHtml(r.justificacion)}</div>
      </div>
    `;
  }).join('');
}

/* ---------------- tema claro / oscuro ---------------- */

function aplicarTema(tema){
  document.documentElement.setAttribute('data-theme', tema);
  document.body.setAttribute('data-theme', tema);
  localStorage.setItem(LS_KEYS.THEME, tema);
  $('icon-sun').style.display = tema === 'light' ? 'none' : 'block';
  $('icon-moon').style.display = tema === 'light' ? 'block' : 'none';
}

function initTema(){
  const guardado = localStorage.getItem(LS_KEYS.THEME);
  const prefiereClaro = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  aplicarTema(guardado || (prefiereClaro ? 'light' : 'dark'));

  $('theme-toggle').addEventListener('click', () => {
    const actual = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    aplicarTema(actual === 'light' ? 'dark' : 'light');
  });
}

/* ---------------- instalación PWA ---------------- */

let deferredPrompt = null;

function initInstalacion(){
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    $('install-btn').hidden = false;
  });

  $('install-btn').addEventListener('click', async () => {
    if(!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    $('install-btn').hidden = true;
  });

  window.addEventListener('appinstalled', () => {
    $('install-btn').hidden = true;
  });
}

function initServiceWorker(){
  if('serviceWorker' in navigator){
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('service-worker.js').catch(() => {});
    });
  }
}

/* ---------------- eventos principales ---------------- */

function initEventos(){
  $('btn-iniciar').addEventListener('click', iniciarSimulacro);
  $('btn-siguiente').addEventListener('click', siguientePregunta);
  $('btn-revisar').addEventListener('click', () => {
    renderRevision();
    showScreen('screen-revision');
  });
  $('btn-volver-resultados').addEventListener('click', () => showScreen('screen-resultados'));
  $('btn-nuevo').addEventListener('click', () => {
    mostrarMejorPuntaje();
    showScreen('screen-home');
  });
}

/* ---------------- arranque ---------------- */

document.addEventListener('DOMContentLoaded', () => {
  poblarModulos();
  initSteppers();
  mostrarMejorPuntaje();
  initTema();
  initInstalacion();
  initServiceWorker();
  initEventos();
});

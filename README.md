# Simulador — Repositorio

Progressive Web App (PWA) para realizar simulacros de examen a partir de un banco de 100 preguntas de opción múltiple (Arquitectura y Sistemas Operativos, Programación y Estructuras de Datos, Programación Avanzada y Desarrollo Web, Redes y Protocolos, Bases de Datos y Modelado, Ingeniería de Software y Gestión).

## Estructura del proyecto

```
/Simulador
│── index.html          → estructura de la aplicación (pantallas: inicio, examen, resultados, revisión)
│── style.css            → estilos, tema claro/oscuro, animaciones, diseño responsive
│── script.js             → lógica del simulador (aleatorización, cronómetro, puntaje, historial)
│── preguntas.js          → banco de 100 preguntas (editable)
│── manifest.json         → configuración de instalación como app (PWA)
│── service-worker.js     → caché para funcionamiento sin conexión a internet
│── icon-192.png          → ícono de la app (192x192)
│── icon-512.png          → ícono de la app (512x512)
└── README.md             → este archivo
```

## Cómo usarlo

1. Abre `index.html` directamente en un navegador, **o** sirve la carpeta con un servidor local (recomendado para que el Service Worker funcione correctamente), por ejemplo:
   ```
   npx serve .
   ```
   o
   ```
   python3 -m http.server 8080
   ```
2. Configura la cantidad de preguntas y el tiempo por pregunta en la pantalla de inicio.
3. Pulsa **Iniciar simulacro**. Las preguntas y sus opciones se mezclan aleatoriamente en cada intento.
4. Al responder, la app marca en verde la opción correcta y en rojo la incorrecta (si te equivocaste), y muestra la justificación.
5. Al finalizar verás tu puntaje, porcentaje, tiempo utilizado y podrás **revisar** pregunta por pregunta cuáles acertaste y cuáles no.
6. Tu historial y tu mejor puntaje se guardan automáticamente en el dispositivo (LocalStorage), sin necesidad de servidor ni conexión.

## Instalar como aplicación

- **Android / Chrome de escritorio:** abre la app en el navegador; aparecerá un botón de instalación (ícono ⬇) en la esquina superior derecha, o usa el menú del navegador → "Instalar aplicación" / "Agregar a pantalla de inicio".
- **iOS / Safari:** botón compartir → "Agregar a pantalla de inicio".

Una vez instalada, la app abre en pantalla completa (modo `standalone`) y funciona sin conexión gracias al Service Worker, que cachea todos los archivos del proyecto la primera vez que se abre con internet.

## Actualizar el banco de preguntas

Edita `preguntas.js`. Cada pregunta sigue esta estructura:

```js
{
  categoria: 'Nombre del módulo',
  pregunta: 'Texto de la pregunta',
  opciones: ['Opción A', 'Opción B', 'Opción C', 'Opción D'],
  correcta: 0, // índice (0=A, 1=B, 2=C, 3=D) de la opción correcta dentro del arreglo "opciones"
  justificacion: 'Explicación de la respuesta correcta'
}
```

No es necesario tocar `index.html`, `style.css` ni `script.js` para añadir o modificar preguntas: la app lee `preguntas.js` dinámicamente y ajusta la cantidad disponible de forma automática.

## Notas técnicas

- 100% HTML5, CSS3 y JavaScript "vanilla" — sin frameworks ni dependencias externas de compilación.
- Fuentes: Space Grotesk (títulos), Inter (texto) e IBM Plex Mono (datos/cronómetro/etiquetas), cargadas desde Google Fonts con `preconnect` — si no hay conexión, el navegador usa las fuentes del sistema como respaldo.
- El Service Worker usa una estrategia *cache-first* con actualización en segundo plano (`CACHE_NAME = 'simulador-cache-v1'`). Si modificas los archivos del proyecto, incrementa la versión del nombre de caché para forzar la actualización en dispositivos que ya tengan la app instalada.

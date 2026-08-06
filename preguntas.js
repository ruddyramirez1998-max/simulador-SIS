// Banco de preguntas - Repositorio: Arquitectura y Sistemas Operativos
// Convertido automáticamente respetando el contenido original proporcionado.
const preguntas = [
  {
    categoria: 'Arquitectura y Sistemas Operativos',
    pregunta: '¿Cuál es la función principal del chip del BIOS/UEFI en una tarjeta madre moderna?',
    opciones: [
      'Almacenar el sistema operativo para un arranque ultrarrápido.',
      'Actuar como puente secundario de comunicación de alta velocidad entre la GPU y la RAM.',
      'Realizar el POST (Power-On Self-Test) e inicializar el hardware crítico durante el arranque.',
      'Controlar las frecuencias dinámicas de la CPU mediante software del usuario.'
    ],
    correcta: 2,
    justificacion: 'El BIOS/UEFI es el firmware base del sistema encargado de verificar que los componentes esenciales funcionen de manera idónea y localizar el gestor de arranque en la unidad de almacenamiento.'
  },
  {
    categoria: 'Arquitectura y Sistemas Operativos',
    pregunta: '¿Qué es el "Direct Memory Access" (DMA) y cuál es su principal ventaja?',
    opciones: [
      'Un puerto físico dedicado al intercambio rápido de memoria RAM modular.',
      'Un canal de comunicación que permite a los periféricos acceder a la memoria del sistema de forma directa sin sobrecargar a la CPU con interrupciones.',
      'Una directiva de software que duplica la memoria asignada a los procesos del kernel.',
      'Un bus interno implementado exclusivamente para la comunicación entre hilos dentro de una CPU.'
    ],
    correcta: 1,
    justificacion: 'El controlador DMA permite a los componentes de hardware transferir datos hacia o desde la memoria del sistema de manera independiente, liberando al microprocesador de intervenir en cada transferencia byte a byte.'
  },
  {
    categoria: 'Arquitectura y Sistemas Operativos',
    pregunta: '¿A qué se refiere el término "Overclocking" en la arquitectura de computadoras?',
    opciones: [
      'Al proceso automático de ahorro de energía cuando el hardware se encuentra inactivo.',
      'A forzar a un componente de hardware a operar a una frecuencia de reloj superior a las especificaciones fijadas por el fabricante.',
      'A la instalación de disipadores pasivos sin partes móviles en el chasis.',
      'Al reemplazo total del firmware básico del sistema mediante ingeniería inversa.'
    ],
    correcta: 1,
    justificacion: 'El Overclocking consiste en incrementar los valores de frecuencia de reloj y voltajes de componentes como la CPU, GPU o RAM para extraer un desempeño superior al nominal de fábrica, conllevando mayor generación de calor.'
  },
  {
    categoria: 'Arquitectura y Sistemas Operativos',
    pregunta: '¿Qué tipo de memoria es la ROM (Read-Only Memory) estática encontrada en periféricos sencillos como teclados?',
    opciones: [
      'Memoria volátil de acceso rápido para almacenar variables dinámicas.',
      'Un bus de direccionamiento interno mapeado directo a los registros de la CPU.',
      'Memoria no volátil que conserva los datos de configuración y firmware de forma permanente, incluso sin energía eléctrica.',
      'Un sistema de almacenamiento magnético microscópico.'
    ],
    correcta: 2,
    justificacion: 'La ROM es un medio de almacenamiento permanente no volátil usado para retener el firmware base imprescindible para la operatividad inicial del dispositivo electrónico.'
  },
  {
    categoria: 'Arquitectura y Sistemas Operativos',
    pregunta: 'El estándar NVMe (Non-Volatile Memory Express) fue diseñado específicamente para superar los cuellos de botella de qué interfaz de comunicación:',
    opciones: ['PCIe', 'SATA', 'SCSI', 'SAS'],
    correcta: 1,
    justificacion: 'NVMe se desarrolló desde cero para unidades de estado sólido (SSD) utilizando las líneas directas del bus PCI Express, rompiendo las limitaciones de velocidad y la cola de comandos reducida de la vieja interfaz SATA/AHCI.'
  },
  {
    categoria: 'Arquitectura y Sistemas Operativos',
    pregunta: 'En entornos Windows Server, ¿qué herramienta de línea de comandos avanzada basada en objetos y scripts de automatización reemplaza al clásico símbolo del sistema (cmd.exe)?',
    opciones: ['Bash para Windows', 'PowerShell', 'Registry Editor (regedit)', 'Task Scheduler'],
    correcta: 1,
    justificacion: 'PowerShell es un framework de automatización y configuración que utiliza un shell de línea de comandos basado en programación orientada a objetos (.NET).'
  },
  {
    categoria: 'Arquitectura y Sistemas Operativos',
    pregunta: 'En la administración de servicios de Windows mediante comandos de consola, ¿para qué se utiliza la herramienta sc.exe?',
    opciones: [
      'Para formatear discos duros remotos en formato NTFS.',
      'Para verificar las firmas digitales de los controladores de red.',
      'Para crear, modificar, pausar, iniciar o eliminar servicios del sistema operativo desde la línea de comandos.',
      'Para editar los registros de inicialización del Active Directory.'
    ],
    correcta: 2,
    justificacion: 'El comando sc (Service Control) se comunica directamente con el Service Control Manager de Windows para gestionar el ciclo de vida de los servicios del sistema.'
  },
  {
    categoria: 'Arquitectura y Sistemas Operativos',
    pregunta: 'En sistemas operativos Windows, ¿qué estructura de datos centralizada del sistema operativo almacena las configuraciones globales de hardware, controladores, preferencias de usuario y configuraciones de aplicaciones de software?',
    opciones: ['El Archivo hosts', 'El Registro de Windows (Windows Registry)', 'El Directorio System32', 'El Monitor de Rendimiento (Perfmon)'],
    correcta: 1,
    justificacion: 'El Registro de Windows es una base de datos jerárquica compleja donde el núcleo del S.O. guarda y consulta activamente todo parámetro operativo, de seguridad o configuración del sistema.'
  },
  {
    categoria: 'Arquitectura y Sistemas Operativos',
    pregunta: '¿Qué ocurre internamente en el microprocesador y el S.O. cuando se genera una "Falla de Página" (Page Fault)?',
    opciones: [
      'El procesador detecta que el hilo del programa intenta acceder a una dirección virtual cuya página física no se encuentra cargada actualmente en la memoria RAM principal, forzando al S.O. a buscarla en el almacenamiento masivo.',
      'El sistema de archivos se desmonta automáticamente para prevenir corrupción física.',
      'Se interrumpe la corriente eléctrica de los bancos de memoria RAM.',
      'El S.O. aborta de forma definitiva la ejecución del proceso emitiendo un volcado de memoria (Core Dump).'
    ],
    correcta: 0,
    justificacion: 'Un Page Fault es una excepción normal de hardware controlada por la MMU; el sistema operativo detiene temporalmente el proceso, lee la página requerida del almacenamiento persistente y la mapea en RAM física.'
  },
  {
    categoria: 'Arquitectura y Sistemas Operativos',
    pregunta: 'Durante la secuencia de inicio (Boot) de un sistema operativo moderno bajo el estándar UEFI, ¿qué componente de software toma el control inmediatamente después del firmware de la placa base para cargar el kernel del sistema operativo en memoria?',
    opciones: [
      'El Administrador de Tareas (Task Manager)',
      'El Cargador de Arranque (Bootloader, por ejemplo, GRUB o Windows Boot Manager)',
      'El Demonio Systemd / Init',
      'El Subsistema de Seguridad PAM'
    ],
    correcta: 1,
    justificacion: 'Una vez completadas las validaciones físicas, el firmware UEFI lee la partición EFI (ESP) e inicia el cargador de arranque (bootloader) que localiza la imagen del kernel para cargarla a la RAM.'
  },
  {
    categoria: 'Programación y Estructuras de Datos',
    pregunta: '¿Cuál es el comportamiento de un operador lógico de cortocircuito como && (AND) en la mayoría de los lenguajes de programación?',
    opciones: [
      'Evalúa todas las expresiones de izquierda a derecha, independientemente de si alguna es falsa.',
      'Detiene la evaluación inmediatamente si la primera expresión resulta falsa, ya que el resultado final no puede ser verdadero.',
      'Evalúa solo la última expresión de la secuencia lógica.',
      'Invierte los valores de verdad de las expresiones condicionales evaluadas.'
    ],
    correcta: 1,
    justificacion: 'La evaluación de cortocircuito optimiza el rendimiento del programa; si el primer operando de un && es falso, la condición completa es falsa de forma matemática, haciendo innecesaria la evaluación del resto.'
  },
  {
    categoria: 'Programación y Estructuras de Datos',
    pregunta: '¿Cuál es la diferencia fundamental entre una estructura de control de flujo while y una do-while?',
    opciones: [
      'do-while garantiza que el bloque de código interno se ejecute al menos una vez antes de evaluar la condición.',
      'while utiliza variables locales y do-while utiliza variables globales.',
      'while se ejecuta al menos una vez, mientras que do-while evalúa la condición al inicio.',
      'while solo admite condiciones de igualdad lógica estricta.'
    ],
    correcta: 0,
    justificacion: 'En while, la condición se evalúa antes de entrar al bucle (pre-prueba), mientras que en do-while se evalúa al final del bloque (post-prueba), garantizando la ejecución inicial.'
  },
  {
    categoria: 'Programación y Estructuras de Datos',
    pregunta: '¿Qué es la recursividad en programación y qué estructura de datos utiliza el sistema internamente para gestionarla?',
    opciones: [
      'Una función que se invoca a sí misma y utiliza una cola (Queue) en el heap.',
      'Una función que se invoca a sí misma y utiliza la pila de llamadas (Call Stack) del sistema operativo.',
      'Un bucle infinito controlado por hardware que utiliza tablas hash de solo lectura.',
      'El proceso de compilar código fuente en tiempo real sin validación sintáctica.'
    ],
    correcta: 1,
    justificacion: 'Cada llamada recursiva añade un nuevo marco de ejecución a la pila de llamadas (Call Stack), almacenando variables locales y la dirección de retorno hasta hallar un caso base.'
  },
  {
    categoria: 'Programación y Estructuras de Datos',
    pregunta: '¿Cuál es la función principal del tipo de dato booleano dentro de la lógica algorítmica?',
    opciones: [
      'Almacenar cadenas de caracteres extensas de forma indexada.',
      'Guardar valores numéricos decimales de alta precisión científica.',
      'Vincular punteros de memoria hacia bases de datos externas.',
      'Representar estados de verdad binarios (verdadero o falso) para la toma de decisiones lógicas.'
    ],
    correcta: 3,
    justificacion: 'El tipo booleano modela la lógica binaria clásica, permitiendo almacenar e interpretar únicamente dos estados discretos (True/False) esenciales para evaluar expresiones condicionales.'
  },
  {
    categoria: 'Programación y Estructuras de Datos',
    pregunta: '¿Para qué sirve el operador módulo (% o mod) en expresiones aritméticas básicas?',
    opciones: [
      'Para calcular la raíz cuadrada exacta de una variable entera.',
      'Para obtener el residuo de una división entera entre dos números.',
      'Para obtener el cociente flotante redondeado de una división de enteros.',
      'Para elevar un número base a una potencia determinada.'
    ],
    correcta: 1,
    justificacion: 'El operador módulo devuelve el resto sobrante de realizar una división entera, siendo fundamental para algoritmos de detección de números pares, múltiplos, etc.'
  },
  {
    categoria: 'Programación y Estructuras de Datos',
    pregunta: '¿Qué ventaja sustancial aporta el uso de funciones o métodos dentro del diseño de software básico?',
    opciones: [
      'Permite ejecutar código binario nativo en arquitecturas que carecen de memoria RAM.',
      'Hace que los programas se vuelvan totalmente inmunes a desbordamientos de enteros.',
      'Elimina por completo la necesidad de evaluar expresiones condicionales complejas.',
      'Modulariza el código fuente, promoviendo la reutilización, legibilidad y facilitando la depuración aislada de fallos.'
    ],
    correcta: 3,
    justificacion: 'Las funciones rompen problemas complejos en subproblemas autónomos más pequeños (principio de "divide y vencerás"), incrementando la mantenibilidad del código.'
  },
  {
    categoria: 'Programación y Estructuras de Datos',
    pregunta: '¿Qué es un error de sintaxis y en qué fase del ciclo de vida del software se detecta?',
    opciones: [
      'Es una infracción a las reglas estructurales y gramaticales del lenguaje de programación; se detecta durante el proceso de compilación o análisis estático.',
      'Es una violación a las reglas gramaticales del lenguaje; se detecta en tiempo de ejecución.',
      'Es una falla en la lógica matemática del programa; se detecta al realizar pruebas unitarias.',
      'Un fallo en el acceso físico a los clústeres del disco duro.'
    ],
    correcta: 0,
    justificacion: 'Los errores de sintaxis rompen las reglas gramaticales definidas formalmente por el lenguaje (olvido de un punto y coma, paréntesis desbalanceados, etc.), bloqueando la generación del código ejecutable.'
  },
  {
    categoria: 'Programación y Estructuras de Datos',
    pregunta: '¿En qué consiste el principio de Encapsulamiento dentro del paradigma de Programación Orientada a Objetos (POO)?',
    opciones: [
      'En compilar múltiples clases de software dentro de un mismo archivo comprimido .zip.',
      'Ocultar los detalles de implementación interna de un objeto y restringir el acceso directo a sus atributos, exponiendo solo una interfaz controlada mediante métodos públicos.',
      'Permitir que una subclase herede de forma masiva los métodos del framework base.',
      'Mapear objetos a tablas relacionales de bases de datos de forma lineal.'
    ],
    correcta: 1,
    justificacion: 'El encapsulamiento protege el estado interno de un objeto frente a manipulaciones externas arbitrarias mediante campos privados (private) y capturadores/modificadores (getters/setters).'
  },
  {
    categoria: 'Programación y Estructuras de Datos',
    pregunta: '¿Cuál es el mecanismo que define a la Herencia en POO?',
    opciones: [
      'El proceso de clonar dinámicamente un hilo ejecutable para balancear la carga de la CPU.',
      'La capacidad de un método de comportarse de múltiples formas según el argumento ingresado.',
      'El almacenamiento de estructuras binarias en memoria volátil de forma segura.',
      'Un mecanismo que permite a una nueva clase (subclase) adquirir los atributos y métodos de una clase existente (superclase), promoviendo la reutilización del código.'
    ],
    correcta: 3,
    justificacion: 'La herencia establece una relación jerárquica del tipo "es un". La subclase extiende la funcionalidad del padre sin necesidad de reescribir la lógica ni los atributos comunes.'
  },
  {
    categoria: 'Programación y Estructuras de Datos',
    pregunta: '¿Qué estructura de datos lineal funciona bajo la filosofía FIFO (First-In, First-Out)?',
    opciones: ['Una Cola (Queue).', 'Una Pila (Stack).', 'Un Árbol Binario de Búsqueda (BST).', 'Una Tabla Hash con direccionamiento abierto.'],
    correcta: 0,
    justificacion: 'Una cola replica un comportamiento de fila de espera del mundo real: el primer elemento insertado (encolado) será obligatoriamente el primer elemento en ser extraído (desencolado).'
  },
  {
    categoria: 'Programación y Estructuras de Datos',
    pregunta: '¿Cuál es la diferencia entre la sobrecarga (Overloading) y la sobrescritura (Overriding) de métodos?',
    opciones: [
      'Sobrecarga ocurre en diferentes proyectos; sobrescritura ocurre dentro del mismo archivo fuente.',
      'Sobrecarga define métodos con el mismo nombre, pero diferente firma (parámetros) en la misma clase; sobrescritura redefine un método de la superclase dentro de una subclase manteniendo exactamente la misma firma.',
      'Sobrescritura es un proceso exclusivo de la programación funcional estructurada pura.',
      'Sobrecarga inhabilita el acceso a los constructores implícitos de una interfaz.'
    ],
    correcta: 1,
    justificacion: 'La sobrecarga resuelve su vinculación en tiempo de compilación (polimorfismo estático). La sobrescritura se resuelve en tiempo de ejecución (polimorfismo dinámico), permitiendo adaptar el comportamiento de un método heredado.'
  },
  {
    categoria: 'Programación y Estructuras de Datos',
    pregunta: '¿Qué problema común resuelve la implementación del Recolector de Basura (Garbage Collector) en entornos administrados como Java, C# o JavaScript?',
    opciones: [
      'Libera de forma automática la memoria ocupada por objetos en el heap que ya no tienen ninguna referencia activa apuntándoles, mitigando fugas de memoria (Memory Leaks).',
      'La infección de código malicioso o virus en las variables de red.',
      'Reorganiza de forma secuencial las pistas del disco donde reside el código.',
      'Acelera la inicialización de los constructores estáticos de las clases virtuales.'
    ],
    correcta: 0,
    justificacion: 'En lenguajes de bajo nivel omitir la instrucción free() causa fugas. El Recolector de Basura automatiza esta tarea mediante subprocesos que detectan grafos de objetos inalcanzables desde la raíz para recuperar RAM.'
  },
  {
    categoria: 'Programación y Estructuras de Datos',
    pregunta: '¿Qué es una Interface (Interfaz) en programación orientada a objetos y en qué se diferencia esencialmente de una clase abstracta?',
    opciones: [
      'Es un componente puramente visual de botones; se diferencia en que no maneja hilos.',
      'Un sinónimo directo de una biblioteca de funciones estáticas matemáticas.',
      'Una función de bajo nivel para interactuar con la consola de comandos de red.',
      'Es una estructura que define un contrato puro con firmas de métodos, pero sin comportamiento ni variables de estado de instancia; a diferencia de la clase abstracta, una clase puede implementar múltiples interfaces simultáneamente.'
    ],
    correcta: 3,
    justificacion: 'Las interfaces definen capacidades de comportamiento abstractas puras (ej. Clonable). Permiten que una clase implemente ilimitados contratos eludiendo la prohibición de herencia múltiple de algunos lenguajes.'
  },
  {
    categoria: 'Programación y Estructuras de Datos',
    pregunta: 'Al estructurar una función recursiva para calcular la serie de Fibonacci, ¿qué técnica de optimización básica evita recalcular de forma redundante los mismos estados numéricos ya procesados?',
    opciones: ['Refactorización asíncrona.', 'Memoización (Memoization) mediante el almacenamiento de resultados previos en una estructura de datos.', 'Compilación anticipada (AOT).', 'Uso exclusivo de variables volátiles globales.'],
    correcta: 1,
    justificacion: 'La recursión ingenua de Fibonacci escala exponencialmente debido a cálculos repetidos. La memoización guarda cada valor en una tabla auxiliar para extraerlo en tiempo constante O(1) al requerirlo nuevamente.'
  },
  {
    categoria: 'Programación y Estructuras de Datos',
    pregunta: '¿Para qué sirve implementar el patrón de diseño de software denominado "Singleton"?',
    opciones: [
      'Para garantizar que una clase posea una única instancia viva en todo el ciclo de vida de la aplicación, proveyendo además un punto de acceso global unificado a ella.',
      'Para heredar de forma paralela comportamientos de múltiples clases abstractas.',
      'Para dividir una interfaz masiva en componentes independientes de bajo acoplamiento visual.',
      'Para inyectar de forma automatizada dependencias mockeadas en pruebas unitarias.'
    ],
    correcta: 0,
    justificacion: 'Singleton restringe la creación de instancias mediante un constructor privado y un método estático, siendo útil para gestionar pools de conexiones, archivos logs centrales o configuraciones globales.'
  },
  {
    categoria: 'Programación Avanzada y Desarrollo Web',
    pregunta: 'En la Programación Funcional Avanzada, ¿qué define el concepto de "Función Pura" (Pure Function)?',
    opciones: [
      'Una función escrita en código ensamblador puro sin usar capas intermedias de abstracción.',
      'Una función que se compila directo en la memoria caché del procesador central de forma estática.',
      'Una función que dados los mismos argumentos de entrada siempre retorna exactamente el mismo valor de salida, y carece por completo de efectos secundarios (side effects) como alterar variables externas o estados globales.',
      'Un método constructor que no admite sobrecarga de firmas ni polimorfismo.'
    ],
    correcta: 2,
    justificacion: 'Las funciones puras son deterministas y facilitan el razonamiento matemático del software al no alterar archivos ni modificar variables globales, siendo seguras en entornos concurrentes.'
  },
  {
    categoria: 'Programación Avanzada y Desarrollo Web',
    pregunta: '¿Qué representa una Expresión Lambda (Lambda Expression) o clausura (Closure) en programación moderna de nivel avanzado?',
    opciones: [
      'Una instrucción de bajo nivel orientada a optimizar el rendimiento térmico de los hilos de CPU.',
      'Una macro de preprocesamiento de cadenas utilizada exclusivamente para conectores SQL de red.',
      'Un bloque de excepciones encargado de interceptar fallos críticos del microkernel.',
      'Una función anónima definida en línea que puede capturar variables libres de su entorno léxico circundante, facilitando la programación funcional y el paso de lógica como argumento a otros métodos.'
    ],
    correcta: 3,
    justificacion: 'Las expresiones lambda simplifican la sintaxis al evitar la declaración formal de métodos. Pueden almacenarse en variables o pasarse a funciones de orden superior (map, filter, reduce) reteniendo el estado contextual.'
  },
  {
    categoria: 'Programación Avanzada y Desarrollo Web',
    pregunta: '¿En qué se diferencia fundamentalmente un hilo (Thread) de ejecución de un proceso (Process) dentro del entorno operativo de una aplicación de software avanzada?',
    opciones: [
      'Un proceso posee su propio espacio de memoria aislado e independiente provisto por el S.O., mientras que un hilo es una unidad ligera de ejecución que corre dentro del contexto del proceso y comparte el espacio de memoria con otros hilos de ese mismo proceso.',
      'Un proceso comparte toda su memoria con los demás procesos de la red global de datos.',
      'Los hilos no pueden realizar operaciones aritméticas con datos de tipo flotante doble.',
      'Los procesos corren únicamente dentro de la memoria caché y los hilos en el stack.'
    ],
    correcta: 0,
    justificacion: 'La creación de procesos acarrea sobrecarga debido al aislamiento de memoria por hardware. Los hilos se comunican velozmente compartiendo el espacio de memoria, lo que exige sincronización rigurosa para evitar corrupción de datos.'
  },
  {
    categoria: 'Programación Avanzada y Desarrollo Web',
    pregunta: '¿Qué característica distingue a un arreglo (Array) unidimensional estático en lenguajes como C o C++?',
    opciones: [
      'Puede almacenar de forma combinada elementos de texto, flotantes y objetos en la misma instancia.',
      'Los elementos se almacenan en posiciones de memoria contiguas y su tamaño se define de forma fija durante la compilación o inicialización.',
      'Su tamaño puede expandirse o contraerse dinámicamente en tiempo de ejecución.',
      'El acceso a un elemento arbitrario requiere recorrer secuencialmente todos los elementos previos.'
    ],
    correcta: 1,
    justificacion: 'Los arreglos estáticos reservan un bloque de memoria contiguo. Al tener posiciones contiguas, calcular la dirección de memoria de cualquier índice se realiza mediante aritmética simple de punteros en tiempo constante O(1).'
  },
  {
    categoria: 'Programación Avanzada y Desarrollo Web',
    pregunta: '¿Cuál es el peligro algorítmico latente al omitir la sentencia break al final de un bloque de caso en una estructura condicional switch-case?',
    opciones: [
      'El programa arroja un error crítico de sintaxis en tiempo de compilación.',
      'El sistema operativo cancela el hilo asignando un estado zombie al proceso.',
      'Se produce un comportamiento de "caída libre" (fall-through), ejecutando en cascada los códigos de los siguientes casos de forma consecutiva hasta hallar un break o el final de la estructura.',
      'Los datos numéricos enteros cambian su signo de forma automática.'
    ],
    correcta: 2,
    justificacion: 'Si el flujo entra a un caso coincidente y no encuentra un break, continuará ejecutando los bloques de código subsecuentes sin importar si sus criterios se cumplen.'
  },
  {
    categoria: 'Programación Avanzada y Desarrollo Web',
    pregunta: '¿Qué es un identificador en programación y qué regla de nomenclatura estándar es de cumplimiento general en los lenguajes de alto nivel?',
    opciones: [
      'Es el espacio de almacenamiento temporal; no puede contener letras del alfabeto inglés.',
      'Es el nombre asignado a variables, funciones o clases; por regla general no puede comenzar con un carácter numérico.',
      'Es la palabra reservada exclusiva para invocar interrupciones de hardware del procesador.',
      'Una directiva para incluir bibliotecas externas en la cabecera.'
    ],
    correcta: 1,
    justificacion: 'Los analizadores léxicos exigen que los identificadores inicien con una letra o guion bajo (_) para evitar ambigüedades con literales numéricas.'
  },
  {
    categoria: 'Programación Avanzada y Desarrollo Web',
    pregunta: '¿Cuál es el propósito fundamental de las etiquetas semánticas introducidas en el estándar HTML5 como <article>, <section> y <nav>?',
    opciones: [
      'Forzar un diseño de cuadrícula o grid de forma automática sin usar hojas de estilo CSS.',
      'Proveer significado estructural y contexto al contenido del documento, facilitando la accesibilidad y el indexado por parte de los motores de búsqueda (SEO).',
      'Encriptar el código fuente del documento para que no pueda ser copiado desde el navegador.',
      'Establecer conexiones asíncronas directas con bases de datos relacionales en el backend.'
    ],
    correcta: 1,
    justificacion: 'Indican a los navegadores y bots de búsqueda qué tipo de contenido se aloja en su interior, mejorando drásticamente el SEO y la accesibilidad tecnológica.'
  },
  {
    categoria: 'Programación Avanzada y Desarrollo Web',
    pregunta: 'En el Modelo de Caja (Box Model) de CSS, ¿qué propiedad define el espacio limpio entre el contenido del elemento y su borde exterior (Border)?',
    opciones: ['Margin', 'Outline', 'Width', 'Padding'],
    correcta: 3,
    justificacion: 'El modelo de caja se compone de: Contenido -> Padding (relleno interno) -> Border (borde) -> Margin (margen externo). El padding separa el texto o imágenes del borde del propio contenedor.'
  },
  {
    categoria: 'Programación Avanzada y Desarrollo Web',
    pregunta: '¿Qué diferencia principal existe entre las unidades de medida em y rem en la maquetación CSS adaptativa?',
    opciones: [
      'em calcula su tamaño de fuente relativo al elemento padre directo, mientras que rem lo calcula relativo exclusivamente al elemento raíz (<html>) del documento.',
      'em es una unidad absoluta en píxeles y rem es una unidad porcentual fija respecto a la pantalla.',
      'rem se procesa únicamente en dispositivos móviles y em en computadoras de escritorio.',
      'Ambas unidades exigen la ejecución de código JavaScript en segundo plano para renderizarse.'
    ],
    correcta: 0,
    justificacion: 'rem (Root EM) mantiene una escala tipográfica predecible y consistente en todo el sitio web al referenciarse solo al tamaño base del documento.'
  },
  {
    categoria: 'Programación Avanzada y Desarrollo Web',
    pregunta: '¿Cuál es el comportamiento por defecto de un elemento HTML que posee la propiedad CSS position: absolute;?',
    opciones: [
      'Se posiciona de forma relativa al viewport de la ventana del navegador, permaneciendo inmóvil al hacer scroll.',
      'Se elimina temporalmente del flujo normal del documento y se posiciona respecto a su ancestro más cercano que posea una posición diferente de static.',
      'Se sitúa de forma estricta en el flujo normal del documento inmediatamente después de su elemento hermano superior.',
      'Se duplica en el DOM de forma síncrona ocupando toda la pantalla de visualización.'
    ],
    correcta: 1,
    justificacion: 'Un elemento con posición absoluta busca un contenedor con position: relative, absolute o fixed. Si no encuentra ninguno, se posiciona respecto al cuerpo del documento.'
  },
  {
    categoria: 'Programación Avanzada y Desarrollo Web',
    pregunta: '¿Para qué se utiliza el atributo alt dentro de la etiqueta HTML <img>?',
    opciones: [
      'Especificar una ruta alternativa en alta definición en caso de conexiones de red de alta velocidad.',
      'Configurar efectos de animación tridimensionales sobre la imagen mediante hojas CSS.',
      'Proveer una descripción textual de la imagen útil para lectores de pantalla utilizados por personas con discapacidad visual y como respaldo si la imagen no se carga.',
      'Vincular un hipervínculo de descarga automática de archivos multimedia binarios.'
    ],
    correcta: 2,
    justificacion: 'El atributo alt es un pilar insoslayable de la accesibilidad web (A11y) y del SEO. Permite interpretar el componente gráfico cuando la imagen no está disponible o para usuarios con asistencia.'
  },
  {
    categoria: 'Programación Avanzada y Desarrollo Web',
    pregunta: '¿Qué describe una Media Query en el desarrollo web front-end?',
    opciones: [
      'Una directiva de CSS que permite aplicar bloques de estilos específicos dependiendo de las características del dispositivo, como su ancho de pantalla, resolución o coincidencia de color.',
      'Una consulta estructurada SQL enviada asíncronamente desde el navegador a una base de datos.',
      'Un script de automatización encargado de validar la sintaxis de las etiquetas HTML.',
      'Un protocolo de transmisión multimedia para reproducir videos en vivo a través de la web.'
    ],
    correcta: 0,
    justificacion: 'Las Media Queries sustentan la filosofía del Diseño Web Adaptativo (Responsive Web Design), transformando visualmente la UI para celulares, tablets o pantallas grandes basándose en reglas contextuales.'
  },
  {
    categoria: 'Programación Avanzada y Desarrollo Web',
    pregunta: '¿Qué característica describe a la especificidad (Specificity) en las cascadas de CSS?',
    opciones: [
      'El tiempo exacto que tarda un navegador web en descargar una hoja de estilos externa.',
      'Un sistema de pesos o jerarquías que aplica el navegador para determinar qué regla de estilo prevalece sobre un elemento cuando múltiples selectores entran en conflicto.',
      'Un algoritmo encargado de comprimir archivos de código fuente duplicados.',
      'El nivel de transparencia alfa asignado a un color en formato RGBA.'
    ],
    correcta: 1,
    justificacion: 'La especificidad se basa en cuatro categorías: estilos en línea, identificadores (#id), clases/pseudoclases (.clase) y elementos (div). Una regla con ID ganará a una de clase por su mayor peso jerárquico.'
  },
  {
    categoria: 'Programación Avanzada y Desarrollo Web',
    pregunta: 'Dentro del estándar HTML5, ¿qué diferencia sustancial hay entre los elementos de bloque (Block-level) y los elementos en línea (Inline-level)?',
    opciones: [
      'Los elementos de bloque ocupan solo el espacio de su texto interno; los elementos en línea exigen renglones independientes separados por el navegador.',
      'Los de línea admiten márgenes verticales e internos configurados de forma absoluta, bloqueando el comportamiento de los de bloque.',
      'Los elementos de bloque están vetados para contener funciones o scripts de JavaScript.',
      'Los de bloque inician siempre en una nueva línea y se expanden para ocupar todo el ancho disponible de su contenedor; los elementos en línea no inician en nueva línea y solo ocupan el ancho mínimo de su contenido.'
    ],
    correcta: 3,
    justificacion: 'Etiquetas como <div>, <p> y <h1> son estructurales de bloque. Etiquetas como <span>, <a> y <strong> conviven de forma horizontal integrada en la misma línea tipográfica.'
  },
  {
    categoria: 'Programación Avanzada y Desarrollo Web',
    pregunta: '¿Qué función cumple la regla @keyframes en las hojas de estilo CSS3?',
    opciones: [
      'Definir los estados intermedios y las propiedades de una animación CSS a lo largo del tiempo especificando puntos de control en porcentajes (de 0% a 100%).',
      'Enlazar llaves tipográficas para estructurar bases de datos NoSQL dinámicas.',
      'Registrar eventos de escucha para el teclado del cliente dentro de un script frontend.',
      'Programar pausas en la descarga de contenidos tipográficos pesados.'
    ],
    correcta: 0,
    justificacion: '@keyframes permite declarar animaciones complejas de manera declarativa asignando cambios de propiedades en fases cronológicas precisas que luego se asignan a elementos HTML.'
  },
  {
    categoria: 'Programación Avanzada y Desarrollo Web',
    pregunta: 'En JavaScript moderno, ¿qué diferencia operativa existe al declarar variables usando let y const frente al uso tradicional de var?',
    opciones: [
      'var posee alcance de bloque; let y const se extienden de forma global obligatoria a todo el hilo de ejecución.',
      'const permite reasignar tipos de datos dinámicos a una variable pero prohíbe las operaciones aritméticas simples.',
      'let y const implementan alcance de bloque (block scope) y mitigan los efectos secundarios problemáticos del "hoisting"; var posee un alcance limitado a la función contenedora (function scope).',
      'let destruye automáticamente el valor de la variable al concluir un ciclo condicional switch.'
    ],
    correcta: 2,
    justificacion: 'El uso moderno de let y const restringe las variables estrictamente al bloque físico {} donde nacieron, evitando la contaminación accidental del entorno global o de funciones vinculada al comportamiento de var.'
  },
  {
    categoria: 'Programación Avanzada y Desarrollo Web',
    pregunta: '¿Qué es el DOM (Document Object Model) en el ecosistema del desarrollo web?',
    opciones: [
      'Un protocolo de comunicación de datos cifrados exclusivo para servidores Linux.',
      'Una interfaz de programación orientada a objetos que representa la estructura jerárquica de un documento HTML como un árbol de nodos, permitiendo que lenguajes como JavaScript alteren dinámicamente el contenido y los estilos.',
      'Un motor de bases de datos embebido de forma nativa en el kernel de los navegadores.',
      'Un framework de diseño CSS utilizado para construir interfaces web en tres dimensiones.'
    ],
    correcta: 1,
    justificacion: 'El DOM convierte el código de marcado plano en una estructura viva en memoria, facultando la interactividad interactiva mediante scripts al transformar cada etiqueta en un objeto manipulable.'
  },
  {
    categoria: 'Programación Avanzada y Desarrollo Web',
    pregunta: '¿Qué diferencia fundamental existe entre los operadores de comparación de igualdad == (igualdad débil) y === (igualdad estricta) en JavaScript?',
    opciones: [
      'El operador == realiza una conversión implícita de tipos (coerción) antes de evaluar el valor, mientras que === evalúa estrictamente tanto el valor como el tipo de dato sin transformaciones intermedias.',
      'El operador == compara solo el tipo de dato y el operador === compara únicamente el valor numérico absoluto.',
      '== se usa exclusivamente en condicionales aplicados sobre objetos y === en cadenas de texto plano.',
      'El uso de === desactiva de forma síncrona el recolector de basura del navegador.'
    ],
    correcta: 0,
    justificacion: 'Bajo la igualdad débil (==), 5 == "5" retorna true por la coerción. Con la igualdad estricta (===), retorna false puesto que un entero difiere tipográficamente de una cadena de texto.'
  },
  {
    categoria: 'Programación Avanzada y Desarrollo Web',
    pregunta: '¿Qué es un "Closure" (Clausura) en el lenguaje JavaScript?',
    opciones: [
      'Una directiva de compilación para cerrar hilos huérfanos dentro del bucle de eventos.',
      'Una función que recuerda y mantiene acceso a las variables de su entorno léxico circundante (ámbito externo), incluso después de que la función externa que creó dicho entorno haya finalizado su ejecución.',
      'Un método reservado para destruir instancias de objetos y liberar memoria dinámica.',
      'Una función de seguridad que restringe la modificación de las hojas CSS en el navegador.'
    ],
    correcta: 1,
    justificacion: 'Los closures surgen al anidar funciones. La función interna "atrapa" el alcance de las variables locales del padre, permitiendo emular comportamientos avanzados como la encapsulación de variables de estado privadas.'
  },
  {
    categoria: 'Programación Avanzada y Desarrollo Web',
    pregunta: '¿Cuál es la función del mecanismo denominado "Event Loop" (Bucle de Eventos) dentro de la arquitectura de ejecución de JavaScript?',
    opciones: [
      'Distribuir la carga computacional de los bucles for entre múltiples servidores remotos.',
      'Forzar el refresco de pantalla a una tasa mínima de 60 cuadros por segundo de forma nativa.',
      'Interceptar ataques XSS bloqueando la ejecución del árbol del DOM en caliente.',
      'Coordinar la ejecución del código, la recolección de eventos y el despacho de subtareas asíncronas, permitiendo que un lenguaje de un solo hilo (Single-threaded) realice operaciones no bloqueantes de E/S delegando tareas al navegador.'
    ],
    correcta: 3,
    justificacion: 'Dado que JavaScript ejecuta código de forma síncrona en una única pila de llamadas, el Event Loop monitorea cuándo se vacía dicha pila para inyectar ordenadamente las respuestas asíncronas de la cola de tareas (Callback Queue).'
  },
  {
    categoria: 'Redes y Protocolos',
    pregunta: '¿Qué es REST (Representational State Transfer) en el diseño de servicios y desarrollo backend?',
    opciones: [
      'Un estilo arquitectónico para el diseño de APIs de red basado en principios como la ausencia de estado (stateless), una interfaz uniforme y el uso nativo de los métodos estándar del protocolo HTTP (GET, POST, PUT, DELETE).',
      'Un software de servidor encargado de balancear cargas de datos multimedia pesados en arquitecturas en la nube.',
      'Un motor de persistencia NoSQL optimizado para almacenar sesiones de usuarios concurrentes.',
      'Un framework de desarrollo frontend que reemplaza la manipulación del árbol del DOM.'
    ],
    correcta: 0,
    justificacion: 'REST dicta que los recursos de una aplicación se identifiquen mediante URIs limpias y estructuradas, interactuando con ellos exclusivamente a través de los verbos HTTP semánticos tradicionales.'
  },
  {
    categoria: 'Redes y Protocolos',
    pregunta: '¿Qué describe un código de estado de respuesta HTTP del tipo: 201 Created?',
    opciones: [
      'La solicitud fue exitosa pero el servidor no devuelve ningún contenido en el cuerpo del mensaje.',
      'La solicitud HTTP fue procesada de forma exitosa y ha resultado en la creación de un nuevo recurso en el servidor.',
      'Un error crítico en el lado del servidor que impidió procesar la persistencia de datos.',
      'Una redirección permanente que obliga al cliente a cambiar de protocolo de red.'
    ],
    correcta: 1,
    justificacion: 'Los códigos 2xx indican éxito. Específicamente el 201 se emite en respuesta a un comando POST exitoso, confirmando la inserción de la entidad en el almacén de datos.'
  },
  {
    categoria: 'Redes y Protocolos',
    pregunta: '¿Cuál es la diferencia fundamental entre el protocolo clásico HTTP/1.1 y el estándar moderno HTTP/2 en términos de transporte de datos por la red?',
    opciones: [
      'HTTP/2 introduce el cifrado obligatorio de contraseñas locales mediante redes Blockchain distribuidas.',
      'HTTP/1.1 procesa múltiples peticiones concurrentes de forma síncrona sobre un solo hilo binario; HTTP/2 está limitado a transmitir archivos de texto plano uno por uno.',
      'HTTP/1.1 sufre del problema de bloqueo de cabeza de línea (Head-of-Line Blocking) debido a su naturaleza secuencial por conexión; HTTP/2 introduce la multiplexación binaria, permitiendo enviar y recibir múltiples solicitudes y respuestas de forma simultánea y asíncrona sobre una única conexión TCP.',
      'HTTP/2 cancela el uso de servidores proxies intermedios en toda la red global de internet.'
    ],
    correcta: 2,
    justificacion: 'HTTP/2 revoluciona la eficiencia al fragmentar la conversación en tramas binarias intercaladas sobre un solo canal compartido, acelerando la descarga paralela de infraestructuras web complejas.'
  },
  {
    categoria: 'Redes y Protocolos',
    pregunta: '¿Qué describe el concepto de "Lazy Loading" (Carga Perezosa) aplicado a la optimización de activos informáticos en plataformas web avanzadas?',
    opciones: [
      'Compilar scripts JavaScript únicamente cuando el procesador central experimenta bajas temperaturas de hardware.',
      'Un fallo anómalo en el bucle de eventos que ralentiza el despacho de las funciones middleware.',
      'El proceso de formatear una unidad de estado sólido SSD de forma síncrona desde la consola remota de comandos.',
      'Una estrategia de optimización del rendimiento que posterga la carga o descarga de recursos no críticos (como imágenes ocultas o videos de fondo) hasta el momento exacto en que el usuario los necesita o se vuelven visibles mediante el scroll.'
    ],
    correcta: 3,
    justificacion: 'Lazy Loading restringe las descargas a los activos estrictamente consumidos en tiempo real por el viewport, mejorando directamente las métricas analíticas de carga del sitio.'
  },
  {
    categoria: 'Redes y Protocolos',
    pregunta: 'Al diseñar aplicaciones web modernas optimizadas para entornos móviles y de baja conectividad, ¿qué característica fundamental describe a una PWA (Progressive Web App)?',
    opciones: [
      'La compilación directa de código JavaScript a binarios nativos ejecutables en tiendas cerradas de aplicaciones de celulares.',
      'Una aplicación web tradicional construida con tecnologías estándar (HTML, CSS, JS) potenciada por la adición de un archivo de Manifiesto y un componente Service Worker, permitiendo que el sitio funcione sin conexión a internet, envíe notificaciones push y pueda ser instalado nativamente.',
      'Un diseño web responsivo construido exclusivamente mediante el uso de tablas HTML complejas de bloque.',
      'Un sistema de persistencia que elimina por completo los requerimientos de la memoria RAM del servidor backend.'
    ],
    correcta: 1,
    justificacion: 'Las PWAs cierran la brecha tecnológica entre la versatilidad de la web y el rendimiento nativo. El Service Worker actúa como un proxy programable que intercepta peticiones de red y cachea activos enteros.'
  },
  {
    categoria: 'Redes y Protocolos',
    pregunta: '¿Qué problema crítico de seguridad describe el concepto de "Inyección de Encabezados HTTP" (HTTP Header Injection o HTTP Response Splitting)?',
    opciones: [
      'Ocurre cuando datos provistos por un usuario malicioso sin saneamiento apropiado se introducen en las cabeceras de respuesta HTTP del servidor, permitiendo que el atacante inyecte saltos de línea (CRLF) para manipular cookies, forzar redireccionamientos o alterar el mensaje.',
      'El colapso del ancho de banda por culpa de ataques masivos coordinados DDoS sobre puertos UDP abiertos.',
      'La modificación física del firmware básico del router perimetral del proveedor de servicios de internet.',
      'La inhabilitación total del recolector de basura en el entorno de Node.js del lado del backend.'
    ],
    correcta: 0,
    justificacion: 'Al abusar de la falta de validación, los hackers insertan códigos de control como \\r\\n (Retorno de carro / Salto de línea). Esto permite romper la respuesta HTTP en dos mensajes separados e inyectar scripts arbitrarios.'
  },
  {
    categoria: 'Redes y Protocolos',
    pregunta: '¿Qué fenómeno físico describe la pérdida de intensidad de la señal a medida que viaja a través de un medio de transmisión?',
    opciones: ['Diafonía (Crosstalk)', 'Atenuación', 'Dispersión', 'Ruido térmico'],
    correcta: 1,
    justificacion: 'La atenuación es la reducción de la potencia de una señal al propagarse por un medio físico, limitada por la distancia y la resistencia del material.'
  },
  {
    categoria: 'Redes y Protocolos',
    pregunta: 'En el estándar Ethernet 1000BASE-T, ¿qué tipo de cableado y qué categoría mínima se requiere para alcanzar 1 Gbps a 100 metros?',
    opciones: ['Cable Coaxial RG-6', 'UTP Categoría 5', 'UTP Categoría 5e', 'Fibra Óptica Monomodo'],
    correcta: 2,
    justificacion: 'El estándar 1000BASE-T utiliza cuatro pares de cables UTP de Categoría 5e (o superior) para lograr tasas de transferencia de Gigabit Ethernet hasta distancias de 100 metros.'
  },
  {
    categoria: 'Redes y Protocolos',
    pregunta: '¿Cuál es la principal ventaja de la fibra óptica monomodo (SMF) sobre la fibra óptica multimodo (MMF)?',
    opciones: [
      'Es más económica y fácil de instalar.',
      'Permite mayores distancias y menor atenuación gracias a un núcleo más delgado.',
      'Utiliza LEDs de bajo costo como fuente de luz.',
      'Permite doblar el cable en ángulos rectos sin pérdida de señal.'
    ],
    correcta: 1,
    justificacion: 'La fibra monomodo tiene un núcleo mucho más pequeño (aprox. 9 micrómetros) que permite que la luz viaje en un solo rayo o modo, permitiendo distancias de decenas de kilómetros sin repetidores.'
  },
  {
    categoria: 'Redes y Protocolos',
    pregunta: '¿Qué tipo de perturbación se genera cuando las señales de hilos telefónicos o cables de red adyacentes interfieren entre sí electromagnéticamente?',
    opciones: ['Ruido de disparo', 'Interferencia por multitrayecto', 'Jitter', 'Diafonía (Crosstalk)'],
    correcta: 3,
    justificacion: 'La diafonía ocurre cuando los campos electromagnéticos de un par de hilos inducen corrientes eléctricas en un par vecino, distorsionando la señal original.'
  },
  {
    categoria: 'Redes y Protocolos',
    pregunta: 'Una VLAN (Virtual Local Area Network) permite:',
    opciones: [
      'Segmentar lógicamente redes y reducir el tamaño de los dominios de difusión (broadcast) en la capa 2.',
      'Aumentar la velocidad del cable físico de 1 Gbps a 10 Gbps.',
      'Separar dominios de colisión sin usar switches.',
      'Conectar directamente dos computadoras remotas a través de Internet sin cifrado.'
    ],
    correcta: 0,
    justificacion: 'Las VLANs agrupan estaciones de trabajo de manera lógica restringiendo el tráfico de broadcast únicamente a los miembros de esa misma VLAN.'
  },
  {
    categoria: 'Redes y Protocolos',
    pregunta: '¿Qué etiqueta añade el estándar IEEE 802.1Q a una trama Ethernet para identificar la VLAN a la que pertenece?',
    opciones: [
      'Un encabezado IP adicional de 20 bytes.',
      'Un campo de 4 bytes insertado entre la dirección MAC de origen y el campo EtherType.',
      'Un remolque criptográfico de 16 bits al final de la trama.',
      'Un bit de paridad al inicio del preámbulo.'
    ],
    correcta: 1,
    justificacion: 'El encapsulamiento 802.1Q ("Trunking") inserta un tag de 4 bytes que contiene el VLAN ID (12 bits) permitiendo soportar hasta 4096 VLANs distintas a través de un enlace troncal.'
  },
  {
    categoria: 'Redes y Protocolos',
    pregunta: '¿Cuál es la dirección MAC de difusión (broadcast) global utilizada en redes Ethernet locales?',
    opciones: ['FF:FF:FF:FF:FF:FF', '00:00:00:00:00:00', '192.168.1.255', 'AA:AA:AA:AA:AA:AA.'],
    correcta: 0,
    justificacion: 'La dirección compuesta enteramente por unos binarios (48 bits) se denota en hexadecimal como FF:FF:FF:FF:FF:FF e indica a todas las tarjetas de red del segmento que deben procesar la trama.'
  },
  {
    categoria: 'Redes y Protocolos',
    pregunta: '¿Cuál de las siguientes afirmaciones caracteriza correctamente una ventaja de IPv6 sobre IPv4?',
    opciones: [
      'IPv6 reduce el tamaño de las direcciones a 64 bits para acelerar el procesamiento.',
      'IPv6 se basa puramente en difusiones (broadcast) de capa física para simplificar el hardware.',
      'IPv6 es compatible de manera nativa y directa con IPv4 sin necesidad de mecanismos de transición.',
      'IPv6 elimina la necesidad de NAT gracias a su gigantesco espacio de direcciones de 128 bits.'
    ],
    correcta: 3,
    justificacion: 'El tamaño de dirección de 128 bits provee 3.4x 10³⁸ combinaciones únicas, restaurando el modelo de comunicación de extremo a extremo y haciendo innecesario el NAT de sobrecarga.'
  },
  {
    categoria: 'Redes y Protocolos',
    pregunta: '¿Qué protocolo es utilizado por los routers para enviar mensajes de error y control operativo a los hosts de origen (por ejemplo, "Host inalcanzable")?',
    opciones: ['IGMP', 'ICMP', 'BGP', 'OSPF'],
    correcta: 1,
    justificacion: 'ICMP (Internet Control Message Protocol) es el protocolo de soporte encargado de notificar incidencias y proveer herramientas de diagnóstico como ping y traceroute.'
  },
  {
    categoria: 'Redes y Protocolos',
    pregunta: 'El enrutamiento estático se diferencia del enrutamiento dinámico en que:',
    opciones: [
      'El estático se adapta automáticamente a los cambios de topología de la red.',
      'El dinámico consume menos recursos de CPU y memoria en los enrutadores.',
      'El estático utiliza protocolos como RIP y EIGRP para descubrir redes vecinas.',
      'El estático requiere que el administrador de red configure manualmente cada ruta en la tabla de enrutamiento.'
    ],
    correcta: 3,
    justificacion: 'El enrutamiento estático es manual y rígido; obliga al administrador a reconfigurar los equipos de forma manual ante cualquier cambio físico o caída de enlace.'
  },
  {
    categoria: 'Redes y Protocolos',
    pregunta: '¿Cuál de las siguientes aplicaciones hace un uso más adecuado de UDP en lugar de TCP?',
    opciones: [
      'La transferencia segura de archivos bancarios mediante SFTP.',
      'La transmisión de voz en tiempo real (VoIP) y llamadas de video en streaming.',
      'El acceso a bases de datos corporativas distribuidas.',
      'El envío de correos electrónicos corporativos (SMTP).'
    ],
    correcta: 1,
    justificacion: 'En VoIP la velocidad y baja latencia son críticas; si un paquete se pierde, es preferible un breve corte de milisegundos que pausar el flujo esperando una retransmisión TCP obsoleta.'
  },
  {
    categoria: 'Redes y Protocolos',
    pregunta: 'El protocolo DNS (Domain Name System) se encarga principalmente de:',
    opciones: [
      'Asignar configuraciones IP dinámicas a los hosts que inician sesión.',
      'Cifrar el tráfico de navegación web de los usuarios.',
      'Traducir nombres de dominio legibles por humanos (ej. www.google.com) a direcciones IP numéricas.',
      'Sincronizar el reloj del sistema entre múltiples servidores en producción.'
    ],
    correcta: 2,
    justificacion: 'DNS opera como la base de datos distribuida y jerárquica que mapea identificadores textuales a los recursos direccionables numéricamente (IP) en la capa de red.'
  },
  {
    categoria: 'Redes y Protocolos',
    pregunta: '¿Qué protocolo automatiza la asignación centralizada de parámetros de red como la dirección IP, máscara de subred, puerta de enlace y DNS a los clientes dentro de una LAN?',
    opciones: ['SNMP', 'DHCP', 'SMTP', 'HTTP'],
    correcta: 1,
    justificacion: 'DHCP (Dynamic Host Configuration Protocol) utiliza el proceso de cuatro pasos (DORA) para que las estaciones locales adquieran configuración de red sin intervención manual.'
  },
  {
    categoria: 'Redes y Protocolos',
    pregunta: '¿Cuál es la principal diferencia funcional entre los protocolos de correo electrónico POP3 e IMAP?',
    opciones: [
      'POP3 cifra los datos por defecto mientras que IMAP no cuenta con soporte de cifrado SSL.',
      'IMAP solo permite enviar correos y POP3 solo permite recibirlos.',
      'POP3 opera en la capa de transporte e IMAP en la capa de red.',
      'POP3 descarga los mensajes localmente y la borra del servidor por defecto, mientras que IMAP sincroniza y mantiene los correos en el servidor de forma remota.'
    ],
    correcta: 3,
    justificacion: 'IMAP está optimizado para accesos multidispositivo, ya que los correos permanecen centralizados. POP3 descarga localmente en una sola máquina para ahorrar espacio en servidor.'
  },
  {
    categoria: 'Redes y Protocolos',
    pregunta: '¿Qué método o código de estado HTTP devuelve un servidor web para indicar que el recurso solicitado ha sido encontrado con éxito?',
    opciones: ['200 OK', '404 Not Found', '500 Internal Server Error', '301 Moved Permanently'],
    correcta: 0,
    justificacion: 'El código específico 200 OK confirma que la solicitud del cliente fue procesada y respondida correctamente por el servidor.'
  },
  {
    categoria: 'Redes y Protocolos',
    pregunta: '¿Qué protocolo criptográfico proporciona confidencialidad, autenticidad e integridad sobre el protocolo HTTP tradicional para convertirlo en HTTPS?',
    opciones: ['WPA3', 'TLS (Transport Layer Security)', 'MD5', 'IPSec'],
    correcta: 1,
    justificacion: 'TLS (sucesor de SSL) utiliza criptografía asimétrica e intercambio de claves para el cifrado del canal y funciones hash para garantizar la integridad de los datos.'
  },
  {
    categoria: 'Redes y Protocolos',
    pregunta: '¿Cuál es el propósito del protocolo SNMP (Simple Network Management Protocol)?',
    opciones: [
      'Sincronizar de forma exacta los relojes de hardware de los switches y routers.',
      'Transferir hipertextos estructurados a alta velocidad de un servidor a un cliente.',
      'Proveer un marco estándar de monitorización, alerta y gestión remota de dispositivos de red.',
      'Autenticar usuarios remotos mediante redes inalámbricas corporativas.'
    ],
    correcta: 2,
    justificacion: 'SNMP permite recolectar información de estado (uso de CPU, tráfico, memoria) de enrutadores, servidores y firewalls a través de agentes e infraestructuras de bases de datos MIB.'
  },
  {
    categoria: 'Redes y Protocolos',
    pregunta: '¿Qué ataque informático clásico consiste en saturar los recursos de un servidor de red inundándolo con un volumen de peticiones simultáneas falsas superior a su capacidad de respuesta?',
    opciones: ['Man-in-the-Middle (MitM)', 'Denegación de Servicio Distribuida (DDoS)', 'Phishing masivo', 'Inyección SQL (SQLi)'],
    correcta: 1,
    justificacion: 'Un ataque DDoS utiliza múltiples sistemas distribuidos (Botnets) comprometidos para inundar el ancho de banda, dejándolo indisponible para sus usuarios legítimos.'
  },
  {
    categoria: 'Bases de Datos y Modelado',
    pregunta: 'En el diseño de bases de datos, ¿cuál es el objetivo primordial de la fase de diseño conceptual?',
    opciones: [
      'Producir un esquema independiente del SGBD físico que refleje fielmente los requisitos de información del negocio.',
      'Definir las tablas, tipos de datos específicos y claves primarias en un motor de base de datos concreto.',
      'Optimizar los índices de los archivos y definir la estructura de almacenamiento en disco.',
      'Escribir las restricciones de integridad mediante disparadores (triggers) y procedimientos almacenados.'
    ],
    correcta: 0,
    justificacion: 'El diseño conceptual (como el Modelo E-R) busca representar la realidad del negocio sin preocuparse por las limitaciones técnicas, el software o el hardware.'
  },
  {
    categoria: 'Bases de Datos y Modelado',
    pregunta: '¿Qué representa un "Atributo Compuesto" en un diagrama Entidad-Relación?',
    opciones: [
      'Un atributo que puede tener múltiples valores simultáneos para una misma entidad.',
      'Un atributo que puede dividirse en subpartes independientes con significado propio.',
      'Un atributo que se calcula automáticamente a partir de otros campos de la base de datos.',
      'Un atributo que actúa simultáneamente como clave primaria y clave foránea.'
    ],
    correcta: 1,
    justificacion: 'Los atributos compuestos están formados por componentes más simples (por ejemplo, Dirección compuesto por Calle, Número, Ciudad y País).'
  },
  {
    categoria: 'Bases de Datos y Modelado',
    pregunta: 'Si una entidad "Empleado" puede supervisar a muchos "Empleados", pero cada empleado tiene un solo supervisor, ¿qué tipo de relación se está presentando?',
    opciones: [
      'Relación recursiva o reflexiva de uno a muchos (1:N).',
      'Relación binaria uno a uno (1:1).',
      'Relación ternaria de muchos a muchos (N:M).',
      'Una relación débil por identificación.'
    ],
    correcta: 0,
    justificacion: 'Es una relación recursiva (la entidad se relaciona consigo misma) con una cardinalidad de 1 a N, dado que un supervisor lidera a varios subordinados.'
  },
  {
    categoria: 'Bases de Datos y Modelado',
    pregunta: '¿Cuándo se dice que una entidad es una "Entidad Débil"?',
    opciones: [
      'Cuando tiene muy pocos atributos definidos.',
      'Cuando sus ejemplares no pueden existir independientemente de la existencia de una entidad fuerte emparentada.',
      'Cuando solo contiene claves foráneas en su definición lógica.',
      'Cuando se almacena en una tabla temporal de la memoria RAM.'
    ],
    correcta: 1,
    justificacion: 'Una entidad débil depende de una entidad fuerte (dominante) y de su clave para tener existencia e identidad en el sistema.'
  },
  {
    categoria: 'Bases de Datos y Modelado',
    pregunta: 'En la transformación de un modelo E-R al Modelo Relacional, ¿cómo se traduce generalmente una relación de muchos a muchos (N:M) entre dos entidades?',
    opciones: [
      'Añadiendo la clave primaria de una de las tablas como clave foránea en la otra tabla.',
      'Fusionando ambas entidades en una única tabla de gran tamaño.',
      'Creando una nueva tabla intermedia cuya clave primaria compuesta incluye las claves primarias de ambas entidades.',
      'Ignorando la relación, ya que el modelo relacional no soporta el concepto de muchos a muchos.'
    ],
    correcta: 2,
    justificacion: 'Las relaciones N:M requieren una tabla puente que rompa la relación en dos relaciones 1:N.'
  },
  {
    categoria: 'Bases de Datos y Modelado',
    pregunta: '¿Cuál es la diferencia fundamental entre una Clave Primaria (Primary Key) y una Clave Candidata?',
    opciones: [
      'La clave primaria acepta valores nulos y la clave candidata no.',
      'Las claves candidatas son todos los identificadores únicos potenciales de una entidad; la clave primaria es la elegida por el diseñador de forma definitiva.',
      'Una entidad puede tener múltiples claves primarias pero solo una candidata.',
      'Las claves candidatas solo se utilizan en la fase física del diseño.'
    ],
    correcta: 1,
    justificacion: 'Todas las combinaciones de atributos que garantizan unicidad e irreducibilidad son claves candidatas. El diseñador selecciona una de ellas como clave primaria oficial.'
  },
  {
    categoria: 'Bases de Datos y Modelado',
    pregunta: 'En una consulta SQL, ¿cuál es la diferencia fundamental en el uso de las cláusulas WHERE y HAVING?',
    opciones: [
      'WHERE filtra filas individuales antes de realizar la agrupación; HAVING filtra los resultados de los grupos creados por GROUP BY basándose en funciones de agregación.',
      'WHERE se usa solo con SELECT; HAVING se usa con DELETE.',
      'HAVING opera más rápido debido a que no evalúa condiciones lógicas complejas.',
      'WHERE requiere índices obligatorios; HAVING funciona solo en memoria caché.'
    ],
    correcta: 0,
    justificacion: 'El motor evalúa WHERE para descartar filas antes de agruparlas. Una vez consolidados los grupos, se aplica HAVING para condiciones grupales.'
  },
  {
    categoria: 'Bases de Datos y Modelado',
    pregunta: 'Para eliminar todos los registros de una tabla de forma masiva, liberando el espacio de almacenamiento y sin registrar los borrados individuales de filas en el log de transacciones (haciéndolo mucho más veloz), se debe usar:',
    opciones: ['DELETE FROM tabla;', 'DROP TABLE tabla;', 'REMOVE ALL FROM tabla;', 'TRUNCATE TABLE tabla;'],
    correcta: 3,
    justificacion: 'TRUNCATE es una operación de tipo DDL que desasigna las páginas de datos. Es mucho más eficiente que DELETE porque no evalúa disparadores ni escribe cada borrado en el log.'
  },
  {
    categoria: 'Bases de Datos y Modelado',
    pregunta: '¿Qué comando SQL se emplea para otorgar privilegios específicos de acceso y manipulación de datos a usuarios o roles del SGBD?',
    opciones: ['REVOKE', 'GRANT', 'DENY', 'ASSIGN.'],
    correcta: 1,
    justificacion: 'GRANT forma parte del sublenguaje DCL (Data Control Language) y se usa para conceder permisos sobre objetos de la base de datos.'
  },
  {
    categoria: 'Bases de Datos y Modelado',
    pregunta: '¿Cuál es la función principal del "Log de Transacciones" (o Write-Ahead Log - WAL) en un motor de base de datos?',
    opciones: [
      'Registrar de manera cronológica y secuencial todas las modificaciones antes de que se escriban en las páginas de datos del disco, permitiendo la recuperación ante fallos.',
      'Almacenar estadísticas de las páginas web que visitan los usuarios.',
      'Exportar de forma automática reportes en formato PDF para la gerencia.',
      'Monitorear el rendimiento de la red LAN corporativa.'
    ],
    correcta: 0,
    justificacion: 'Siguiendo la estrategia WAL, el motor garantiza la consistencia guardando los cambios primero en el log. Si ocurre un fallo, el SGBD lee el log para rehacer o deshacer cambios.'
  },
  {
    categoria: 'Bases de Datos y Modelado',
    pregunta: '¿Qué comando se utiliza para revertir por completo todos los cambios realizados por la transacción en curso, devolviendo los datos a su estado previo de consistencia?',
    opciones: ['COMMIT', 'ROLLBACK', 'SAVEPOINT', 'UNDO UPDATE'],
    correcta: 1,
    justificacion: 'ROLLBACK aborta la transacción actual y descarta las modificaciones no consolidadas en el sistema de almacenamiento, asegurando la atomicidad.'
  },
  {
    categoria: 'Bases de Datos y Modelado',
    pregunta: 'Un "Disparador" (Trigger) es un objeto de la base de datos que se caracteriza por:',
    opciones: [
      'Ejecutarse automáticamente en respuesta a eventos específicos de modificación de datos (como INSERT, UPDATE o DELETE) en una tabla.',
      'Ser invocado manualmente por el usuario mediante una instrucción EXECUTE.',
      'Validar las contraseñas de las cuentas de red del sistema operativo.',
      'Desfragmentar los índices del disco duro durante la madrugada.'
    ],
    correcta: 0,
    justificacion: 'Los triggers son piezas de código procedural que reaccionan ante mutaciones de datos para mantener reglas de negocio complejas.'
  },
  {
    categoria: 'Bases de Datos y Modelado',
    pregunta: '¿Qué vulnerabilidad crítica de seguridad se produce cuando una aplicación concatena directamente texto introducido por un usuario en una cadena de consulta SQL sin sanearla ni parametrizarla?',
    opciones: ['Desbordamiento de Buffer (Buffer Overflow)', 'Inyección SQL (SQL Injection)', 'Ataque de Fuerza Bruta', 'Cross-Site Scripting (XSS)'],
    correcta: 1,
    justificacion: 'Al no validar las entradas, un atacante puede inyectar comandos SQL maliciosos que el motor ejecutará, permitiéndole bypassar la autenticación o robar información.'
  },
  {
    categoria: 'Bases de Datos y Modelado',
    pregunta: 'Para mitigar eficazmente el riesgo de ataques de Inyección SQL en aplicaciones empresariales, los desarrolladores de sistemas informáticos deben priorizar el uso de:',
    opciones: [
      'Consultas dinámicas construidas puramente con concatenación de strings de texto.',
      'Antivirus instalados directamente en el servidor de datos.',
      'Consultas Preparadas (Prepared Statements) con parámetros vinculados de forma segura.',
      'Ocultar el código fuente de la aplicación en el lado del cliente.'
    ],
    correcta: 2,
    justificacion: 'Los Prepared Statements precompilan la estructura de la consulta, tratando las variables de usuario exclusivamente como literales de datos, neutralizando comandos inyectados.'
  },
  {
    categoria: 'Bases de Datos y Modelado',
    pregunta: '¿En qué consiste la técnica de "Fragmentación Horizontal" (Sharding) en el escalamiento de bases de datos de gran volumen?',
    opciones: [
      'Mover las columnas menos utilizadas de una tabla a otra base de datos de respaldo.',
      'Migrar todos los datos de un servidor Linux a uno Windows.',
      'Comprimir los índices del sistema para ahorrar un 50% de disco duro.',
      'Dividir las filas de una tabla grande en múltiples servidores o nodos independientes compartiendo el mismo esquema.'
    ],
    correcta: 3,
    justificacion: 'El Sharding distribuye las filas basándose en una clave de fragmentación, permitiendo añadir más servidores baratos en lugar de un único servidor gigante costoso.'
  },
  {
    categoria: 'Bases de Datos y Modelado',
    pregunta: '¿Qué diferencia conceptual introduce el modelo BASE de las bases de datos NoSQL frente al modelo ACID tradicional?',
    opciones: [
      'BASE favorece la disponibilidad y acepta la "Consistencia Eventual", asumiendo que los datos se sincronizarán por completo a lo largo del tiempo.',
      'BASE exige consistencia inmediata en cada milisegundo de operación.',
      'BASE solo trabaja con almacenamiento analógico físico.',
      'BASE requiere que las tablas estén normalizadas hasta la Quinta Forma Normal.'
    ],
    correcta: 0,
    justificacion: 'El modelo BASE (Basically Available, Soft state, Eventual consistency) relaja la consistencia estricta instantánea a cambio de un rendimiento masivo y alta disponibilidad web global.'
  },
  {
    categoria: 'Ingeniería de Software y Gestión',
    pregunta: '¿Cuál es la principal característica y desventaja del Modelo en Cascada (Waterfall) tradicional?',
    opciones: [
      'Es iterativo e incremental; su desventaja es que genera código muy lento.',
      'Es estrictamente secuencial; su desventaja es la rigidez ante cambios de requisitos una vez iniciada una fase.',
      'No requiere documentación; su desventaja es la falta de control administrativo.',
      'Integra pruebas automatizadas en cada subfase; su desventaja es el alto costo de licenciamiento.'
    ],
    correcta: 1,
    justificacion: 'El modelo en cascada avanza en fases sucesivas. Si se descubre un error de concepto en fases avanzadas, retroceder resulta sumamente costoso.'
  },
  {
    categoria: 'Ingeniería de Software y Gestión',
    pregunta: '¿Cuál es la diferencia fundamental entre un Requisito Funcional y un Requisito No Funcional?',
    opciones: [
      'Los funcionales los escribe el programador; los no funcionales los define el cliente.',
      'Los funcionales pertenecen solo a la interfaz de usuario; los no funcionales describen la lógica de la base de datos.',
      'Los funcionales caducan al finalizar el proyecto; los no funcionales persisten en el mantenimiento.',
      'Los funcionales describen los servicios o funciones que el sistema debe realizar; los no funcionales definen propiedades emergentes, restricciones y cualidades (rendimiento, seguridad, disponibilidad).'
    ],
    correcta: 3,
    justificacion: 'Un requisito funcional responde a "¿Qué debe hacer el sistema?" y uno no funcional a "¿Cómo debe ser el sistema?".'
  },
  {
    categoria: 'Ingeniería de Software y Gestión',
    pregunta: 'Durante la fase de elicitación de requisitos, ¿qué técnica es más aconsejable para descubrir la dinámica operativa real y las ineficiencias de un proceso de trabajo actual sin depender únicamente del testimonio verbal del usuario?',
    opciones: [
      'Cuestionarios cerrados masivos.',
      'Observación directa (Etnografía / Job Shadowing).',
      'Sesiones de lluvia de ideas (Brainstorming).',
      'Revisión aislada del código de sistemas competidores.'
    ],
    correcta: 1,
    justificacion: 'La observación directa permite al analista ver cómo se ejecutan las tareas en el entorno real, descubriendo pasos informales o cuellos de botella que los usuarios omiten.'
  },
  {
    categoria: 'Ingeniería de Software y Gestión',
    pregunta: 'Al redactar una especificación de requisitos, ¿cuál de las siguientes opciones describe la propiedad de "Ambigüedad Cero" o Claridad?',
    opciones: [
      'Que el requisito utilice tecnicismos de programación complejos que solo entiendan los ingenieros.',
      'Que ocupe más de tres páginas explicativas detallando la interfaz gráfica.',
      'Que el enunciado sea interpretable de una sola manera por cualquier lector (cliente, analista, desarrollador o tester).',
      'Que combine múltiples funcionalidades complejas en una única oración larga.'
    ],
    correcta: 2,
    justificacion: 'Un requisito ambiguo da pie a malas interpretaciones que pueden causar el rechazo del módulo construido, destruyendo la eficiencia del desarrollo.'
  },
  {
    categoria: 'Ingeniería de Software y Gestión',
    pregunta: 'Dentro del estándar IEEE 830, el documento central resultante de la fase de análisis se denomina:',
    opciones: [
      'Especificación de Requisitos de Software (ERS / SRS).',
      'Plan de Aseguramiento de la Calidad de Software (SQAP).',
      'Manual de Procedimientos de Despliegue Técnico.',
      'Diagrama de Estructura de Descomposición del Trabajo (WBS).'
    ],
    correcta: 0,
    justificacion: 'El SRS (Software Requirements Specification) es el contrato técnico que formaliza todos los requisitos acordados antes de pasar al diseño técnico.'
  },
  {
    categoria: 'Ingeniería de Software y Gestión',
    pregunta: '¿Cuál es el objetivo principal de la Arquitectura de Software dentro del diseño de sistemas complejos?',
    opciones: [
      'Elegir la tipografía y paleta de colores corporativos de las interfaces de usuario.',
      'Definir la estructura global del sistema, sus componentes clave, sus relaciones mutuas y las directrices que gobiernan su diseño y evolución, priorizando atributos de calidad.',
      'Escribir las rutinas de bajo nivel para el manejo de los controladores de teclado.',
      'Minimizar la cantidad de líneas de código escritas para ahorrar memoria en disco duro.'
    ],
    correcta: 1,
    justificacion: 'La arquitectura de software toma las decisiones estructurales de alto nivel más difíciles de cambiar para que el sistema cumpla con seguridad, mantenibilidad y rendimiento.'
  },
  {
    categoria: 'Ingeniería de Software y Gestión',
    pregunta: '¿Qué herramienta gráfica tradicional de control de proyectos se utiliza para planificar y calendarizar las tareas del sistema a lo largo del tiempo mediante barras horizontales, mostrando dependencias lógicas e hitos?',
    opciones: ['Diagrama de Gantt.', 'Tablero Kanban virtual.', 'Diagrama de Redes de Petri.', 'Matriz de Riesgos Amorfos.'],
    correcta: 0,
    justificacion: 'El diagrama de Gantt es la herramienta de planificación temporal por excelencia permitiendo visualizar la secuencia de actividades y la ruta crítica del proyecto.'
  },
  {
    categoria: 'Ingeniería de Software y Gestión',
    pregunta: '¿Cuál es la definición precisa de una "Prueba Unitaria" (Unit Test)?',
    opciones: [
      'Una prueba que ejecuta todo el sistema completo de principio a fin simulando un año completo de operaciones bancarias.',
      'La verificación aislada del funcionamiento correcto del componente o bloque de código fuente más pequeño analizable por separado (como una función o método de una clase).',
      'Una inspección visual realizada por el gerente general de la empresa cliente.',
      'Instalar el programa en una sola computadora personal y evaluar si enciende.'
    ],
    correcta: 1,
    justificacion: 'Las pruebas unitarias aíslan una porción de código y comprueban su lógica exacta ante entradas controladas utilizando simuladores de dependencias externas (mocks).'
  },
  {
    categoria: 'Ingeniería de Software y Gestión',
    pregunta: '¿Cuál es el objetivo principal del "Mantenimiento Correctivo" de un sistema de software en fase de explotación?',
    opciones: [
      'Agregar nuevas funcionalidades comerciales solicitadas por el área de ventas.',
      'Corregir defectos, bugs y fallos de software descubiertos por los usuarios en producción que impiden el funcionamiento normal previsto del sistema.',
      'Refactorizar el código fuente para que se adapte preventivamente a un nuevo sistema operativo.',
      'Cambiar los nombres de los servidores de datos por motivos de identidad de marca.'
    ],
    correcta: 1,
    justificacion: 'El mantenimiento correctivo es puramente reactivo y busca devolver el sistema a sus niveles de servicio normales solucionando problemas reales imprevistos.'
  },
  {
    categoria: 'Ingeniería de Software y Gestión',
    pregunta: '¿Qué describe el tipo de "Mantenimiento Evolutivo o Perfectivo" en el ciclo de vida de los sistemas informáticos?',
    opciones: [
      'La incorporación de nuevas funciones, ampliaciones o mejoras de rendimiento sugeridas para robustecer la aplicación original y responder a la evolución de las necesidades del negocio.',
      'El formateo preventivo semestral de los discos duros de los servidores principales de red.',
      'Eliminar la documentación del sistema para acelerar las búsquedas del código fuente.',
      'Reemplazar a los desarrolladores del sistema por personal técnico de soporte recién egado.'
    ],
    correcta: 0,
    justificacion: 'Los sistemas de software no son estáticos; el mantenimiento evolutivo añade valor extendiendo las capacidades operativas ante nuevos flujos comerciales.'
  },
  {
    categoria: 'Ingeniería de Software y Gestión',
    pregunta: '¿Cuál es la diferencia fundamental entre el Aseguramiento de la Calidad de Software (SQA) y el Control de Calidad de Software (SQC)?',
    opciones: [
      'SQA se enfoca en el código fuente; SQC se enfoca en la documentación.',
      'SQA es realizado exclusivamente por los desarrolladores; SQC lo realiza la gerencia general.',
      'SQA se aplica solo en metodologías ágiles y SQC en metodologías tradicionales.',
      'SQA es orientado al proceso y de naturaleza preventiva; SQC es orientado al producto y de naturaleza defectiva/detectiva.'
    ],
    correcta: 3,
    justificacion: 'SQA define y evalúa los procesos para evitar defectos; SQC se enfoca en examinar el producto final mediante pruebas para detectarlos y corregirlos antes de su entrega.'
  },
  {
    categoria: 'Ingeniería de Software y Gestión',
    pregunta: 'El estándar internacional ISO/IEC 25000 es ampliamente reconocido en la ingeniería de software bajo el nombre de:',
    opciones: [
      'ITIL (Information Technology Infrastructure Library).',
      'SQUARE (Software Product Quality Requirements and Evaluation).',
      'SPICE (Software Process Improvement and Capability Determination).',
      'CMMI (Capability Maturity Model Integration).'
    ],
    correcta: 1,
    justificacion: 'La familia de normas ISO/IEC 25000 (SQUARE) proporciona un marco de trabajo unificado para evaluar la calidad del producto de software.'
  },
  {
    categoria: 'Ingeniería de Software y Gestión',
    pregunta: '¿Qué describe la característica de "Fiabilidad" (Reliability) en un producto de software?',
    opciones: [
      'La velocidad con la que las interfaces gráficas responden a los clics del usuario.',
      'La compatibilidad nativa del código fuente con múltiples sistemas operativos.',
      'El grado en que un sistema realiza sus funciones especificadas bajo condiciones determinadas durante un período de tiempo estipulado.',
      'El costo financiero total de la fase de pruebas unitarias automatizadas.'
    ],
    correcta: 2,
    justificacion: 'La fiabilidad mide la estabilidad operativa del software e incluye aspectos como la madurez, tolerancia a fallos y capacidad de recuperación.'
  },
  {
    categoria: 'Ingeniería de Software y Gestión',
    pregunta: 'El Diagrama de Pareto (regla del 80/20) aplicado a la gestión de defectos de software postula que:',
    opciones: [
      'El 80% de los desarrolladores de la empresa cometen el 20% de los errores tipográficos.',
      'Aproximadamente el 80% de los defectos del sistema son causados por el 20% de las causas raíz o se concentran en el 20% de los módulos de software infectados.',
      'El 80% del presupuesto se gasta en el primer 20% del tiempo de desarrollo del cronograma.',
      'Las bases de datos relacionales consumen el 80% de la memoria RAM disponible.'
    ],
    correcta: 1,
    justificacion: 'El principio de Pareto ayuda a priorizar los esfuerzos de mejoramiento enfocándolos en resolver ese 20% de causas críticas para erradicar la mayoría de fallos.'
  },
  {
    categoria: 'Ingeniería de Software y Gestión',
    pregunta: '¿Qué herramienta cualitativa de calidad se conoce como "Diagrama de Ishikawa" o de "Espina de Pescado" y cuál es su utilidad práctica en los equipos de sistemas informáticos?',
    opciones: [
      'Un mapa de red física de los servidores empresariales.',
      'Un lenguaje formal para realizar consultas masivas en bases de datos orientadas a grafos.',
      'Una herramienta estructurada de análisis de causas que ayuda a identificar, clasificar y explorar las causas potenciales de un problema de calidad específico o fallo de software.',
      'Un método ágil para medir la velocidad del Sprint en entornos Scrum.'
    ],
    correcta: 2,
    justificacion: 'El diagrama de Ishikawa organiza visualmente las hipótesis de las causas de un problema agrupándolas en categorías estandarizadas (Personal, Métodos, Entorno, Herramientas, etc.).'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = preguntas;
}

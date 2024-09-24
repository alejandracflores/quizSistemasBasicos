// Arreglo de preguntas
const preguntas = [
    {
        id:1,
        categoria:"memoria",
        titulo:"¿Cuál de las siguientes es la unidad más pequeña de información en una computadora?",
        opcionA:"Byte",
        opcionB:"Bit",
        opcionC:"Kilobyte",
        opcionD:"Nibble",
        correcta:"b"
    },
    {
        id:2,
        categoria:"memoria",
        titulo:"¿Qué significa 'KB' en términos de almacenamiento digital?",
        opcionA:"Kilobyte",
        opcionB:"Kilobit",
        opcionC:"Kilo-baud",
        opcionD:"Kilo-bandwidth",
        correcta:"a"
    },
    {
        id:3,
        categoria:"memoria",
        titulo:"¿Cuál de las siguientes opciones es más grande en términos de almacenamiento?",
        opcionA:"Megabyte",
        opcionB:"Gigabyte",
        opcionC:"Kilobyte",
        opcionD:"Terabyte",
        correcta:"d"
    },
    {
        id:4,
        categoria:"memoria",
        titulo:"¿Tipo de memoria qué es volátil, es decir, pierde su contenido cuando se apaga el sistema?",
        opcionA:"ROM",
        opcionB:"EEPROM",
        opcionC:"RAM",
        opcionD:"Disco Duro",
        correcta:"c"
    },
    {
        id:5,
        categoria:"memoria",
        titulo:"¿Cuál de las siguientes unidades es usada para medir la memoria de una computadora?",
        opcionA:"Teraflops",
        opcionB:"Hertz",
        opcionC:"Gigabytes",
        opcionD:"Newtons",
        correcta:"c"
    },
    {
        id: 6,
        categoria: "memoria",
        titulo: "¿Cuántos bytes hay en un megabyte?",
        opcionA: "1,000",
        opcionB: "100",
        opcionC: "1,000,000",
        opcionD: "1,048,576",
        correcta: "c"
    },
    {
        id: 7,
        categoria: "memoria",
        titulo: "¿Qué tipo de memoria es ROM?",
        opcionA: "Volátil",
        opcionB: "No vólatil",
        opcionC: "Temporal",
        opcionD: "Cache",
        correcta: "b"
    },
    {
        id: 8,
        categoria: "memoria",
        titulo: "¿Cuál es la principal función de la memoria RAM en una computadora?",
        opcionA: "Almacenar datos permanentemente",
        opcionB: "Procesar instrucciones",
        opcionC: "Almacenar datos temporalmente",
        opcionD: "Gestionar la entrada/salida",
        correcta: "c"
    },
    {
        id: 9,
        categoria: "memoria",
        titulo: "¿Cuál de las siguientes opciones describe mejor la memoria caché?",
        opcionA: "Una memoria no vólatil de alta capacidad",
        opcionB: "Una memoria volátil de alta velocidad",
        opcionC: "Una memoria de bajo costo",
        opcionD: "Una memoria de solo lectura",
        correcta: "b"
    },
    {
        id: 10,
        categoria: "memoria",
        titulo: "¿Qué tipo de memoria es más rápida?",
        opcionA: "RAM",
        opcionB: "Memoria Caché",
        opcionC: "ROM",
        opcionD: "Disco duro",
        correcta: "b"
    },
    {
        id: 11,
        categoria: "procesamiento",
        titulo: "¿Cuál es la función principal de la CPU en una computadora?",
        opcionA: "Almacenar datos permanentemente",
        opcionB: "Procesar instrucciones",
        opcionC: "Gestionar la salida de video",
        opcionD: "Conectar dispositivos externos",
        correcta: "b"
    },
    {
        id: 12,
        categoria: "procesamiento",
        titulo: "¿Cuál es el significado de 'ALU' en el contexto de la CPU?",
        opcionA: "Arithmetic Logic Unit",
        opcionB: "Automated Logic Unit",
        opcionC: "Algorithmic Logic Unit",
        opcionD: "Analog Learning Unit",
        correcta: "a"
    },
    {
        id: 13,
        categoria: "procesamiento",
        titulo: "¿Cuál es la parte de la CPU encargada de dirigir el flujo de datos e instrucciones?",
        opcionA: "Unidad de control",
        opcionB: "Unidad de entrada",
        opcionC: "Unidad de procesamiento",
        opcionD: "Unidad de almacenamiento",
        correcta: "a"
    },
    {
        id: 14,
        categoria: "procesamiento",
        titulo: "¿Cuál de los siguientes es un componente clave de la CPU?",
        opcionA: "BIOS",
        opcionB: "Unidad de Almacenamiento",
        opcionC: "Memoria Caché",
        opcionD: "ALU",
        correcta: "d"
    },
    {
        id: 15,
        categoria: "procesamiento",
        titulo: "¿Qué determina la velocidad a la que la CPU puede procesar instrucciones?",
        opcionA: "Tamaño de la memoria RAM",
        opcionB: "Frecuencia del reloj",
        opcionC: "Capacidad del disco duro",
        opcionD: "Velocidad de la red",
        correcta: "b"
    },
    {
        id: 16,
        categoria: "procesamiento",
        titulo: "¿Cuál es la función principal de la memoria caché en la CPU?",
        opcionA: "Almacenar datos permanentemente",
        opcionB: "Proteger el sistema de fallos",
        opcionC: "Almacenar datos frecuentemente utilizados",
        opcionD: "Gestionar la salida de audio",
        correcta: "c"
    },
    {
        id: 17,
        categoria: "procesamiento",
        titulo: "¿Qué significa que una CPU sea multi-core?",
        opcionA: "Tiene múltiples unidades de memoria",
        opcionB: "Tiene varios procesadores independientes",
        opcionC: "Tiene más memoria caché",
        opcionD: "Puede ejecutar solo una tarea a la vez",
        correcta: "b"
    },
    {
        id: 18,
        categoria: "procesamiento",
        titulo: "¿Cuál es la principal diferencia entre la CPU y la GPU?",
        opcionA: "La CPU es más rápida en operaciones gráficas",
        opcionB: "La GPU es mejor en procesamiento de gráficos",
        opcionC: "La CPU se especializa en multitarea",
        opcionD: "La GPU se utiliza solo para almacenamiento",
        correcta: "b"
    },
    {
        id: 19,
        categoria: "procesamiento",
        titulo: "¿Cuál de los siguientes términos describe la capacidad de una CPU para ejecutar múltiples instrucciones simultáneamente?",
        opcionA: "Multitarea",
        opcionB: "Multiprocesamiento",
        opcionC: "Overclocking",
        opcionD: "Hyperthreading",
        correcta: "d"
    },
    {
        id: 20,
        categoria: "procesamiento",
        titulo: "¿Qué componente de la CPU se encarga de predecir las instrucciones que se ejecutarán a continuación?",
        opcionA: "Unidad de control",
        opcionB: "Unidad de predicción de ramas",
        opcionC: "Unidad de memoria",
        opcionD: "Unidad de entrada/salida",
        correcta: "b"
    },
    {
        id: 21,
        categoria: "eys",
        titulo: "¿Cuál de los siguientes dispositivos se considera de entrada?",
        opcionA: "Monitor",
        opcionB: "Impresora",
        opcionC: "Teclado",
        opcionD: "Altavoz",
        correcta: "c"
    },
    {
        id: 22,
        categoria: "eys",
        titulo: "¿Cuál de los siguientes dispositivos se utiliza para la salida de datos?",
        opcionA: "Ratón",
        opcionB: "Escáner",
        opcionC: "Monitor",
        opcionD: "Micrófono",
        correcta: "c"
    },
    {
        id: 23,
        categoria: "eys",
        titulo: "¿Cuál de los siguientes es un dispositivo tanto de entrada como de salida?",
        opcionA: "Disco duro",
        opcionB: "Teclado",
        opcionC: "Altavoz",
        opcionD: "Impresora",
        correcta: "a"
    },
    {
        id: 24,
        categoria: "eys",
        titulo: "¿Qué tipo de dispositivo es un escáner?",
        opcionA: "Dispositivo de salida",
        opcionB: "Dispositivo de entrada",
        opcionC: "Dispositivo de almacenamiento",
        opcionD: "Dispositivo de red",
        correcta: "b"
    },
    {
        id: 25,
        categoria: "eys",
        titulo: "¿Cuál de los siguientes dispositivos se utiliza para la salida de audio?",
        opcionA: "Monitor",
        opcionB: "Ratón",
        opcionC: "Altavoz",
        opcionD: "Teclado",
        correcta: "c"
    },
    {
        id: 26,
        categoria: "eys",
        titulo: "¿Cuál de los siguientes dispositivos de entrada convierte el movimiento físico en coordenadas digitales?",
        opcionA: "Monitor",
        opcionB: "Ratón",
        opcionC: "Teclado",
        opcionD: "Impresora",
        correcta: "b"
    },
    {
        id: 27,
        categoria: "eys",
        titulo: "¿Cuál de los siguientes dispositivos permite tanto la lectura como la escritura de datos?",
        opcionA: "Monitor",
        opcionB: "Altavoz",
        opcionC: "Disco óptico (CD/DVD)",
        opcionD: "Teclado",
        correcta: "c"
    },
    {
        id: 28,
        categoria: "eys",
        titulo: "¿Cuál de los siguientes dispositivos es exclusivamente de salida?",
        opcionA: "Impresora",
        opcionB: "Micrófono",
        opcionC: "Escáner",
        opcionD: "Ratón",
        correcta: "a"
    },
    {
        id: 29,
        categoria: "eys",
        titulo: "¿Qué dispositivo se utiliza para convertir voz o sonido en datos digitales?",
        opcionA: "Altavoz",
        opcionB: "Monitor",
        opcionC: "Micrófono",
        opcionD: "Impresora",
        correcta: "c"
    },
    {
        id: 30,
        categoria: "eys",
        titulo: "¿Cuál de los siguientes dispositivos de entrada se utiliza para capturar imágenes?",
        opcionA: "Altavoz",
        opcionB: "Teclado",
        opcionC: "Cámara digital",
        opcionD: "Monitor",
        correcta: "c"
    }
]
const retro = [
    { id: 1, res: "Un bit es la unidad más pequeña de información en una computadora, representando un 0 o un 1." },
    { id: 2, res: "'KB' significa Kilobyte, que equivale a 1,024 bytes." },
    { id: 3, res: "El Terabyte es la unidad más grande entre las opciones, seguido por Gigabyte, Megabyte y Kilobyte." },
    { id: 4, res: "La memoria RAM es volátil, lo que significa que pierde su contenido cuando se apaga el sistema." },
    { id: 5, res: "Los Gigabytes se utilizan para medir la memoria de una computadora, mientras que las otras opciones no." },
    { id: 6, res: "Un megabyte generalmente tiene 1,000,000 bytes (decimal), pero en términos binarios, es 1,048,576 bytes." },
    { id: 7, res: "La memoria ROM (Read-Only Memory) es no volátil, por lo que retiene los datos incluso sin energía." },
    { id: 8, res: "La memoria RAM almacena datos temporalmente, permitiendo a la computadora acceder rápidamente a la información en uso." },
    { id: 9, res: "La memoria caché es volátil y de alta velocidad, diseñada para acelerar el acceso a datos frecuentemente utilizados." },
    { id: 10, res: "La memoria caché es más rápida que la RAM y otros tipos de memoria en una computadora." },
    { id: 11, res: "La CPU es responsable de procesar instrucciones y ejecutar las operaciones de la computadora." },
    { id: 12, res: "La ALU (Arithmetic Logic Unit) es la parte de la CPU que realiza cálculos y operaciones lógicas." },
    { id: 13, res: "La Unidad de Control gestiona el flujo de datos e instrucciones dentro de la CPU." },
    { id: 14, res: "La ALU es un componente clave de la CPU, encargada de las operaciones aritméticas y lógicas." },
    { id: 15, res: "La frecuencia del reloj determina la velocidad de procesamiento de la CPU, medida en GHz." },
    { id: 16, res: "La memoria caché almacena datos frecuentemente utilizados para acelerar el acceso de la CPU." },
    { id: 17, res: "Una CPU multi-core tiene varios núcleos de procesamiento, lo que le permite manejar tareas simultáneas." },
    { id: 18, res: "La GPU (Unidad de Procesamiento Gráfico) es mejor para tareas relacionadas con gráficos que la CPU." },
    { id: 19, res: "El Hyperthreading permite a la CPU ejecutar múltiples hilos de instrucciones al mismo tiempo." },
    { id: 20, res: "La Unidad de predicción de ramas intenta predecir las instrucciones futuras para mejorar la eficiencia." },
    { id: 21, res: "El teclado es un dispositivo de entrada que permite al usuario introducir datos a la computadora." },
    { id: 22, res: "El monitor es un dispositivo de salida que muestra la información procesada por la computadora." },
    { id: 23, res: "El disco duro es un dispositivo tanto de entrada como de salida, ya que puede leer y escribir datos." },
    { id: 24, res: "Un escáner es un dispositivo de entrada que convierte documentos físicos en formatos digitales." },
    { id: 25, res: "Los altavoces son dispositivos de salida que reproducen sonido desde la computadora." },
    { id: 26, res: "El ratón convierte el movimiento físico en coordenadas digitales para interactuar con la interfaz de la computadora." },
    { id: 27, res: "Los discos ópticos, como CD o DVD, permiten tanto la lectura como la escritura de datos." },
    { id: 28, res: "La impresora es un dispositivo de salida que produce copias físicas de documentos digitales." },
    { id: 29, res: "El micrófono es un dispositivo de entrada que convierte la voz o el sonido en datos digitales." },
    { id: 30, res: "La cámara digital es un dispositivo de entrada utilizado para capturar imágenes en formato digital." }
];


const res_info = document.getElementById('res-content');
const title_info = document.getElementById('title-info');
const text_res = document.getElementById('text-res');
const btn_continue = document.getElementById('btn_continue');

// Elementos HTML
const txtPuntaje = document.querySelector("#puntos");
const nombre = document.querySelector("#nombre");

nombre.innerHTML = localStorage.getItem("nombre") || "Invitado";
let numPreguntaActual = 0;

// Puntaje en el localStorage
let puntajeTotal = 0;
if (!localStorage.getItem("puntaje-total")) {
    puntajeTotal = 0;
    txtPuntaje.innerHTML = puntajeTotal;
} else {
    puntajeTotal = parseInt(localStorage.getItem("puntaje-total"));
    txtPuntaje.innerHTML = puntajeTotal;
}

// Cargar las preguntas de la categoría elegida
const categoriaActual = localStorage.getItem("categoria-actual") || "memoria";
const preguntasCategoria = preguntas.filter(pregunta => pregunta.categoria === categoriaActual);

function cargarSiguientePregunta(num) {
    // Tomar elementos con los datos de las preguntas
    const numPregunta = document.querySelector("#num-pregunta");
    const txtPregunta = document.querySelector("#txt-pregunta");
    const opcionA = document.querySelector("#a");
    const opcionB = document.querySelector("#b");
    const opcionC = document.querySelector("#c");
    const opcionD = document.querySelector("#d");

    numPregunta.innerHTML = num + 1;
    txtPregunta.innerHTML = preguntasCategoria[num].titulo;
    opcionA.innerHTML = preguntasCategoria[num].opcionA;
    opcionB.innerHTML = preguntasCategoria[num].opcionB;
    opcionC.innerHTML = preguntasCategoria[num].opcionC;
    opcionD.innerHTML = preguntasCategoria[num].opcionD;

    const botonesRespuesta = document.querySelectorAll(".opcion");
    botonesRespuesta.forEach(opcion => {
        opcion.removeEventListener("click", agregarEventListenerBoton);
        opcion.classList.remove("correcta", "incorrecta", "no-events");
    });

    // Añadir nuevo event listener para cada opción
    botonesRespuesta.forEach(opcion => {
        opcion.addEventListener("click", agregarEventListenerBoton);
    });

    txtPuntaje.classList.remove("efecto");
}

function agregarEventListenerBoton(e) {
    const correcta = preguntasCategoria[numPreguntaActual].correcta;
    const retroInfo = retro.find(r => r.id === preguntasCategoria[numPreguntaActual].id).res;

    // Desactivar botones para evitar múltiples selecciones
    const botonesRespuesta = document.querySelectorAll(".opcion");
    botonesRespuesta.forEach(opcion => {
        opcion.classList.add("no-events");
    });

    // Marcar respuesta correcta o incorrecta antes de mostrar la alerta
    if (e.currentTarget.id === correcta) {
        // Respuesta correcta
        e.currentTarget.classList.add("correcta");
        puntajeTotal += 100;
        txtPuntaje.innerHTML = puntajeTotal;
        localStorage.setItem("puntaje-total", puntajeTotal);

        // Alerta de respuesta correcta con Swal
        setTimeout(() => {
            Swal.fire({
                title: '¡Correcto!',
                text: `${retroInfo}`,  // Mostrar información de retroalimentación
                icon: 'success',
                confirmButtonText: 'OK',
                heightAuto: false
            });
        }, 300);  // 300 ms de retraso para que se note el cambio de color
    } else {
        // Respuesta incorrecta
        e.currentTarget.classList.add("incorrecta");
        const correctaOpcion = document.querySelector("#" + correcta);
        correctaOpcion.classList.add("correcta");

        // Alerta de respuesta incorrecta con Swal
        setTimeout(() => {
            Swal.fire({
                title: 'Incorrecto',
                text: `${retroInfo}`,  // Mostrar información de retroalimentación
                icon: 'error',
                confirmButtonText: 'OK',
                heightAuto: false
            });
        }, 300);  // 300 ms de retraso para que se note el cambio de color
    }

    txtPuntaje.classList.add("efecto");
}


// Cargar la primera pregunta
cargarSiguientePregunta(numPreguntaActual);

// Evento para botón "Siguiente"
const btnSiguiente = document.querySelector("#siguiente");
btnSiguiente.addEventListener("click", () => {
    const botonesRespuesta = document.querySelectorAll(".opcion");
    const algunaSeleccionada = Array.from(botonesRespuesta).some(opcion =>
        opcion.classList.contains("correcta") || opcion.classList.contains("incorrecta")
    );

    if (!algunaSeleccionada) {
        Swal.fire({
            title: 'Advertencia',
            text: 'Debes seleccionar una respuesta antes de continuar.',
            icon: 'warning',
            confirmButtonText: 'OK',
            heightAuto: false
        });
        return;
    }

    // Si ya se seleccionó una respuesta, avanzar a la siguiente pregunta
    numPreguntaActual++;
    if (numPreguntaActual < preguntasCategoria.length) {
        cargarSiguientePregunta(numPreguntaActual);
    } else {
        location.href = "final.html";
    }
});


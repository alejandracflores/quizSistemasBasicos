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
        titulo:"¿Qué tipo de memoria es volátil, es decir, pierde su contenido cuando se apaga el sistema?",
        opcionA:"ROM",
        opcionB:"EEPROM",
        opcionC:"RAM",
        opcionD:"Disco Duro",
        correcta:"c"
    },
    {
        id:5,
        categoria:"memoria",
        titulo:"¿Cuál de las siguientes unidades es típicamente usada para medir la memoria de una computadora?",
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
        titulo: "¿Qué significa 'ALU' en el contexto de la CPU?",
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

// Eelementos HTML
const txtPuntaje = document.querySelector("#puntos");
const nombre = document.querySelector("#nombre");

nombre.innerHTML = localStorage.getItem("nombre");
let numPreguntaActual = 0;

// Puntaje en el localstorage (en caso de ya estar jugando)
let puntajeTotal = 0;
if(!localStorage.getItem("puntaje-total")){
    puntajeTotal = 0;
    txtPuntaje.innerHTML = puntajeTotal
}else{
    puntajeTotal = parseInt(localStorage.getItem("puntaje-total"));
    txtPuntaje.innerHTML = puntajeTotal;
}

// Cargar las preguntas de la categoría elegida
const categoriaActual = localStorage.getItem("categoria-actual");
const preguntasCategoria = preguntas.filter(pregunta => pregunta.categoria === categoriaActual);

function cargarSiguientePregunta(num){
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

    

    // Evenlistener al botón de cada respuesta
    const botonesRespuesta = document.querySelectorAll(".opcion");
    // Eliminar eventlisener y clases
    botonesRespuesta.forEach(opcion=>{
        opcion.removeEventListener("click", (e)=>{});
        opcion.classList.remove("correcta");
        opcion.classList.remove("incorrecta");
        opcion.classList.remove("no-events");
    })

    botonesRespuesta.forEach(opcion=>{
        opcion.addEventListener("click", agregarEventListenerBoton);
    })

    txtPuntaje.classList.remove("efecto");
}

function agregarEventListenerBoton(e){
    console.log(e.currentTarget.id);
    console.log(numPreguntaActual);
    console.log(preguntas[numPreguntaActual].correcta);
    
    // Respuesta correcta
    if(e.currentTarget.id === preguntasCategoria[numPreguntaActual].correcta){
        e.currentTarget.classList.add("correcta");
        puntajeTotal = puntajeTotal + 100;
        txtPuntaje.innerHTML = puntajeTotal;
        localStorage.setItem("puntaje-total", puntajeTotal);
        txtPuntaje.classList.add("efecto");
    }else{
        e.currentTarget.classList.add("incorrecta");
        const correcta = document.querySelector("#"+preguntasCategoria[numPreguntaActual].correcta);
        correcta.classList.add("correcta");
    }
    // Agregar un eventlistener a cada boton de respuesta
    const botonesRespuesta = document.querySelectorAll(".opcion");
    // Quitar los eventListen para que no pueda seguir haciendo clic
    console.log(botonesRespuesta)
    botonesRespuesta.forEach(opcion=>{
        opcion.classList.add("no-events");
    })
}

cargarSiguientePregunta(numPreguntaActual);

// Botón de siguiente
const btnSiguiente = document.querySelector("#siguiente")
btnSiguiente.addEventListener("click",()=>{
    numPreguntaActual++;
    if(numPreguntaActual<=10){
        cargarSiguientePregunta(numPreguntaActual);
    }
    else{
        const categoriasJugadasLS = JSON.parse(localStorage.getItem("categorias-jugadas"));
       
        console.log(categoriasJugadasLS.length);
        if(parseInt(categoriasJugadasLS.length) < 3){
            // alert
            location.href = "menu.html";
        }else{
            // Pantalla final al terminar las categorías
            location.href = "final.html";
        }
        
    }
    
})
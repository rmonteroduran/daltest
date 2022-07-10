/**
* Name: Daltest, test para niños
* Author: Rodrigo Montero
*/

// array imagenes
const imagenes = [
    { id:1, img: "../assets/img/test_ninios/kids-color-blind-test-01.jpeg" },
    { id:2, img: "../assets/img/test_ninios/kids-color-blind-test-02.jpeg" },
    { id:3, img: "../assets/img/test_ninios/kids-color-blind-test-03.jpeg" },
    { id:4, img: "../assets/img/test_ninios/kids-color-blind-test-04.jpeg" },
    { id:5, img: "../assets/img/test_ninios/kids-color-blind-test-05.jpeg" },
    { id:6, img: "../assets/img/test_ninios/kids-color-blind-test-06.jpeg" },
    { id:7, img: "../assets/img/test_ninios/kids-color-blind-test-07.jpeg" },
    { id:8, img: "../assets/img/test_ninios/kids-color-blind-test-08.jpeg" },
    { id:9, img: "../assets/img/test_ninios/kids-color-blind-test-09.jpeg" },
    { id:10, img: "../assets/img/test_ninios/kids-color-blind-test-10.jpeg" },
]

// array imagenes respuestas
const imagenesResp = [
    { id:'A', img: "../assets/img/test_ninios/01.jpeg" },
    { id:'B', img: "../assets/img/test_ninios/02.jpeg" },
    { id:'C', img: "../assets/img/test_ninios/03.jpeg" },
    { id:'D', img: "../assets/img/test_ninios/04.jpeg" },
    { id:'E', img: "../assets/img/test_ninios/05.jpeg" },
    { id:'F', img: "../assets/img/test_ninios/06.jpeg" },
    { id:'G', img: "../assets/img/test_ninios/07.jpeg" },
    { id:'H', img: "../assets/img/test_ninios/08.jpeg" },
    { id:'I', img: "../assets/img/test_ninios/09.jpeg" },
    { id:'J', img: "../assets/img/test_ninios/10.jpeg" },
]

//variables para proceso
let resultado = 0;
const respuestasCorrectas = ['H','E','B','J','D','G','A','F','C','I'];
sessionStorage.setItem('imgId', 0);
respuestas = [];
imgSeleccionada = "";

//////////FUNCIONES///////////

//funcion para cargar resultado de test
function finalTest() {
    comparar(respuestas); 
    //incorporo respuestas a lista html
    let padreResp = document.getElementById("respuestas");
    padreResp.innerText = "Respuestas";
    for (const respuesta of respuestas) {
        let li = document.createElement("li");
        li.innerHTML = respuesta;
        padreResp.appendChild(li);
    }
    //incorporo respuestas correctas a lista html
    let padreRespCorrectas = document.getElementById("respuestasCorrectas");
    padreRespCorrectas.innerText = "Respuestas Correctas"
    for (const respuestaCorrecta of respuestasCorrectas) {
        let li2 = document.createElement("li");
        li2.innerHTML = respuestaCorrecta;
        padreRespCorrectas.appendChild(li2);
    }
    //incorporo puntaje a html
    let puntaje = document.getElementById("puntaje");
    puntaje.innerText = 'Resultado: ' + Math.round((resultado*100)/10) + '% (' + resultado + '/10)'
    //incorporo boton reiniciar
    let reinicio = document.getElementById("reiniciar");
    reinicio.href = "niniosTest.html"
    let btn = document.createElement("button");
    btn.className = "btn-test-inicio";
    btn.id = "btn-reinciar";
    reinicio.append(btn);
    btn.innerText = "Reiniciar";
}

//funcion para comparar respuestas ingresadas vs respuestas correctas
function comparar(arr) {
    resultado = 0;
    arr.forEach((elemento, indice)=> {
        elemento === respuestasCorrectas[indice] && resultado++;
    })
}

//funcion para cargar imagen inicial
function cargarImagen(x) {
    //cargo imagen, input y boton siguiente
    Imagen = imagenes[x];
    let imgs = document.getElementById("imagenes");
    let img = document.createElement("div");
    img.id="imagenes-child";
    img.className="img-test-ishihara-child";
    img.innerHTML=`
    <img id="img-src" src="${Imagen.img}" alt="">
    `;
    imgs.append(img);
}

//funcion para carga de imagenes de respuestas
function imgRsp() {
    let imgsRsp = document.getElementById("imagenesRespuestas")
    imagenesResp.forEach(imagen => {
        let imgRsp = document.createElement("div")
        imgRsp.className ="col-lg-3 col-md-4"
        imgRsp.id = "dibu" + imagen.id
        imgRsp.innerHTML =`
        <div class="gallery-item">
            <img src="${imagen.img}" alt="" class="img-fluid dibus">
        </div>
        `
        imgsRsp.append(imgRsp)
    });
}

//funcion de proceso
function proceso() {
    let imgNro = sessionStorage.getItem('imgId');
    if (imgNro == 0) { 
        //quito el boton iniciar
        botonIni.remove();
        //cambio texto subtitulo
        let txt = document.getElementById("texto-test");
        txt.innerText = "Hay animales escondidos entre los puntos. Elige de entre los animales que te mostramos abajo el que coincida con el que hay en el círculo de puntos.";
        //llamo funcion para cargar imagen
        cargarImagen(imgNro);
        //cargo imagenes respuestas
        imgRsp();
        //eventos de las imagenes
        imagenesResp.forEach((el) => {
            let img = document.getElementById("dibu" + el.id)
            img.onclick = () => {
                imgSeleccionada = el.id;
                proceso();
            }
        })
        //muevo la posicion
        nxtImg = parseFloat(imgNro) + 1;
        sessionStorage.setItem('imgId', nxtImg);
    } else if (imgNro == 10) {
        //guardo respuesta
        respuestas.push(imgSeleccionada);
        //elimino objetos
        let tst = document.getElementById("imagenes");
        let txt = document.getElementById("texto-test");
        let rsp = document.getElementById("imagenesRespuestas");
        tst.remove();
        txt.remove();
        rsp.remove();
        //calculo resultado test
        finalTest();
    } else {
        //guardo respuesta
        respuestas.push(imgSeleccionada);
        //reemplazo imagen
        Imagen = imagenes[imgNro];
        let img = document.getElementById("img-src");
        img.src = Imagen.img;
        //muevo la posicion
        nxtImg = parseFloat(imgNro) + 1;
        sessionStorage.setItem('imgId', nxtImg);
        //notificacion
        Toastify({
            text: "Respuesta guardada!",
            duration: 2000, // milisegundos
            position: 'center',
            style: {
                background: '#3291e6'
            }
        }).showToast();        
    }
}

/////////////EVENTOS//////////////

//evento sobre boton iniciar
let botonIni = document.getElementById("btnIniciar");
botonIni.addEventListener("click", proceso);




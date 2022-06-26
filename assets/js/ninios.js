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

//carga de imagenes en html
let imgs = document.getElementById("imagenes")
imagenes.forEach(imagen => {
    let img = document.createElement("div")
    img.className="col-lg-3 col-md-4"
    img.innerHTML=`
    <div class="gallery-item">
        <img src="${imagen.img}" alt="" class="img-ninios">
        <p>${imagen.id}</p>
    </div>
    `
    imgs.append(img)
});

//carga de imagenes de respuestas en html
let imgsRsp = document.getElementById("imagenesRespuestas")
imagenesResp.forEach(imagen => {
    let imgRsp = document.createElement("div")
    imgRsp.className="col-lg-3 col-md-4"
    imgRsp.innerHTML=`
    <div class="gallery-item">
        <img src="${imagen.img}" alt="" class="img-fluid">
        <p>${imagen.id}</p>
    </div>
    `
    imgsRsp.append(imgRsp)
});

//variables para proceso
let resultado = 0;
const respuestasCorrectas = ['H','E','B','J','D','G','A','F','C','I'];

//evento sobre boton iniciar
let boton = document.getElementById("btnIniciar")
boton.addEventListener("click", proceso)

//funcion para comparar respuestas ingresadas vs respuestas correctas
function comparar(arr) {
    resultado = 0;
    arr.forEach((elemento, indice)=> {
        if (elemento === respuestasCorrectas[indice]) {
            resultado += 1;
        }
    })
}

//funcion de proceso
function proceso () {
    let respuestas = [];
    for (let i = 1; i <= 10; i++) {
        let letraIngresada = prompt('Ingrese la letra correspondiente a la imagen nro. ' + i + ' (ESC para salir)').toLocaleUpperCase();
        respuestas.push(letraIngresada); //guardo en array la respuesta ingresada
        if (letraIngresada == 'ESC' || letraIngresada == '') {
            i = 13; //si no se ingresa nada o se ingresa esc fuerzo la salida
            //limpio listas de respuestas
            let limpiarRespuestas = document.getElementById("respuestas");
            let limpiarRespuestasCorrectas = document.getElementById("respuestasCorrectas");
            let limpiarPuntaje = document.getElementById("puntaje");
            limpiarRespuestas.innerText = "";
            limpiarRespuestasCorrectas.innerText = "";
            limpiarPuntaje.innerText = "";
            for (let j = 0; j < 12; j++) {
                limpiarRespuestas.removeChild(j);
                limpiarRespuestasCorrectas.removeChild(j);
            }
            break;
        } else {
            if (i === 10) {
                comparar(respuestas); //llamo a la funcion para comparar
                //incorporo respuestas a lista html
                let padreResp = document.getElementById("respuestas");
                padreResp.innerText = "Respuestas"
                for (const respuesta of respuestas) {
                    let li = document.createElement("li");
                    li.innerHTML = respuesta
                    padreResp.appendChild(li);
                }
                //incorporo respuestas correctas a lista html
                let padreRespCorrectas = document.getElementById("respuestasCorrectas");
                padreRespCorrectas.innerText = "Respuestas Correctas"
                for (const respuestaCorrecta of respuestasCorrectas) {
                    let li2 = document.createElement("li");
                    li2.innerHTML = respuestaCorrecta
                    padreRespCorrectas.appendChild(li2);
                }
                //incorporo puntaje a html
                let puntaje = document.getElementById("puntaje");
                puntaje.innerText = 'Resultado: ' + Math.round((resultado*100)/10) + '% (' + resultado + '/10)'
            }
        }
    }
}




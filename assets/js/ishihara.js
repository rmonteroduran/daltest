/**
* Name: Daltest, test de ishihara
* Author: Rodrigo Montero
*/

// array imagenes
const imagenes = [
    { id:1, img: "../assets/img/test_ishihara/Ishihara_01.jpeg" },
    { id:2, img: "../assets/img/test_ishihara/Ishihara_02.jpeg" },
    { id:3, img: "../assets/img/test_ishihara/Ishihara_03.jpeg" },
    { id:4, img: "../assets/img/test_ishihara/Ishihara_04.jpeg" },
    { id:5, img: "../assets/img/test_ishihara/Ishihara_05.jpeg" },
    { id:6, img: "../assets/img/test_ishihara/Ishihara_06.jpeg" },
    { id:7, img: "../assets/img/test_ishihara/Ishihara_07.jpeg" },
    { id:8, img: "../assets/img/test_ishihara/Ishihara_08.jpeg" },
    { id:9, img: "../assets/img/test_ishihara/Ishihara_09.jpeg" },
    { id:10, img: "../assets/img/test_ishihara/Ishihara_10.jpeg" },
    { id:11, img: "../assets/img/test_ishihara/Ishihara_11.jpeg" },
    { id:12, img: "../assets/img/test_ishihara/Ishihara_12.jpeg" },
]

//carga de imagenes en html
let imgs = document.getElementById("imagenes")
imagenes.forEach(imagen => {
    let img = document.createElement("div")
    img.className="col-lg-3 col-md-4"
    img.innerHTML=`
    <div class="gallery-item">
    <img src="${imagen.img}" alt="" class="img-fluid">
    <p>${imagen.id}</p>
    </div>
    `
    imgs.append(img)
});

//variables para proceso
let resultado = 0;
const respuestasCorrectas = ['74', '6', '16', '2', '29', '7', '45', '5', '97', '8', '42', '3'];

//evento sobre boton iniciar
let boton = document.getElementById("btnIniciar")
boton.addEventListener("click", proceso)

//funcion para comparar respuestas ingresadas vs respuestas correctas
function comparar(arr) {
    resultado = 0;
    arr.forEach((elemento, indice)=> {
        if (respuestasCorrectas[indice].substring(0,1)) {
            if (elemento.substring(0,1) == respuestasCorrectas[indice].substring(0,1) || elemento.substring(1,2) == respuestasCorrectas[indice].substring(0,1)) {
                console.log(elemento.substring(0,1) + ' , ' + respuestasCorrectas[indice].substring(0,1));
                resultado += 1;
            }
        }
        if (respuestasCorrectas[indice].substring(1,2)) {
            if (elemento.substring(1,2) == respuestasCorrectas[indice].substring(1,2) || elemento.substring(0,1) == respuestasCorrectas[indice].substring(1,2)) {
                console.log(elemento.substring(1,2) + ' , ' + respuestasCorrectas[indice].substring(1,2));
                resultado += 1;
            }
        }
    })
}

//funcion de proceso
function proceso () {
    let respuestas = [];
    for (let i = 1; i <= 12; i++) {
        let numeroIngresado = prompt('Ingrese el número de la imagen nro. ' + i + ' (0 para salir)');
        respuestas.push(numeroIngresado); //guardo en array la respuesta ingresada
        if (numeroIngresado == 0) {
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
            if (i === 12) {
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
                puntaje.innerText = 'Resultado: ' + Math.round((resultado*100)/18) + '% (' + resultado + '/18)'
            }
        }
    }
}




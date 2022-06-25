/**
* Name: Daltest, test para niños
* Author: Rodrigo Montero
*/

//variables
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




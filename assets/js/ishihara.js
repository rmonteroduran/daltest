/**
* Name: Daltest, test de ishihara
* Author: Rodrigo Montero
*/

let resultado = 0;
let respuestas = [];
const respuestasCorrectas = ['74', '6', '16', '2', '29', '7', '45', '5', '97', '8', '42', '3'];

//funcion para comparar respuestas ingresadas vs respuestas correctas
function comparar(arr) {
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

//proceso
for (let i = 1; i <= 12; i++) {
    let numeroIngresado = prompt('Ingrese el número de la imagen nro. ' + i + ' (0 para salir)');
    respuestas.push(numeroIngresado); //guardo en array la respuesta ingresada
    if (numeroIngresado == 0) {
        i = 13; //si no se ingresa nada o se ingresa esc fuerzo la salida
        break;
    } else {
        if (i === 12) {
            comparar(respuestas); //llamo a la funcion para comparar
            alert('Respuestas: ' + respuestas.join()); //muestro respuestas ingresadas
            alert('Respuestas correctas: ' + respuestasCorrectas.join()); // muestro respuestas correctas
            alert('Resultado: ' + Math.round((resultado*100)/18) + '% (' + resultado + '/18)'); //muestro resultado
        }
    }
}




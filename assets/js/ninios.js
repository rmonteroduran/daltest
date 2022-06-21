/**
* Name: Daltest, test para niños
* Author: Rodrigo Montero
*/
let resultado = 0;
let respuestas = [];
const respuestasCorrectas = ['H','E','B','J','D','G','A','F','C','I'];

//funcion para comparar respuestas ingresadas vs respuestas correctas
function comparar(arr) {
    arr.forEach((elemento, indice)=> {
        if (elemento === respuestasCorrectas[indice]) {
            resultado += 1;
        }
    })
}

//proceso
for (let i = 1; i <= 10; i++) {
    let letraIngresada = prompt('Ingrese la letra correspondiente a la imagen nro. ' + i + ' (ESC para salir)').toLocaleUpperCase();
    respuestas.push(letraIngresada); //guardo en array la respuesta ingresada
    if (letraIngresada == 'ESC' || letraIngresada == '') {
        i = 13; //si no se ingresa nada o se ingresa esc fuerzo la salida
        break;
    } else {
        if (i === 10) {
            comparar(respuestas); //llamo a la funcion para comparar
            alert('Respuestas: ' + respuestas.join()); //muestro respuestas ingresadas
            alert('Respuestas correctas: ' + respuestasCorrectas.join()); // muestro respuestas correctas
            alert('Resultado: ' + ((resultado*100)/10) + '% (' + resultado + '/10)'); //muestro resultado
        }
    }
}




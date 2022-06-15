/**
* Name: Daltest, test para niños
* Author: Rodrigo Montero
*/

let resultado = 0;
let respuestas = [];
const respuestasCorrectas = ['H','E','B','J','D','G','A','F','C','I'];

for (let i = 1; i <= 10; i++) {
    let letraIngresada = prompt('Ingrese la letra correspondiente a la imagen nro. ' + i + ' (ESC para salir)').toLocaleUpperCase();
    if (letraIngresada == 'ESC' || letraIngresada == '') {
        i = 13;
    } else {
        respuestas.push(letraIngresada);
        if (letraIngresada == respuestasCorrectas[i-1]) {
            resultado = resultado + 1;
        }
    }
}

if (resultado != 0) {
    alert('Respuestas: ' + respuestas.join());
    alert('Respuestas correctas: ' + respuestasCorrectas.join());
    alert('Resultado: ' + ((resultado*100)/10) + '% (' + resultado + '/10)');
}




/**
* Name: Daltest
* Author: Rodrigo Montero
*/

let resultado = 0;
let respuestas = '';
const respuestasCorrectas = '8, 5, 2, 10, 4, 7, 1, 6, 3, 9';

for (let i = 1; i <= 10; i++) {
    let numeroIngresado = prompt('Ingrese el número de la imagen nro. ' + i + ' (0 para salir)');
    if (numeroIngresado == 0) {
        i = 13;
    } else {
        switch (i) {
            case 1:
                respuestas = numeroIngresado 
                if (numeroIngresado == 8) {
                    resultado = resultado + 1
                }
                break;
            case 2:
                respuestas = respuestas + ', ' + numeroIngresado 
                if (numeroIngresado == 5) {
                    resultado = resultado + 1
                }
                break;
            case 3:
                respuestas = respuestas + ', ' + numeroIngresado 
                if (numeroIngresado == 2) {
                    resultado = resultado + 1
                }
                break;
            case 4:
                respuestas = respuestas + ', ' + numeroIngresado 
                if (numeroIngresado == 10) {
                    resultado = resultado + 1
                }
                break;
            case 5:
                respuestas = respuestas + ', ' + numeroIngresado 
                if (numeroIngresado == 4) {
                    resultado = resultado + 1
                }
                break;
            case 6:
                respuestas = respuestas + ', ' + numeroIngresado 
                if (numeroIngresado == 7) {
                    resultado = resultado + 1
                }
                break;
            case 7:
                respuestas = respuestas + ', ' + numeroIngresado 
                if (numeroIngresado == 1) {
                    resultado = resultado + 1
                }
                break;
            case 8:
                respuestas = respuestas + ', ' + numeroIngresado 
                if (numeroIngresado == 6) {
                    resultado = resultado + 1
                }
                break;
            case 9:
                respuestas = respuestas + ', ' + numeroIngresado 
                if (numeroIngresado == 3) {
                    resultado = resultado + 1
                }
                break;
            case 10:
                respuestas = respuestas + ', ' + numeroIngresado 
                if (numeroIngresado == 9) {
                    resultado = resultado + 1
                }
                if (resultado != 0) {
                    alert('Respuestas: ' + respuestas)
                    alert('Respuestas correctas: ' + respuestasCorrectas)
                    alert('Resultado: ' + ((resultado*100)/10) + '% (' + resultado + '/10)')
                }
                break;
            }
        }
    }




/**
* Name: Daltest, test de ishihara
* Author: Rodrigo Montero
*/

let resultado = 0;
let respuestas = '';
const respuestasCorrectas = '74, 6, 16, 2, 29, 7, 45, 5, 97, 8, 42, 3';

for (let i = 1; i <= 12; i++) {
    let numeroIngresado = prompt('Ingrese el número de la imagen nro. ' + i + ' (0 para salir)');
    if (numeroIngresado == 0) {
        i = 13;
    } else {
        switch (i) {
            case 1:
                respuestas = numeroIngresado 
                if (numeroIngresado.substring(0,1) == 7) {
                    resultado = resultado + 1
                } 
                if (numeroIngresado.substring(1,2) == 4) {
                    resultado = resultado + 1
                }
                break;
            case 2:
                respuestas = respuestas + ', ' + numeroIngresado 
                if (numeroIngresado == 6) {
                    resultado = resultado + 1
                }
                break;
            case 3:
                respuestas = respuestas + ', ' + numeroIngresado 
                if (numeroIngresado.substring(0,1) == 1) {
                    resultado = resultado + 1
                }
                if (numeroIngresado.substring(1,2) == 6) {
                    resultado = resultado + 1
                }
                break;
            case 4:
                respuestas = respuestas + ', ' + numeroIngresado 
                if (numeroIngresado == 2) {
                    resultado = resultado + 1
                }
                break;
            case 5:
                respuestas = respuestas + ', ' + numeroIngresado 
                if (numeroIngresado.substring(0,1) == 2) {
                    resultado = resultado + 1
                } 
                if (numeroIngresado.substring(1,2) == 9) {
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
                if (numeroIngresado.substring(0,1) == 4) {
                    resultado = resultado + 1
                } 
                if (numeroIngresado.substring(1,2) == 5) {
                    resultado = resultado + 1
                }
                break;
            case 8:
                respuestas = respuestas + ', ' + numeroIngresado 
                if (numeroIngresado == 5) {
                    resultado = resultado + 1
                }
                break;
            case 9:
                respuestas = respuestas + ', ' + numeroIngresado 
                if (numeroIngresado.substring(0,1) == 9) {
                    resultado = resultado + 1
                } 
                if (numeroIngresado.substring(1,2) == 7) {
                    resultado = resultado + 1
                }
                break;
            case 10:
                respuestas = respuestas + ', ' + numeroIngresado 
                if (numeroIngresado == 8) {
                    resultado = resultado + 1
                }
                break;
            case 11:
                respuestas = respuestas + ', ' + numeroIngresado 
                if (numeroIngresado.substring(0,1) == 4) {
                    resultado = resultado + 1
                }
                if (numeroIngresado.substring(1,2) == 2) {
                    resultado = resultado + 1
                }
                break;
            case 12:
                respuestas = respuestas + ', ' + numeroIngresado 
                if (numeroIngresado == 3) {
                    resultado = resultado + 1
                }
                if (resultado != 0) {
                    alert('Respuestas: ' + respuestas)
                    alert('Respuestas correctas: ' + respuestasCorrectas)
                    alert('Resultado: ' + ((resultado*100)/18) + '% (' + resultado + '/18)')
                }
                break;
            }
        }
    }



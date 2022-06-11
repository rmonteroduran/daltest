
/**
* Name: Daltest, test para niños
* Author: Rodrigo Montero
*/

let resultado = 0;
let respuestas = '';
const respuestasCorrectas = 'H, E, B, J, D, G, A, F, C, I';

for (let i = 1; i <= 10; i++) {
    let letraIngresada = prompt('Ingrese la letra correspondiente a la imagen nro. ' + i + ' (ESC para salir)').toLocaleUpperCase();
    if (letraIngresada == 'ESC' || letraIngresada == '') {
        i = 13;
    } else {
        switch (i) {
            case 1:
                respuestas = letraIngresada;
                if (letraIngresada == 'H') {
                    resultado = resultado + 1
                }
                break;
            case 2:
                respuestas = respuestas + ', ' + letraIngresada;
                if (letraIngresada == 'E') {
                    resultado = resultado + 1
                }
                break;
            case 3:
                respuestas = respuestas + ', ' + letraIngresada
                if (letraIngresada == 'B') {
                    resultado = resultado + 1
                }
                break;
            case 4:
                respuestas = respuestas + ', ' + letraIngresada 
                if (letraIngresada == 'J') {
                    resultado = resultado + 1
                }
                break;
            case 5:
                respuestas = respuestas + ', ' + letraIngresada 
                if (letraIngresada == 'D') {
                    resultado = resultado + 1
                }
                break;
            case 6:
                respuestas = respuestas + ', ' + letraIngresada 
                if (letraIngresada == 'G') {
                    resultado = resultado + 1
                }
                break;
            case 7:
                respuestas = respuestas + ', ' + letraIngresada 
                if (letraIngresada == 'A') {
                    resultado = resultado + 1
                }
                break;
            case 8:
                respuestas = respuestas + ', ' + letraIngresada
                if (letraIngresada == 'F') {
                    resultado = resultado + 1
                }
                break;
            case 9:
                respuestas = respuestas + ', ' + letraIngresada
                if (letraIngresada == 'C') {
                    resultado = resultado + 1
                }
                break;
            case 10:
                respuestas = respuestas + ', ' + letraIngresada 
                if (letraIngresada == 'I') {
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



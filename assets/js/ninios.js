
/**
* Name: Daltest, test para niños
* Author: Rodrigo Montero
*/

let resultado = 0;
let respuestas = '';
const respuestasCorrectas = ['H','E','B','J','D','G','A','F','C','I'];

for (let i = 1; i <= 10; i++) {
    let letraIngresada = prompt('Ingrese la letra correspondiente a la imagen nro. ' + i + ' (ESC para salir)').toLocaleUpperCase();
    if (letraIngresada == 'ESC' || letraIngresada == '') {
        i = 13;
    } else {
        switch (i) {
            case 1:
                respuestas = letraIngresada;
                if (letraIngresada == respuestasCorrectas[i-1]) {
                    resultado = resultado + 1
                }
                break;
            case 2:
                respuestas = respuestas + ', ' + letraIngresada;
                if (letraIngresada == respuestasCorrectas[i-1]) {
                    resultado = resultado + 1
                }
                break;
            case 3:
                respuestas = respuestas + ', ' + letraIngresada
                if (letraIngresada == respuestasCorrectas[i-1]) {
                    resultado = resultado + 1
                }
                break;
            case 4:
                respuestas = respuestas + ', ' + letraIngresada 
                if (letraIngresada == respuestasCorrectas[i-1]) {
                    resultado = resultado + 1
                }
                break;
            case 5:
                respuestas = respuestas + ', ' + letraIngresada 
                if (letraIngresada == respuestasCorrectas[i-1]) {
                    resultado = resultado + 1
                }
                break;
            case 6:
                respuestas = respuestas + ', ' + letraIngresada 
                if (letraIngresada == respuestasCorrectas[i-1]) {
                    resultado = resultado + 1
                }
                break;
            case 7:
                respuestas = respuestas + ', ' + letraIngresada 
                if (letraIngresada == respuestasCorrectas[i-1]) {
                    resultado = resultado + 1
                }
                break;
            case 8:
                respuestas = respuestas + ', ' + letraIngresada
                if (letraIngresada == respuestasCorrectas[i-1]) {
                    resultado = resultado + 1
                }
                break;
            case 9:
                respuestas = respuestas + ', ' + letraIngresada
                if (letraIngresada == respuestasCorrectas[i-1]) {
                    resultado = resultado + 1
                }
                break;
            case 10:
                respuestas = respuestas + ', ' + letraIngresada 
                if (letraIngresada == respuestasCorrectas[i-1]) {
                    resultado = resultado + 1
                }
                if (resultado != 0) {
                    alert('Respuestas: ' + respuestas)
                    alert('Respuestas correctas: ' + respuestasCorrectas.join())
                    alert('Resultado: ' + ((resultado*100)/10) + '% (' + resultado + '/10)')
                }
                break;
            }
        }
    }



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

//variables para proceso
let resultado = 0;
const respuestasCorrectas = ['74', '6', '16', '2', '29', '7', '45', '5', '97', '8', '42', '3'];
sessionStorage.setItem('imgId', 0);
respuestas = [];

//////////FUNCIONES///////////

//funcion para cargar resultado de test
function finalTest() {
    comparar(respuestas); 
    //incorporo respuestas a lista html
    let padreResp = document.getElementById("respuestas");
    padreResp.innerText = "Respuestas";
    for (const respuesta of respuestas) {
        let li = document.createElement("li");
        li.innerHTML = respuesta;
        padreResp.appendChild(li);
    }
    //incorporo respuestas correctas a lista html
    let padreRespCorrectas = document.getElementById("respuestasCorrectas");
    padreRespCorrectas.innerText = "Respuestas Correctas"
    for (const respuestaCorrecta of respuestasCorrectas) {
        let li2 = document.createElement("li");
        li2.innerHTML = respuestaCorrecta;
        padreRespCorrectas.appendChild(li2);
    }
    //incorporo puntaje a html
    let puntaje = document.getElementById("puntaje");
    puntaje.innerText = 'Resultado: ' + Math.round((resultado*100)/18) + '% (' + resultado + '/18)'
    //incorporo boton reiniciar
    let reinicio = document.getElementById("reiniciar");
    reinicio.href = "ishiharaTest.html"
    let btn = document.createElement("button");
    btn.className = "btn-test-inicio";
    btn.id = "btn-reinciar";
    reinicio.append(btn);
    btn.innerText = "Reiniciar";
}

//funcion para comparar respuestas ingresadas vs respuestas correctas
function comparar(arr) {
    resultado = 0;
    arr.forEach((elemento, indice)=> {
        const primerDigito = respuestasCorrectas[indice].substring(0,1) ? true : false
        const segundoDigito = respuestasCorrectas[indice].substring(1,2) ? true : false
        primerDigito && ((elemento.substring(0,1) == respuestasCorrectas[indice].substring(0,1) || elemento.substring(1,2) == respuestasCorrectas[indice].substring(0,1)) && resultado++);
        segundoDigito && ((elemento.substring(1,2) == respuestasCorrectas[indice].substring(1,2) || elemento.substring(0,1) == respuestasCorrectas[indice].substring(1,2)) && resultado++);
    })
}

//funcion para cargar imagen inicial
function cargarImagen(x) {
    //cargo imagen, input y boton siguiente
    Imagen = imagenes[x];
    let imgs = document.getElementById("imagenes");
    let img = document.createElement("div");
    img.id="imagenes-child";
    img.className="img-test-ishihara-child";
    img.innerHTML=`
    <img id="img-src" src="${Imagen.img}" alt="">
    <input type="text" id="nro-resp" placeholder="Número">
    <button id="btnSiguiente" class="btn-test-inicio">Siguiente</button>
    `;
    imgs.append(img);
}

//funcion de proceso
function proceso() {
    let imgNro = sessionStorage.getItem('imgId');
    if (imgNro == 0) { 
        //quito el boton iniciar
        botonIni.remove();
        //cambio texto subtitulo
        let txt = document.getElementById("texto-test");
        txt.innerText = "Tienes que introducir el número o números que veas en cada disco. Hay 12 discos.";
        //llamo funcion para cargar imagen
        cargarImagen(imgNro);
        //muevo la posicion
        nxtImg = parseFloat(imgNro) + 1;
        sessionStorage.setItem('imgId', nxtImg);
    } else if (imgNro == 12) {
        let rsp = document.getElementById("nro-resp").value;
        //valido respuesta
        numRsp = isNaN(rsp)
        if (rsp == null || rsp == "" || numRsp == true) {
            Swal.fire({
                title: 'Ingrese un número!',
                icon: 'error',
                confirmButtonText: 'Continuar',
                confirmButtonColor: "#3291e6"
            })
        } else {
            //guardo respuesta
            respuestas.push(rsp);
            //elimino objetos
            let tst = document.getElementById("imagenes");
            let txt = document.getElementById("texto-test");
            tst.remove();
            txt.remove();
            //calculo resultado test
            finalTest();
        }
    } else {
        let rsp = document.getElementById("nro-resp").value;
        //valido respuesta
        numRsp = isNaN(rsp)
        if (rsp == null || rsp == "" || numRsp == true) {
            Swal.fire({
                title: 'Ingrese un número!',
                icon: 'error',
                confirmButtonText: 'Continuar',
                confirmButtonColor: "#3291e6"
            })
        } else {
            //guardo respuesta
            respuestas.push(rsp);
            //reemplazo imagen
            Imagen = imagenes[imgNro];
            let img = document.getElementById("img-src");
            img.src = Imagen.img;
            //vacio input
            document.getElementById("nro-resp").value = "";
            //muevo la posicion
            nxtImg = parseFloat(imgNro) + 1;
            sessionStorage.setItem('imgId', nxtImg);
            //notificacion
            Toastify({
                text: "Respuesta guardada!",
                duration: 2000, // milisegundos
                position: 'center',
                style: {
                    background: '#3291e6'
                }
            }).showToast();
        }
    }
    //evento sobre boton siguiente
    if (imgNro <= 11) {
        let botonSte = document.getElementById("btnSiguiente");
        botonSte.addEventListener("click", proceso);
        imgNro == 11 && (botonSte.innerText = "Finalizar");
    }
}

////////////EVENTOS///////////

//evento sobre boton iniciar
let botonIni = document.getElementById("btnIniciar");
botonIni.addEventListener("click", proceso);





/**
* Name: Daltest, test de ishihara
* Author: Rodrigo Montero
*/

//variables para proceso
let resultado = 0;
sessionStorage.setItem('imgId', 0);
respuestas = [];

//////////FUNCIONES///////////

//espera
function espera(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//funcion asincronica para espera de carga de imagenes
async function loading() {
    let carga = document.getElementById("loading");
    carga.className = "preloader";
    await espera(1000);
    carga.className = "";
};

//funcion para cargar resultado de test
function finalTest() {
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
    fetch('../assets/json/resIshihara.json')
    .then( (res) => res.json())
    .then( (data) => {
        data.forEach((respuestaCorrecta) => {
        let li2 = document.createElement("li");
        li2.innerHTML = respuestaCorrecta;
        padreRespCorrectas.appendChild(li2);
        });
    });
    //incorporo puntaje a html
    let puntaje = document.getElementById("puntaje");
    let texto = document.getElementById("texto-test");
    fetch('../assets/json/resIshihara.json')
    .then( (res) => res.json())
    .then( (data) => {
        respuestas.forEach((elemento, indice)=> {
            const primerDigito = data[indice].substring(0,1) ? true : false
            const segundoDigito = data[indice].substring(1,2) ? true : false
            primerDigito && ((elemento.substring(0,1) == data[indice].substring(0,1) || elemento.substring(1,2) == data[indice].substring(0,1)) && resultado++);
            segundoDigito && ((elemento.substring(1,2) == data[indice].substring(1,2) || elemento.substring(0,1) == data[indice].substring(1,2)) && resultado++);
        })
        texto.innerText = 'Recuerda que la realización de esta prueba de daltonismo es meramente aproximativa y no excluye, de ningún modo, la revisión por un profesional óptico u oftalmólogo.'
        puntaje.innerText = Math.round((resultado*100)/18) + '% (' + resultado + '/18)'
    })
    //incorporo boton reiniciar
    let reinicio = document.getElementById("reiniciar");
    reinicio.href = "ishiharaTest.html"
    let btn = document.createElement("button");
    btn.className = "btn-test-inicio";
    btn.id = "btn-reinciar";
    reinicio.append(btn);
    btn.innerText = "Reiniciar";
}

//funcion para cargar imagen
function cargarImagen(x) {
    //espera
    loading();
    //cargo imagen, input y boton siguiente
    fetch('../assets/json/imgIshihara.json')
    .then( (res) => res.json())
    .then( (data) => {
        Imagen = data[x];
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
        //evento sobre boton siguiente
        if (x <= 11) {
            let botonSte = document.getElementById("btnSiguiente");
            botonSte.addEventListener("click", proceso);
        }
    })
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
            //espera
            loading();
            //elimino objetos
            let tst = document.getElementById("imagenes");
            tst.remove();
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
            //espera
            loading();
            //reemplazo imagen
            fetch('../assets/json/imgIshihara.json')
            .then( (res) => res.json())
            .then( (data) => {
                Imagen = data[imgNro];
                let img = document.getElementById("img-src");
                img.src = Imagen.img;
            })
            //vacio input
            document.getElementById("nro-resp").value = "";
            //muevo la posicion
            nxtImg = parseFloat(imgNro) + 1;
            sessionStorage.setItem('imgId', nxtImg);
            //cambio texto de boton en ultima vuelta
            imgNro == 11 && (document.getElementById("btnSiguiente").innerText = "Finalizar");
            //notificacion
            Toastify({
                text: "Respuesta guardada!",
                duration: 1000, // milisegundos
                position: 'center',
                style: {
                    background: '#3291e6'
                }
            }).showToast();
        }
    }
}

////////////EVENTOS///////////

//evento sobre boton iniciar
let botonIni = document.getElementById("btnIniciar");
botonIni.addEventListener("click", proceso);





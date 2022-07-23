/**
* Name: Daltest, test para niños
* Author: Rodrigo Montero
*/

//variables para proceso
sessionStorage.setItem('imgId', 0);
let resultado = 0;
respuestas = [];
imgSeleccionada = "";

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

//funcion para foco
function setFocusToImage(){
    var imagen = document.getElementById("gallery");
    imagen.focus();
    imagen.scrollIntoView();
}

//funcion para cargar resultado de test
function finalTest() {
    //incorporo puntaje a html
    let puntaje = document.getElementById("puntaje");
    let texto = document.getElementById("texto-test");
    fetch('../assets/json/resNinios.json')
    .then( (res) => res.json())
    .then( (data) => {
            respuestas.forEach((elemento, indice)=> {
            elemento === data[indice] && resultado++;
        });
        texto.innerText = 'Recuerda que la realización de esta prueba de daltonismo es meramente aproximativa y no excluye, de ningún modo, la revisión por un profesional óptico u oftalmólogo.';
        puntaje.innerText = Math.round((resultado*100)/10) + '% (' + resultado + '/10)'
    });
    //incorporo boton reiniciar
    let reinicio = document.getElementById("reiniciar");
    reinicio.href = "niniosTest.html"
    let btn = document.createElement("button");
    btn.className = "btn-test-inicio";
    btn.id = "btn-reinciar";
    reinicio.append(btn);
    btn.innerText = "Reiniciar";
}

//funcion para cargar imagen inicial
function cargarImagen(x) {
    //espera
    loading();
    //cargo imagen, input y boton siguiente
    fetch('../assets/json/imgNinios.json')
    .then( (res) => res.json())
    .then( (data) => {
        Imagen = data[x];
        let imgs = document.getElementById("imagenes");
        let img = document.createElement("div");
        img.id="imagenes-child";
        img.className="img-test-ishihara-child";
        img.innerHTML=`
        <img id="img-src" src="${Imagen.img}" alt="">
        `;
        imgs.append(img);
    });
}

//funcion para carga de imagenes de respuestas
function imgRsp() {
    fetch('../assets/json/imgNiniosResp.json')
        .then( (res) => res.json())
        .then( (data) => {
            let imgsRsp = document.getElementById("imagenesRespuestas");
            data.forEach((imagen) => {
                let imgRsp = document.createElement("div");
                imgRsp.className ="col-lg-3 col-md-4"
                imgRsp.id = "dibu" + imagen.id
                imgRsp.innerHTML =`
                <div class="gallery-item">
                    <img src="${imagen.img}" alt="" class="img-fluid dibus">
                </div>
                `
                imgsRsp.append(imgRsp)
            })
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
        txt.innerText = "Hay animales escondidos entre los puntos. Elige de entre los animales que te mostramos abajo el que coincida con el que hay en el círculo de puntos.";
        //llamo funcion para cargar imagen
        cargarImagen(imgNro);
        //cargo imagenes respuestas
        imgRsp();
        //eventos de las imagenes
        fetch('../assets/json/imgNiniosResp.json')
        .then( (res) => res.json())
        .then( (data) => {
            data.forEach((el) => {
                let img = document.getElementById("dibu" + el.id)
                img.onclick = () => {
                    imgSeleccionada = el.id;
                    proceso();
                }
            })
        })
        //muevo la posicion
        nxtImg = parseFloat(imgNro) + 1;
        sessionStorage.setItem('imgId', nxtImg);
    } else if (imgNro == 10) {
        //guardo respuesta
        respuestas.push(imgSeleccionada);
        //espera
        loading();
        //elimino objetos
        let tst = document.getElementById("imagenes");
        let rsp = document.getElementById("imagenesRespuestas");
        tst.remove();
        rsp.remove();
        //calculo resultado test
        finalTest();
    } else {
        //guardo respuesta
        respuestas.push(imgSeleccionada);
        //espera
        loading();
        //reemplazo imagen
        fetch('../assets/json/imgNinios.json')
        .then( (res) => res.json())
        .then( (data) => {
            Imagen = data[imgNro];
            let img = document.getElementById("img-src");
            img.src = Imagen.img;
        });
        //muevo la posicion
        nxtImg = parseFloat(imgNro) + 1;
        sessionStorage.setItem('imgId', nxtImg);
        //notificacion
        Toastify({
            text: "Respuesta guardada!",
            duration: 1000, // milisegundos
            position: 'center',
            style: {
                background: '#3291e6'
            }
        }).showToast();  
        //foco      
        setFocusToImage();
    }
}

/////////////EVENTOS//////////////

//evento sobre boton iniciar
let botonIni = document.getElementById("btnIniciar");
botonIni.addEventListener("click", proceso);




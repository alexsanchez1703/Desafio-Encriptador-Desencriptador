
var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var botonCopiar = document.querySelector(".btn-copiar");
botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;

function encriptar () {

    ocultar();
    var textoIn = document.querySelector(".texto-escribir").value;
    var textoOn = textoIn.replace(/e/gim,"enter").replace(/i/gim,"imes").replace(/a/gim,"ai").replace
    (/o/gim,"ober").replace(/u/gim,"ufat");
    document.querySelector(".mensaje-resultado").textContent = textoOn;
    
}
function desencriptar(){

    ocultar();
    var textoIn = document.querySelector(".texto-escribir").value;
    var textoOn = textoIn.replace(/enter/gim,"e").replace(/imes/gim,"i").replace(/ai/gim,"a").replace
    (/ober/gim,"o").replace(/ufat/gim,"u");
    document.querySelector(".mensaje-resultado").textContent = textoOn;
  
}
function ocultar(){
    var munheco = document.querySelector(".cont-munheco");
    var mensaje = document.querySelector(".cont-mensaje");
    munheco.classList.add("ocultar");
    mensaje.classList.add("ocultar");
}

function copiar(){
    var res = document.querySelector(".mensaje-resultado").textContent;
    navigator.clipboard.writeText(res)
    console.log(res)
}
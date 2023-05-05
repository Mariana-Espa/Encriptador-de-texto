// funciones
function encriptar() {
    let mensaje = document.getElementById('mensaje').value;
    let encriptado = mensaje.replace(/e/gi, "enter")
                            .replace(/i/gi, "imes")
                            .replace(/a/gi, "ai")
                            .replace(/o/gi, "ober")
                            .replace(/u/gi, "ufat");
    document.getElementById("resultado").value = encriptado; 
    document.getElementById("mensaje").value = "";                           
}

function desencriptar() {
    let encriptado = document.getElementById("resultado").value;
    let desencriptado = encriptado.replace(/enter/gi, "e")
                                    .replace(/imes/gi, "i")
                                    .replace(/ai/gi, "a")
                                    .replace(/ober/gi, "o")
                                    .replace(/ufat/gi, "u");
    document.getElementById("mensaje").value = desencriptado;
}

function displayOn() {
    document.getElementById("prueba1").style.visibility = "hidden";
}

function copiarTexto() {
    let textarea2 = document.getElementById("resultado");

    textarea2.select();
    document.execCommand("copy");
}
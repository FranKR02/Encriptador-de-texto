const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const codigos = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];


function btnEncriptar() {
    mensaje.value = "";
    const text = encriptar(textArea.value);
    mensaje.value = text;
    mensaje.style.backgroundImage = "none"
}
function btnDesencriptar() {
    mensaje.value = "";
    const textEncriptado = desencriptar(textArea.value);
    mensaje.value = textEncriptado;
}

function encriptar(textoNormal) {
    textoNormal = textoNormal.toLowerCase()
    for (let i = 0; i < codigos.length; i++) {
        if (textoNormal.includes(codigos[i][0])) {
            textoNormal = textoNormal.replaceAll(codigos[i][0], codigos[i][1])
        }
    }
    return textoNormal
}
function desencriptar(textoEncriptado) {
    textoEncriptado = textoEncriptado.toLowerCase()
    for (let i = 0; i < codigos.length; i++) {
        if (textoEncriptado.includes(codigos[i][1])) {
            textoEncriptado = textoEncriptado.replaceAll(codigos[i][1], codigos[i][0])
        }
    }
    return textoEncriptado
}
function copiar() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado");
}
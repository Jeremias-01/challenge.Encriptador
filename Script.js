const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


function btnEncriptar(){
    const textencriptado = Encriptar(textArea.value)
    mensaje.value = textencriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function Encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"],["o", "ober"],["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

         }
    }
    return stringEncriptada
}

function btnDesencriptar(){
    const textencriptado = Desencriptar(textArea.value)
    mensaje.value = textencriptado
    textArea.value = "";

}

function Desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"],["o", "ober"],["u", "ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

function btnCopiar(){
    const textencriptado = Copiar(textArea.value)
    mensaje.value = textencriptado
    textArea.value = "";
}

function Copiar(stringCopiar){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"],["o", "ober"],["u", "ufat"]]
    stringCopiar = stringCopiar.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringCopiar.includes(matrizCodigo[i][2])){
            stringCopiar = stringCopiar.replaceAll(matrizCodigo[i][2], matrizCodigo[i][0])
        }
    }
    return stringCopiar

}
const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar() {
  const textoEncriptado = encriptar(textArea.value);
  mensagem.value = textoEncriptado;
  textArea.value = "";
}

function encriptar(stringEncriptada) {

  let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
  stringEncriptada = stringEncriptada.toLowerCase();

  for(let i = 0; i < matrizCodigo.length; i++) {
    if(stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  } 

  return stringEncriptada;
}

function btnDesencriptar() {
  const textoDesencriptado = desencriptar(textArea.value);
  mensagem.value = textoDesencriptado;
  textArea.value = "";
}

function desencriptar (stringDesencriptada) {
  let matrizCodigo =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for(let i =0; i <matrizCodigo.length; i++){
    if(stringDesencriptada.includes(matrizCodigo[i][1])){
      stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] ,matrizCodigo[i][0]);
    }   
  }
  return stringDesencriptada;
}

function btnCopiar() {
  const textoEncriptado = copiar(mensagem.value);
  mensagem.value = btnCopiar;
  textArea.value = "";
}
  
document.getElementById("copiar").addEventListener("click", function() {
  var tempInput = document.createElement("input");
  tempInput.value = mensagem.value;
  document.body.appendChild(tempInput);
  tempInput.select();
  tempInput.setSelectionRange(0, 99999); 
  document.execCommand('copy');
  document.body.removeChild(tempInput);
  alert('Conteúdo copiado para a área de transferência.');
});

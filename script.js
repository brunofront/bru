const textodecodificador = document.querySelector(".campo_texto_criptografar"); //aqui sao minhas declaracoes de variaveis, buscando class do css atraves do doc.queryselector
const campotextolado = document.querySelector(".campo_texto_descriptografar");//const sao variaveis global

function btnEncriptar(){
   const textoEncriptado = encriptar(textodecodificador.value);
    campotextolado.value =  textoEncriptado 
    conaole.log("onclick")
    
  
 
}



function encriptar(stringEncriptada){
    let matrizCodigo =[["e" ,"enter"], ["i" , "imes"],["a", "ai"],["o", "ober"],["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i=0; i < matrizCodigo.length; i++){
        if (stringEncriptada.includes(matrizCodigo[i][0])){
          stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
       }
   }
      return stringEncriptada;
}



function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textodecodificador.value);
    campotextolado.value = textoDesencriptado
    console.log("onclick")
 
  
}



function desencriptar(stringDesencriptada){
    let matrizCodigo =[["e" ,"enter"], ["i" , "imes"],["a", "ai"],["o", "ober"],["u" , "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i=0; i < matrizCodigo.length; i++){
      if (stringDesencriptada.includes(matrizCodigo[i][1])){
         stringDesencriptada =  stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
   }
       return stringDesencriptada;
}

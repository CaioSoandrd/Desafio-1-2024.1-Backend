function rot13(str) {
  let strAux = "";
 for (let i = 0; i < str.length; i++) {
    let charASCII = str.charCodeAt(i); // vamos trabalhar com o numero ASCII que representa as letras
    if (charASCII >= 65 && charASCII <= 77){ // se for na metade do alfabeto
      strAux += String.fromCharCode(charASCII + 13) // adiciona 13 e vai para a letra da outra metade, e concatenamos
    }
    else if(charASCII >= 78 && charASCII <= 90){ // se for na ultima metade do alfabeto
       strAux += String.fromCharCode(charASCII - 13) // retiramos 13 e voltamos para primeira metade, e concatenamos
    }
    else{ // caso não seja uma letra
      strAux += str[i];  // concatenamos
    }

  }
  return strAux;
}

rot13("SERR PBQR PNZC");
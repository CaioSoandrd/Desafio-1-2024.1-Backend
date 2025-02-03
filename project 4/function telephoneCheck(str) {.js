function telephoneCheck(str) {
  let testeRgx = /^1?\s?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
  /*
  começar com 1 é opcional
  ter um espaço é opcional
  tem que ter 3 digitos entre parenteses
  ou 
  3 digitos obrigatorios, apenas
  pode ter um espaço ou hífem, opcional
  3 digitos obrigatorios, apenas
  pode ter espaço ou hífem, opcional
  tem que terminar com 4 digitos, obrigatorios
  */
  return testeRgx.test(str); // Retorna true se corresponder, false se não
}


telephoneCheck("555-555-5555");
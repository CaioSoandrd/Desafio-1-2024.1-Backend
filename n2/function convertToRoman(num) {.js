function convertToRoman(num) {
  const romanMap = new Map([ // Criar hashmap dos números romanos
    [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
    [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
    [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]
  ]);

  let numRoman = "";
  for (let [value, numeral] of romanMap) { // para cada numeral do mapa
    while (num >= value) { // enquanto o vnumero for maior que o valor
      numRoman += numeral; // concatena os numerais
      num -= value; // tira dos valores
    }
  }
  
  return numRoman;
}

console.log(convertToRoman(36)); 

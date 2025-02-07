function palindrome(str) {
    str = str.toLowerCase().replace(/[\W_]/g, '');// limpa a string eliminando não letras e '_'
     for (let i = 0; i < str.length/2; i++) { // lê somente até a etade para evitar decisões desncessárias
       if (str[i] !== str[str.length - 1 - i]) { // algoritmo de checkagem
         return false;
       }
     }
     return true;
   }
   
   
/* Conversão de Tipos */

console.log("ano" + 2020); // ano2020 concatenação
console.log("2" + 2); // 22

console.log(parseInt("2") + parseInt("2")); // 4 

console.log("10" / "2"); // 5, pois o javascript entende que dividir so faz sentindo ser for number, entao ele força a conversao dele;

console.log("7" / "2"); // 6.5, ponto flutuante, sempre com ponto .
console.log(6,0); //  é lido um espaço no lugar da vírgula, algo como 6 5

console.log("Ricardo" / "2"); //NaN not a number não é uma operação possível pois não se trata de números.
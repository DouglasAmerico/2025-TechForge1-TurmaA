const prompt = require("prompt-sync")();

let numeroInteiro = prompt("Informe um valor inteiro: ");
numeroInteiro = numeroInteiro / 2;
console.log("Metade do valor: " + numeroInteiro);

let numeroDecimal = prompt("Informe um valor decimal: ");
numeroDecimal = numeroDecimal / 5;
console.log("Decimal dividido por 5: " + numeroDecimal);

let primeiroValor = prompt("Informe o primeiro valor: ");
let segundoValor = prompt("Informe o segundo valor: ");
let calculo = primeiroValor / segundoValor;
console.log("A divisão de "+primeiroValor+" / "+segundoValor+" = "+calculo);




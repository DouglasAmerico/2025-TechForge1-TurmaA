const prompt = require("prompt-sync")();

let valor = prompt("Informe o valor: ");

while(valor != 0){
    console.log(valor);
    valor--;
}
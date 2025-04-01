const prompt = require("prompt-sync")();
let maior,menor;
let numero1 = prompt("Informe o valor: ");
maior = numero1;
menor = numero1;

let numero2 = prompt("Informe o valor: ");
if(numero2 > maior){
    maior = numero2;
}else if(numero2 < menor){
    menor = numero2
}

let numero3 = prompt("Informe o valor: ");
if(numero3 > maior){
    maior = numero3;
}else if(numero3 < menor){
    menor = numero3
}

let numero4 = prompt("Informe o valor: ");
if(numero4 > maior){
    maior = numero4;
}else if(numero4 < menor){
    menor = numero4
}

let numero5 = prompt("Informe o valor: ");
if(numero5 > maior){
    maior = numero5;
}else if(numero5 < menor){
    menor = numero5
}

console.log("Informando os numeros "+numero1+","+numero2+","+numero3+","+numero4+","+numero5);
console.log("O maior é "+maior+" e o menor é "+menor);


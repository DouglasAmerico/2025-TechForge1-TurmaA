const prompt = require("prompt-sync")();

let numero1 = prompt("Informe o primeiro valor: ");
let numero2 = prompt("Informe o segundo valor: ");

if(numero1 > numero2){
    console.log("O numero "+numero1+" é maior que o numero "+numero2);
}else if(numero2 > numero1){
    console.log("O numero "+numero2+" é maior que o numero "+numero1);
}else{
    console.log("Os numeros são iguais");
}
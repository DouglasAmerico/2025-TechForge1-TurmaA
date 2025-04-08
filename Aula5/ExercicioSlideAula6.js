const prompt = require("prompt-sync")();

const senha = 102050;
let senhaSolicitada;
do{
    senhaSolicitada = prompt("Informe a senha: ");
    if(senhaSolicitada != senha){
        console.log("A senha informadao esta errada");
    }else(
        console.log("Bem vindo")
    )
}while(senhaSolicitada != senha);
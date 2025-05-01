const prompt = require("prompt-sync")();
let nome, idadeMaior,idadeMenor,media=0,sexo,idade, salario,primeiraVez=true;
let contadora = 0,mulheresMenos400MenorIdade=0;


do {
    idade = prompt("Informe a idade: ");
    salario = prompt("Informe o salario: ");
    sexo = prompt("Informe o sexo: (M/F) ")
    media = media + salario;
    if(primeiraVez){
        idadeMaior= idade;
        idadeMenor= idade;
        primeiraVez= false;
    }else if(idade > idadeMaior){
        idadeMaior = idade;
    }else if(idade < idadeMenor){
        idadeMenor = idade;
    }

    if(salario < 400 && idade < 18 && (sexo == "M" || sexo == "m")){
        mulheresMenos400MenorIdade++;
    }
    contadora++;
}while (idade > 80);

media = media / contadora;

console.log("A menor idade foi: "+idadeMenor+" a maior idade foi: "+idadeMaior);
console.log("A media salarial foi: "+media);
console.log("Existem "+mulheresMenos400MenorIdade+" mulheres que ganham menor de 400$ e são menores de idade");



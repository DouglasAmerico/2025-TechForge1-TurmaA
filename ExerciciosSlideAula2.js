const leitura = require("prompt-sync")();

let nome = leitura("Informe o seu nome: ");
let corFavorita = leitura("Informe sua cor favorita: ");
let filmeFavorito = leitura("Informe seu filme favorito: ");
let cidade = leitura("Informe o nome da cidade que você mora: ");
let animalEstimacao = leitura("Informe o nome do seu animal de estimação: ");
console.log("Bem vindo ao meu sistema "+nome+", que tem a cor favorita "+corFavorita);
console.log("Quem tem o filme favorito chamado "+filmeFavorito);
console.log("Que mora na cidade "+cidade);
console.log("Que tem o animal de estimação chamado: "+animalEstimacao);




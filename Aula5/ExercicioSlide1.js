let numero = "";

for (let x = 0; x<10; x= x+1){
    if(x == 9){
        numero= numero + x;
    }else{
        numero = numero + x + ", ";
    }
}

console.log(numero);

var soma = 0;
for (x = 1; x<=10; x++){
soma = soma + x;
}

console.log("O valor somado é " + soma);

let contadora=0;
for(let ii = 121;ii<237;ii++){
    if(ii % 2 ==0){
        contadora++;
        console.log(contadora);
        
        contadora = contadora +1;
    }
}

console.log("Existem "+contadora+" numeros pares entre 121 e 237")



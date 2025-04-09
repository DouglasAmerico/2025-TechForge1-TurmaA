let paisA = 900000000;
let paisB = 2000000000;
let qtdAnos = 0;

while (paisB > paisA) {
    paisA = paisA * 1.04;
    paisB = paisB * 1.0195;
    qtdAnos++;
}

console.log("Levou "+qtdAnos+" anos para o pais A passar a população do pais B");

let nota1 = 7;
let nota2 = 8;

let media = (nota1 + nota2) / 2;

if (media < 4) {
    console.log("REPROVADO");
} else if (media >= 5 && media <= 6) {
    console.log("RECUPERAÇÃO");
} else if (media >= 7) {
    console.log("APROVADO");
}

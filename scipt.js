let nomeCliente = "Maria";
let valorCompra = 650;
let clienteVip = false;

let desconto = 0;

if (clienteVip == true) {
    desconto = 20;
} else if (valorCompra >= 500) {
    desconto = 15;
} else if (valorCompra >= 200) {
    desconto = 10;
} else {
    desconto = 0;
}

let valorDesconto = valorCompra * desconto / 100;
let valorFinal = valorCompra - valorDesconto;

console.log("Nome:", nomeCliente);
console.log("Valor da compra: R$" + valorCompra);
console.log("Desconto: " + desconto + "%");
console.log("Valor do desconto: R$" + valorDesconto);
console.log("Valor final: R$" + valorFinal);

if (valorFinal > 1000) {
    console.log("Parabéns! Você ganhou frete grátis.");
} else {
    console.log("Frete será cobrado normalmente.");
}


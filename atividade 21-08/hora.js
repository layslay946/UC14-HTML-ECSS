let temperatura = Number(prompt("Digite a temperatura em °C:"));

let mensagem = "";

if (temperatura > 35) {
    mensagem = "Está muito quente! 🔥";
} else if (temperatura > 25) {
    mensagem = "Está quente! 🥵";
} else if (temperatura >= 15) {
    mensagem = "O clima está agradável! 😊";
} else {
    mensagem = "Está frio! 🥶";
}

document.getElementById("temperatura").textContent =
    "Temperatura informada: " + temperatura + "°C";

document.getElementById("mensagem").textContent = mensagem;

console.log("Temperatura:", temperatura);
console.log("Classificação:", mensagem);
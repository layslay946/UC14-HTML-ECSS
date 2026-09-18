let valor = 10;

function mostrarCidade() {
    let cidade = document.getElementById("cidade").value;
    document.getElementById("mensagem").textContent =
        "Você escolheu conhecer " + cidade + "!";
}

function destacarMensagem() {
    let mensagem = document.getElementById("mensagem");

    mensagem.style.color = "blue";
    mensagem.style.fontSize = "25px";
}

function aumentar() {
    valor++;
    document.getElementById("contador").textContent = valor;
}

function diminuir() {
    valor--;
    document.getElementById("contador").textContent = valor;
}

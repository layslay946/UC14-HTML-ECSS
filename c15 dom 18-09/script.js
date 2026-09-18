function mostrarNome() {
let nome = document.getElementById("nome").value;
document.getElementById("mensagem").textContent = `Olá` + " " + nome + "!" ;
}

let contador = 0;
function aumentar() {
    contador++;
    document.getElementById("numero").textContent = contador; 
}
function diminuir() {  
    contador--;

    document.getElementById("numero").textContent = contador; 
}
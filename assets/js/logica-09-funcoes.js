// global
let nome = "";
let quantidade = 0;
let preco = 0.0;
let total = 0.0;

function comprarProduto(){
    solicitarDados();
    calcularTotal();
    apresentarDados();
}

function solicitarDados(){
    // utilizar a variável global
    nome = prompt("Digite o nome do produto");
    quantidade = parseInt(prompt("Digite a quantidade"));
    preco = parseFloat(prompt("Digite o preco"));
}

function apresentarDados(){
    alert("Nome: " + nome + "\nQuantidade: " + quantidade + "\nTotal: " + total)
}

function calcularTotal(){
    total = quantidade * preco;
}
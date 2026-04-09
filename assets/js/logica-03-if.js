function exemploBasico(){
    let numero = parseInt(prompt("Digite o número"));

    if (numero === 1){
        alert("Um")
    } else {
        alert("Outro número");
    }
}

function exemploBasico02(){
    let idade = parseInt(prompt("Informe a idade"));

    if (idade < 18) {
        alert("Menor de idade");
    } else if (idade < 60) {
        alert ("Adulto");
    } else if (idade < 125) {
        alert("Idoso");
    } else {
        alert ("Você ainda está vivo?")
    }
}

function exemploBasico03(){
    let numero = parseInt(prompt("Informe um número"));

    if (numero < 0) {
        alert("Número negativo");
    } else if (numero > 0) {
        alert("Número positivo");
    } else {
        alert("Número neutro");
    }
}

function exemploBasico04(){
    let produto = prompt("Digite o nome do produto");
    let quantidade = parseInt (prompt("Digite a quantidade"));
    let precoUnitario = 0;

    if (produto === "Maçã"){
        precoUnitario = 0.80;
    } else if (produto === "Pera"){
        precoUnitario = 1.20;
    } else if (produto === "Laranja"){
        precoUnitario = 2.50;
    } else if (produto === "Banana"){
        precoUnitario = 2.00
    } else { alert("Produto não cadastrado");
        return;
    }

    let total = quantidade * precoUnitario;

    alert("Produto: " + produto + "\n" +
        "Quantidade: " + quantidade + "\n" +
        "Preço Unitário R$: " + precoUnitario.toFixed(2) + "\n" +
        "Total: R$ " + total.toFixed(2)
    );

}
// escopo da variável é global
regular = 0;
bom = 0;
otimo = 0;

function avaliacaoRegular(){
    regular = regular + 1;
}
function avaliacaoBom(){
    bom = bom + 1;
}
function avaliacaoOtimo(){
    otimo = otimo + 1;
}
function finalizarAvaliacao(){
    alert("Avaliações: \n Regular " + regular + "\n Bom: " + bom + "\n Ótimo: " + otimo);

    regular = 0;
    bom = 0;
    otimo = 0;
}

function exemploOperadorLogicoE(){
    let idade = parseInt(prompt("Digite a idade"));

    if ((idade >= 0) && (idade <= 17)) {
        alert("Criança ou adolescente");
    } else if (idade >= 18) {
        alert ("Adulta");
    } else {
        alert("Idade inválida");
    }
}
/*
OPERADOR E
V e V = V
V e F = F
F e V = F
F e F = F
*/   

function exemploOperadorLogicoOu(){
    let transporte = prompt("Digite o meio de transporte para viajar");

    if ((transporte === "moto") || (transporte === "carro")) {
        alert("Viajar de boas");
    } else {
        alert ("Não vamos viajar");
    }
}
/*
OPERADOR OU
V ou V = V
V ou F = V
F ou V = V
F ou F = F
*/

function exemploLoja(){
    let nome1 = prompt("Digite o nome do jogo 1");
    let categoria1 = prompt("Digite a categoria do jogo");
    let precoBase1 = 399.90;

    let precoComDesconto1 = 0;
    let percentualDesconto1 = 0;
    let precoDesconto1 = 0;

    if ((categoria1 === "moba") || (categoria1 === "fps")) {
        percentualDesconto1 = 0.10;
        precoBase1 = 400
        precoDesconto1 = precoBase1 * percentualDesconto1;
        precoComDesconto1 = precoBase1 - precoDesconto1;
    } else if ((categoria1 === "aventura") || (categoria1 === "rpg")) {
        percentualDesconto1 = 0.15;
        precoDesconto1 = precoBase1 * percentualDesconto1;
        precoComDesconto1 = precoBase1 - precoDesconto1;
    } else if ((categoria1 === "roguelike") || (categoria1 === "soulslike")) {
        percentualDesconto1 = 0.20;
        precoDesconto1 = precoBase1 * percentualDesconto1;
        precoComDesconto1 = precoBase1 - precoDesconto1;
    }

    let nome2 = prompt("Digite o nome do jogo 2");
    let categoria2 = prompt("Digite a categoria do jogo");
    let precoBase2 = 190.99;

    let precoComDesconto2 = 0;
    let percentualDesconto2 = 0;
    let precoDesconto2 = 0;

    if ((categoria2 === "moba") || (categoria2 === "fps")) {
        percentualDesconto2 = 0.10;
        precoDesconto2 = precoBase2 * percentualDesconto2;
        precoComDesconto2 = precoBase2 - precoDesconto2;
    } else if ((categoria2 === "aventura") || (categoria2 === "rpg")) { 
        percentualDesconto2 = 0.15;
        precoDesconto2 = precoBase2 * percentualDesconto2;
        precoComDesconto2 = precoBase2 - precoDesconto2;
    } else if ((categoria2 === "roguelike") || (categoria2 === "soulslike")) {
        percentualDesconto2 = 0.20;
        precoDesconto2 = precoBase2 * percentualDesconto2;
        precoComDesconto2 = precoBase2 - percentualDesconto2;
    }

    let totalPedido = precoComDesconto1 + precoComDesconto2;

    alert("Jogo: " + nome1 +
        "\nCategoria: " + categoria1 +
        "\nValor: R$ " + precoBase1.toFixed(2) +
        "\nDesconto: " + percentualDesconto1 * 100 + "%" +
        "\nValor do desconto: R$ " + precoDesconto1.toFixed(2) +
        "\nPreço final: R$ " + precoComDesconto1.toFixed(2) +

        "\n\nJogo: " + nome2 +
        "\nCategoria: " + categoria2 +
        "\nValor: R$ " + precoBase2.toFixed(2) + 
        "\nDesconto: " + percentualDesconto2 * 100 + "%" + 
        "\nValor do desconto: R$ " + precoDesconto2.toFixed(2) + 
        "\nPreço Final: R$ " + precoComDesconto2.toFixed(2) + 

        "\n\nTotal: R$ " + totalPedido.toFixed(2));
}
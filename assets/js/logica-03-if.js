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
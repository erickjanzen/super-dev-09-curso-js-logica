function exemploForBasico(){
    /*
    // Declaração da variável
    let indice = 0;
    //Condição
    while (indice < 4){
    alert(indice);
    // Incrementar
    indice = indice + 1;
    }

    //for (declaração de variável)*/
    for (let indice = 0; indice < 4; indice = indice + 1){
        alert(indice)
    }
}

function exemploForJogos(){
let total = 0;

    for (let indice = 0; indice < 3; indice = indice + 1){
        debugger
        let nome = prompt("Digite o nome do jogo");
        let preco = parseFloat(prompt("Digite o preço"));

        //variável recebe ela mesma mais o que deseja somar
        total = total + preco;
    }
    alert("Total: " + total);
}

function exemploForProdutos(){

    let quantidadePadaria = 0, quantidadeUtensilios = 0, quantidadeCarnes = 0

    for (let indice = 0; indice < 3; indice = indice + 1){
        let produto = prompt("Digite o nome do produto");
        let categoria = prompt("Digite a categoria do produto");
        let preco = parseFloat(prompt("Digite o preço do produto"));

        // validar que o usuário digitou uma categoria válida

        while((categoria.toLowerCase() !== "carnes") &&
            (categoria.toLowerCase() !== "padaria") &&
            (categoria.toLowerCase() !== "utensilios")){
                categoria = prompt("Categoria inválida. \nDigite a categoria do produto [Carnes, Padaria, Utensilios]:").trim()
            }

        if(categoria.toLowerCase() === "padaria"){
            quantidadePadaria = quantidadePadaria + 1;
        } else if(categoria.toLowerCase() === "carnes"){
            quantidadeCarnes = quantidadeCarnes + 1;
        } else if(categoria.toLowerCase() === "utensilios"){
            quantidadeUtensilios = quantidadeUtensilios + 1
        }
    }
    alert("Quantidade Padaria: " + quantidadePadaria + "\nQuantidade Carnes: " + quantidadeCarnes + "\nQuantidade Utensílios: " + quantidadeUtensilios)
}

function exemploForContagemRegressiva(){
    //for (variavel; condicao; incremento/decremento)
    for(let indice = 10; indice > 0; indice = indice - 1){
        alert(indice);
    }   
}

function exemploDescobrirQuantidadePar(){
    let quantidadePares = 0;
    let quantidadeNumeros = parseInt(prompt("Digite a quantidade de números a validar"));

    for(let indice = 0; indice < quantidadeNumeros; indice = indice + 1){
        let numero = parseInt(prompt("Digite o número"));

        if (numero % 2 === 0){
            quantidadePares = quantidadePares + 1;
        }

        //descobrir impar (numero % 2 !== 0)
    }
    alert("Quantidade de números pares: " + quantidadePares);
}

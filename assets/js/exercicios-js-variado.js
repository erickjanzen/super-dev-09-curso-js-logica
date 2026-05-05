function calcularCompraCliente(){
    let nome = prompt("Digite o nome do cliente");
    let nomeProduto = prompt("Digite o nome do produto");
    let quantidadeComprada = parseInt(prompt("Digite a qunatidade comprada do produto"));
    let precoUnitario = parseFloat(prompt("Digite o valor unitário do produto"));


    alert("Nome do cliente: " + nome + 
        "\nProduto: " + nomeProduto + 
        "\nQuantidade: " + quantidadeComprada +
        "\nPreço unitário: " + precoUnitario + 
        "\nValor total: " + (precoUnitario * quantidadeComprada) + 
        "\nValor com desconto: " + ((precoUnitario * quantidadeComprada)* 0.9)

    )
}

function verificarFrasePromocional() {
    let frase = prompt("Digite a frase de promoção da loja").trim();

    let contemPalavraDesconto = false;
    if (frase.toLowerCase().includes("desconto")) {
        contemPalavraDesconto = true;
    }

    let comecaComPromocao = "Não";
    if (frase.toLowerCase().startsWith("promoção")) {
        comecaComPromocao = "Sim";
    }

    let terminaComExclamacao = false;
    if (frase.endsWith("!")) {
        terminaComExclamacao = true;
    }

    frase = frase.replace("barato", "econômico");

    alert(
        "Contém a palavra desconto: " + contemPalavraDesconto +
        "\nComeça com promoção: " + comecaComPromocao +
        "\nTermina com exclamação: " + terminaComExclamacao +
        "\nFrase final: " + frase
    )
}

function calcularCompraCliente() {
    let nomeCliente = prompt("Digite o nome do cliente");
    let nomeProduto = prompt("Digite o nome do produto");
    let quantidadeComprada = parseInt(prompt("Digite a quantidade comprada")); // 6
    let precoUnitario = parseFloat(prompt("Digite o preço unitário")); // 10

    // Calcular o valor total da compra
    let valorTotalCompra = quantidadeComprada * precoUnitario;
    // Forma 1: Calcular 10% de desconto, descobrindo o valor do desconto de 10% e calculando o total
    let desconto = valorTotalCompra * 0.10; // 6
    let totalPagarForma1 = valorTotalCompra - desconto; // 60 - 6
    // Forma 2: Calcular o totalPagar substraindo os 10%
    // 1.0 (100%) - 0.1 (10%) => 0.9 (90%)
    let totalPagarForma2 = valorTotalCompra * 0.9;

    alert(
        "Nome Cliente: " + nomeCliente.toUpperCase() +
        "\nNome Produto: " + nomeProduto.toLowerCase() +
        "\nQuantidade: " + quantidadeComprada +
        "\nPreço unitário: " + precoUnitario +
        "\nValor total: " + valorTotalCompra +
        "\nValor com desconto (Forma 1 de calcular): " + totalPagarForma1 +
        "\nValor com desconto (Forma 2 de calcular): " + totalPagarForma2
    )
}

function cadastrarTresFilmes() {
    let indice = 0; // serve como quantidade
    let somaTotalDuracoes = 0;
    let quantidadeDuracaoMaior120Minutos = 0;
    let nomeFilmeMaiorDuracao = "";
    let maiorDuracao = 0;

    while (indice < 3) {
        let nome = prompt("Digite o nome do filme");
        let duracao = parseInt(prompt("Digite a duração do filme"));

        if (duracao >= 120) {
            quantidadeDuracaoMaior120Minutos = quantidadeDuracaoMaior120Minutos + 1;
        }

        if (duracao > maiorDuracao) {
            maiorDuracao = duracao;
            nomeFilmeMaiorDuracao = nome;
        }

        somaTotalDuracoes = somaTotalDuracoes + duracao;

        indice = indice + 1;
    }

    let mediaDuracoes = somaTotalDuracoes / indice;

    alert(
        "Quantidade de filmes cadastrados: " + indice +
        "\nSoma total das durações: " + somaTotalDuracoes +
        "\nMédias das durações: " + mediaDuracoes +
        "\nQuantidade de filmes com duração maior ou igual a 120 minutos: " + quantidadeDuracaoMaior120Minutos +
        "\nFilme '" + nomeFilmeMaiorDuracao + "' tem a maior duração de " + maiorDuracao + " minutos"
    );
}

function relatorioNotasAlunos() {
    let quantidadeAlunosTurma = parseInt(prompt("Digite a quantidade de alunos da turma"));

    let quantidadeAlunosAprovados = 0, quantidadeAlunosReprovados = 0;
    let somaMedias = 0, maiorMedia = 0, menorMedia = 9999999999999;
    let nomeAlunoMaiorMedia = "";

    for (let indice = 0; indice < quantidadeAlunosTurma; indice = indice + 1) {
        let nome = prompt("Digite o nome do aluno");
        let nota1 = parseFloat(prompt("Digite a nota 1"));
        let nota2 = parseFloat(prompt("Digite a nota 2"));

        let media = (nota1 + nota2) / 2;

        if (media >= 7) {
            quantidadeAlunosAprovados = quantidadeAlunosAprovados + 1;
        } else {
            quantidadeAlunosReprovados = quantidadeAlunosReprovados + 1;
        }

        somaMedias = somaMedias + media;

        if (media > maiorMedia) {
            maiorMedia = media;
            nomeAlunoMaiorMedia = nome;
        }

        if (media < menorMedia) {
            menorMedia = media;
        }
    }

    let mediaGeralTurma = somaMedias / quantidadeAlunosTurma;

    alert(
        "Quantidade de alunos: " + quantidadeAlunosTurma + "\n" +
        "Aprovados: " + quantidadeAlunosAprovados + "\n" +
        "Reprovados: " + quantidadeAlunosReprovados + "\n" +
        "Soma das médias: " + somaMedias.toFixed(2) + "\n" +
        "Média geral da turma: " + mediaGeralTurma.toFixed(2) + "\n" +
        "Maior média: " + maiorMedia.toFixed(2) + "\n" +
        "Aluno com maior média: " + nomeAlunoMaiorMedia + "\n" +
        "Menor média: " + menorMedia.toFixed(2)
    );
}

function relatorioProdutosPorCategoria() {
    let quantidadeCadastrar = parseInt(prompt("Digite a quantidade para cadastrar"));

    let quantidadeLimpeza = 0, quantidadeTecnologia = 0, quantidadeAlimentos = 0;
    let somaPrecos = 0, maiorPreco = 0, menorPreco = 99999;
    let nomeMaiorPreco = "", nomeMenorPreco = "";

    for (let i = 0; i < quantidadeCadastrar; i = i + 1) {
        let nome = prompt("Digite nome do produto").trim();
        let categoria = prompt("Digite a categoria").trim();
        let preco = parseFloat(prompt("Digite o preço"));

        if (categoria.toLowerCase() === "limpeza") {
            quantidadeLimpeza = quantidadeLimpeza + 1;
        } else if (categoria.toLowerCase() === "alimento") {
            quantidadeAlimentos = quantidadeAlimentos + 1;
        } else if (categoria.toLowerCase() === "tecnologia") {
            quantidadeTecnologia = quantidadeTecnologia + 1;
        }

        if (preco > maiorPreco) {
            maiorPreco = preco;
            nomeMaiorPreco = nome;
        }

        if (preco < menorPreco) {
            menorPreco = preco;
            nomeMenorPreco = nome;
        }

        somaPrecos = somaPrecos + preco;
    }

    let media = somaPrecos / quantidadeCadastrar;

    alert(
        "RELATÓRIO FINAL\n\n" +
        "Quantidade cadastrada: " + quantidadeCadastrar + "\n\n" +
        "Produtos de Limpeza: " + quantidadeLimpeza + "\n" +
        "Produtos de Alimentos: " + quantidadeAlimentos + "\n" +
        "Produtos de Tecnologia: " + quantidadeTecnologia + "\n\n" +
        "Soma dos preços: R$ " + somaPrecos.toFixed(2) + "\n" +
        "Média dos preços: R$ " + media.toFixed(2) + "\n\n" +
        "Produto mais caro: " + nomeMaiorPreco + " (R$ " + maiorPreco.toFixed(2) + ")\n" +
        "Produto mais barato: " + nomeMenorPreco + " (R$ " + menorPreco.toFixed(2) + ")"
    );
}

function relatorioNotasAlunos(){
    let quantAlunos = parseInt(prompt("Digite a quantidade de alunos"))
    let media = 0

    for(let indice = 0; indice < quantAlunos; indice = indice + 1){
        let nome = prompt("Digite o nome do aluno")
        let nota1 = parseFloat(prompt("Digite a primeira nota"))
        let nota2 = parseFloat(prompt("Digite a segunda nota"))

        media = (nota1 + nota2) / 2
    }

    alert("media: " + media)
}

function sistemaCadastroValidado(){
    let funcionarios = parseInt(prompt("Digite a quantidade de funcionários"));
    let atendente = 0
    let gerente = 0
    let vendedor = 0
    let soma = 0
    let mediaSalarial = 0
    let maiorSalario = 0
    let menorSalario = 99999
    let nomeMaior = ""
    let nomeMenor = ""
    let menorIdade = 0
    let maiorIdade = 0

    for(let indice = 0; indice < funcionarios; indice = indice + 1){
        let nome = prompt("Nome do funcionário");
        while(nome.length < 3){
            nome = prompt("Nome inválido, digite um nome válido");
        }
        let idade = parseInt(prompt("Idade do funcionário"));
        while((idade < 16) || (idade > 100)){
            idade = parseInt(prompt("Idade inválida, digite uma idade válida do funcionário"));
        }
        let cargo = prompt("Cargo do funcionário");
        while((cargo.toLowerCase() !== "atendente") && (cargo.toLowerCase() !== "gerente") && (cargo.toLowerCase() !== "vendedor")){
            cargo = prompt("Cargo inválido, o cargo deve ser atendente, gerente ou vendedor")
        }
        let salario = parseFloat(prompt("Salário do funcionário"))
        while(salario <= 0){
            salario = parseFloat(prompt("Salário inválido, o salário deve ser maior que 0"))
        }
        soma = salario + soma
        if(salario > maiorSalario){
            maiorSalario = salario
            nomeMaior = nome
        }
        if(salario < menorSalario){
            menorSalario = salario
            nomeMenor = nome
        }
        if(cargo === "atendente"){
            atendente = atendente + 1
        } else if(cargo === "gerente"){
            gerente = gerente + 1
        } else {
            vendedor = vendedor + 1
        }
        if(idade < 18){
            menorIdade = menorIdade + 1
        } else {
            maiorIdade = maiorIdade + 1
        }
    }

    alert("Quantidade de funcionários: " + funcionarios + 
        "\nQuantidade de atendentes: " + atendente + 
        "\nQuantidade de gerentes: " + gerente + 
        "\nQuantidade de vendedores: " + vendedor + 
        "\nQuantidade de maiores de idade: " + maiorIdade + 
        "\nQuantidade de menores de idade: " + menorIdade + 
        "\nMédia salárial: " + (soma / funcionarios) + 
        "\nFuncionário com maior salário: " + nomeMaior + 
        "\nMaior salário: " + maiorSalario +
        "\nFuncionário com menor salário: " + nomeMenor +
        "\nMenor salário: " + menorSalario
    )
}

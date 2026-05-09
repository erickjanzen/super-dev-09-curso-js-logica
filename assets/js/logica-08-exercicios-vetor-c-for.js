function exemplo01(){
    let nomes = [];

    // i = i + 1;
    // i += 1;
    // i++;

    for(let i = 0; i < 3; i += 1){
        nomes.push(prompt("Digite o nome"));
    }

    for(let i = 0; i < 3; i += 1){
        alert(nomes[i]);
    }
}

function exemplo02(){
    let alunos = [];
    let notas1 = [];
    let notas2 = [];

    for(let i = 0; i < 3; i++){
        let nomeAluno = prompt("Digite o nome do aluno");
        let nota1 = parseFloat(prompt("Digite a nota 1"));
        let nota2 = parseFloat(prompt("Digite a nota 2"));

        alunos.push(nomeAluno);
        notas1.push(nota1);
        notas2.push(nota2);
    }

    for (let i = 0; i < 3; i++){
        let nota1 = notas1[i];
        let nota2 = notas2[i];
        let media = (nota1+ nota2) / 2;

        let status = "";
        if(media < 7){
            status = "Reprovado";
        } else {
            status = "Aprovado";
        }

        alert(alunos[i] + " tem a média: " + media + " " + status);
    }
}

function fatorar(){
    let numero = parseInt(prompt("Digite o numero para fatorar"))
    let fatorado = numero
    for(let i = 1; i <= numero; i++){
        fatorado = fatorado * i
    }
    console.log (fatorado)
}

function exemplo03(){
    let colaboradores = [];
    let horas = [];
    let valores = [];
    let salarios = [];

    let quantidade = parseInt(prompt("Digite a quantidade de colaboradores"));

    for (let i = 0; i < quantidade; i += 1){
        let colaborador = prompt("Digite o nome do colaborador");
        let quantidadeHoras = parseInt(prompt("Digite a quantidade de horas"));
        let valorHora = parseFloat(prompt("Digite o valor hora"));

        colaboradores.push(colaborador);
        horas.push(quantidadeHoras);
        valores.push(valorHora);
    }

    //Calcular os salários armazenando no vetor de salários
    // for: percorrendo cada um dos colaboradores
    for (let i = 0; i < quantidade; i += 1){
        let quantidadeHoras = horas[i];
        let valorHora = valores[i];

        let salario = quantidadeHoras * valorHora;
        salarios.push(salario);
    }

    //Descobrir o maior valor hora entre os colaboradores
    let maiorValorHora = 0;
    for(let i = 0; i < quantidade; i += 1){
        let valorHora = valores[i];

        if(valorHora > maiorValorHora){
            maiorValorHora = valorHora;
        }
    }

    //Descobrir colaborador com maior salário
    let maiorSalario = 0;
    let nomeMaiorSalario = "";
    // percorrer o vetor de salarios para descobrir o amior salário
    // armazenando na variável o maior salário e nome de quem possui o maior salário
    for(let i = 0; i < quantidade; i += 1){
        let salario = salarios[i];
        let colaborador = colaboradores[i];

        if(salario > maiorSalario){
            maiorSalario = salario;
            nomeMaiorSalario = colaborador;
        }

        // forma alternativa
        // if(salarios[i] > maiorSalario){
        //      maiorSalario = salarios[i];
        //      nomeMaiorSalario = colaboradores[i];
        //  }
    }

    // descobrir quem tem o menor nome
    let colaboradorMenorNome = "dkwjadnoawdbawlihdbawlaaaaaaaaaaaaaaaaaaaaaaaaaaaaasaaaaaaaaaaaaa";
    for (let i = 0; i < quantidade; i += 1){
        let colaborador = colaboradores[i];

        if (colaborador.length < colaboradorMenorNome.length){
            colaboradorMenorNome = colaborador;
        }
    }

    alert("O maior valor hora pago: " + maiorValorHora + 
        "\nColaborador com maior salário: " + nomeMaiorSalario + 
        "\nColaborador menor nome: " + colaboradorMenorNome
    );
}

function exemploMenu(){
    let numeros = [];

    let opcaoMenu = parseInt(prompt(`1 - Cadastrar
2 - Listar Todos
3 - Apresentar maior
10 - Sair`));
        while (opcaoMenu !== 10){
            if (opcaoMenu === 1){
                let numero = parseInt(prompt("Digite o número"));
                numeros.push(numero);
                alert("Número cadastrado com sucesso");
            } else if (opcaoMenu === 2) {
                let texto = "Números cadastrados:\n";
                for(let i = 0; i < numeros.length; i += 1){
                    let numero = numeros[i];
                    texto = texto + numero + "\n";
                }
                alert(texto);
            } else if (opcaoMenu === 3) {
                let maiorNumero = 0;
                for (let i = 0; i < numeros.length; i += 1) {
                    if(numeros[i] > maiorNumero){
                        maiorNumero = numeros[i];
                    }
                }

                alert("Maior número: " + maiorNumero);
            }

            opcaoMenu = parseInt(prompt(`1 - Cadastrar
2 - Listar Todos
3 - Apresentar maior
10 - Sair`));
        }
        alert("Obrigado por utilizar nosso sistema")
}

function exercicio11(){
    let numeros = []

    for(let i = 0; i < 6; i++){
        numeros.push(parseInt(prompt("Digite um número")))
    }
    for(let i = 0; i < numeros.length; i++){
        alert(numeros[i])
    }
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] >= 10){
            alert(numeros[i])
        }
    }
}

function exercicio12(){
    let nomes = []

    for(let i = 0; i < 5; i++){
        nomes.push(prompt("Digite um nome"))
    }
    let nomesComCinco = 0
    for(let i = 0; i < nomes.length; i++){
        let contarNome = nomes[i]
        if(contarNome.length > 5){
            nomesComCinco = nomesComCinco + 1
        }
    }

    alert("Nomes com mais de 5 letras: " + nomesComCinco)
}

function exercicio13(){
    let idade = []

    for(let i = 0; i < 7; i++){
        idade.push(parseInt(prompt("Digite uma idade")))
    }
    let menorIdade = 0
    for(let i = 0; i < idade.length; i++){
        if(idade < 18){
            menorIdade = menorIdade + 1
        }
    }
    alert("Menores de idade: " + menorIdade + 
        "\nMaiores de idade: " + (7 - menorIdade)
    )
}

function exercicio14(){
    let notas = []

    for(let i = 0; i < 6; i++){
        notas.push(parseFloat(prompt("Digite a nota")))
    }
    for(let i = 0; i < notas.length; i++){
        alert("Nota registrada: " + notas[i])
    }
    let notaMaior = []
    for(let i = 0; i < notas.length; i++){
        if(notas[i] >= 7){
            notaMaior = notas[i] + ", " + notaMaior
        }
    }
    alert("Notas maiores ou iguais a 7: " + notaMaior)
}

function exercicio15(){
    let cidades = [];

    for(let i = 0; i < 4; i++){
       cidades.push(prompt("Digite uma cidade")) 
    }
    cidades[3] = prompt("Digite uma nova cidade")
    let cidade = []
    for(let i = 0; i < cidades.length; i++){
        cidade = cidades[i] + cidade
    }
    alert(cidades)
}

function exercicio16(){
    let produtos = []

    for(let i = 0; i < 5; i++){
        produtos.push(prompt("Digite um produto"))
    }
    let pesquisar = prompt("Pesquise um produto")
    let validacao = ""
    for(let i = 0; i < produtos.length; i++){
        if(pesquisar === produtos[i]){
            validacao = "O produto foi encontrado na " + [i] + " posição"
            break
        } else { 
            validacao = "Produto não encontrado"
        }
    }
    alert(validacao)
}

function exercicio17(){
    let numeros = []

    for(let i = 0; i < 8; i++){
        numeros.push(parseFloat(prompt("Digite um número")))
    }
    let somaPar = 0
    let somaImpar = 0
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 === 0){
            let numero = numeros[i]
            somaPar = somaPar + numero
        } else { 
            let numero = numeros[i]
            somaImpar = somaImpar + numero
        }
    }
    alert("Soma dos números pares: " + somaPar + 
        "\nSoma dos números impares: " + somaImpar
    )
}
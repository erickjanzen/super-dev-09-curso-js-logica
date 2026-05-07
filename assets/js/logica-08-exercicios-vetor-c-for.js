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
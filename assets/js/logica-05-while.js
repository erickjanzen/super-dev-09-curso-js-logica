function exemplo01() {
    debugger
    //Mostrar uma mensagem 4x
    let indice = 0; // indice é um contador

    while (indice < 4) {
        console.log("Olá");
        indice = indice + 1;
    }
}

function exemploSolicitarNumeros() {
    //MODO ANTIGO, sem while
    //let numero1 = parseInt(prompt("Digite o número"))
    //let numero2 = parseInt(prompt("Digite o número"))
    //let numero3 = parseInt(prompt("Digite o número"))

    debugger
    //Solicitar 3 números
    let indice = 0;

    //while: utilizamos para repetir códigos
    //while(indice < 3) {
    while (indice <= 2) {
        let numero = parseInt(prompt("Digite o número: "));
        indice = indice + 1;
    }

    alert("Muito obrigado");
}

function solicitarDadosPaciente() {
    //solicitar dados de 3 tres pacientes, nome e idade
    let indice = 0;

    while (indice < 3) {
        let nome = prompt("Digite o nome do paciente")
        let idade = parseInt(prompt("Digite a idade do paciente " + nome))

        let anoNascimento = 2026 - idade;

        alert(nome + " nasceu em " + anoNascimento);

        //incrementar
        indice = indice + 1;
    }
}

function calcularJogos() {
    let indice = 0

    let total = 0

    while (indice <= 2) {
        let nome = prompt("Nome do jogo");
        let preco = parseFloat(prompt("Preço do jogo"));

        total = total + preco;
        indice = indice + 1
    }
    alert("Valor final: " + "R$ " + total);
}

function descobrirQuantidade() {
    let indice = 0;
    let quantidadeMenoresIdade = 0;

    while (indice < 3) {
        let nome = prompt("Digite o nome");
        let idade = parseInt(prompt("Digite a idade"));

        if (idade <= 17) {
            quantidadeMenoresIdade = quantidadeMenoresIdade + 1;
        }

        indice = indice + 1;
    }

    alert("Quantidade de pessoas menores de 18 anos: " + quantidadeMenoresIdade)
}

function contagemReg() {
    let indice = 10;
    debugger

    while (indice > 0) {
        alert(indice)
        indice = indice - 1;
    }
}

function descobrirMaiorAltura() {
    //descobrir maior altura
    let indice = 0;
    let maiorAltura = 0;

    while (indice < 4) {
        let altura = parseFloat(prompt("Digite a altura"));

        if (altura > maiorAltura) {
            maiorAltura = altura;
        }
        indice = indice + 1;
    }
    alert("Maior altura: " + maiorAltura)
}

function descobrirMenorVitoria() {
    let indice = 0;
    let menorQuantidadeVitorias = 99999999999999;

    while (indice < 3) {
        let personagem = prompt("Digite o nick");
        let quantidadeVitorias = parseInt(prompt("Digite a quantidade de vitórias"));

        if (quantidadeVitorias < menorQuantidadeVitorias) {
            menorQuantidadeVitorias = quantidadeVitorias;
        }
        indice = indice + 1;
    }
    alert("Menor quantidade de vitórias: " + menorQuantidadeVitorias)
}

function descobrirColaboradorComBonificacaoSalario() {
    let indice = 0;
    let maiorBonificacao = 0;
    let colaboradorMaiorBonificacao = "";

    while (indice < 3) {
        let colaborador = prompt("Digite o nome do colab");
        let bonificacao = parseFloat(prompt("Digite o valor da bonificação"));

        if (bonificacao > maiorBonificacao) {
            maiorBonificacao = bonificacao;

            colaboradorMaiorBonificacao = colaborador;
        }

        indice = indice + 1;
    }
    alert(colaboradorMaiorBonificacao + " tem a maior bonificação: " + maiorBonificacao);
}

function descobrirMenorNome() {
    let indice = 0;
    let menorNome = "duwadiuawbdpiawbdaidubaiwpuhdpaouhdpaouhdpaiwudhpawudpawidbpiawbdpiuwdaudha";

    let quantidadeDesejada = parseInt(prompt("Digite a quantidade desejada para cadastrar"));

    while (indice < quantidadeDesejada) {
        let nome = prompt("Digite o nome").trim();

        if (nome.length < menorNome.length) {
            menorNome = nome;
        }
        indice = indice + 1;
    }
    alert("Menor nome: " + menorNome + "\nQuantidade de caracteres: " + menorNome.length);
}

function repetirEnquantoUsuarioDesejaContinuar() {
    let desejaContinuar = "";

    alert("Bem vindo ao sistema de cadastro de fila de atedimento do SOS")

    while (desejaContinuar != "não") {

        let nomePaciente = prompt("Digite o nome do paciente");
        desejaContinuar = prompt("Deseja continuar? [sim/não]").toLowerCase();
    }
}

function repetirEnquantoUsuarioDesejaContinuarComConfirm() {
    let desejaContinuar = true;
    let quantidadePacientesCadastrados = 0;

    alert("Bem vindo ao sistema de cadastro de fila de atendimento do SOS");

    while (desejaContinuar != false) {
        let nomePaciente = prompt("Digite o nome do paciente");
        quantidadePacientesCadastrados = quantidadePacientesCadastrados + 1;
        desejaContinuar = confirm("Deseja continuar?");
    }

    alert("Quantidade de pacientes que foram cadastrados: " + quantidadePacientesCadastrados)
}

function exemploValidacao() {
    let indice = 0;

    while (indice < 3) {
        let nome = prompt("Digite o nome").trim();

        while ((nome.length < 2) || (nome.length > 20)) {
            nome = prompt("Nome inválido, deve conter no mínimo 2 carcteres e no máximo 20 carcteres. \nDigite o nome").trim();
        }

        let idade = parseInt(prompt("Digite a idade"));
        while ((idade < 16) || (idade > 100)) {
            idade = parseInt(prompt("Idade inválida, deve ser entre 16 e 100 anos"))
        }

        indice = indice + 1
    }
}

function solicitarDadosMedico() {
    let indice = 0;

    while (indice < 5) {
        let nome = prompt("Digite o nome do médico");
        let crm = prompt("Digite o CRM do médico");

        while ((nome.length < 2) || (nome.length > 40)) {
            nome = prompt("Nome inválido")
        }
        while ((crm.length < 6) || (crm.length > 6)) {
            crm = prompt("CRM inválido \nDigite o código")
        }
        indice = indice + 1
    }
    alert("Obrigado por utilizar nosso sistema Hospitalar")
}

function solicitarDadosPaciente() {
    let indice = 0;
    let quantidade = parseInt(prompt("Quantidade de pacientes que serão registrados"))
    let idade = 0

    while (indice < quantidade) {
        let nome = prompt("Digite o nome do paciente")
        while ((nome.length < 2) || (nome.length > 20)) {
            nome = prompt("Nome inválido \nDigite novamente")
        }
        idade = parseInt(prompt("Digite a idade do paciente"))
        indice = indice + 1
    }
    alert("Foram registrados " + indice + " pacientes");
}

function somarIdadePaciente() {
    let indice = 0
    let idade = 0
    let somaIdade = 0


    while (indice < 6) {
        idade = parseInt(prompt("Digite a idade do paciente"))
        while (idade <= 0) {
            idade = parseInt(prompt("Idade inválida \nDigite uma idade válida"))
        }
        somaIdade = somaIdade + idade
        indice = indice + 1
    }
    alert("A soma de idade dos pacientes é " + somaIdade)
}

function calcularMediaIdade() {
    let indice = 0
    let idade = 0
    let somaIdade = 0

    while (indice < 5) {
        idade = parseInt(prompt("Digite a idade do paciente"))
        while (idade <= 0) {
            idade = parseInt(prompt("Idade inválida \nDigite uma idade válida"))
        }
        somaIdade = idade + somaIdade
        indice = indice + 1
    }
    alert("A média de idade é: " + (somaIdade / 5) + " anos")

}

function contarMaioresIdade() {
    let indice = 0
    let idade = 0
    let pacientes = 0

    while (indice < 7) {
        idade = parseInt(prompt("Digite a idade do paciente"))
        if (idade >= 18) {
            pacientes = pacientes + 1
        }

        indice = indice + 1
    }
    alert(pacientes + " são maiores de idade")
}

function validarCRM() {
    let indice = 0;

    while (indice < 5) {
        let nome = prompt("Digite o nome do médico");
        let crm = prompt("Digite o CRM do médico");

        while ((nome.length < 2) || (nome.length > 40)) {
            nome = prompt("Nome inválido")
        }
        while ((crm.length < 6) || (crm.length > 6)) {
            crm = prompt("CRM inválido \nDigite o código")
        }
        alert("Médico cadastrado")
        indice = indice + 1
    }
}

function solicitarPressaoArterial() {
    let indice = 0
    let pressao = 0
    let pacientes = 0

    while (indice < 6) {
        pressao = parseFloat(prompt("Digite sua pressão arterial"))
        while (pressao < 0) {
            pressao = parseFloat(prompt("Pressão incorreta \nDigite uma pressão válida"))
        } if (pressao > 14) {
            pacientes = pacientes + 1
        }
        indice = indice + 1
    }
    alert(pacientes + " pacientes possuem pressão maior que 14")
}

function menuContinuarCadastrado(){
    let indice = 0
    let pacientes = 0

    while(indice < 1){
        nome = prompt("Digite o nome do paciente")
        idade = parseInt(prompt("Digite a idade do paciente"))
        continuar = prompt("Se deseja continuar digite [sim]")
        pacientes = pacientes + 1
        if(continuar !== "sim"){
            indice = indice + 1
        }
    }
    alert ("Foram registrados " + pacientes)
}

function frequenciaCardiaca(){
    let indice = 0
    let frequencia = 0
    let pacientes = 0

    while(indice < 1){
        frequencia = parseFloat(prompt("Digite a frequência cardíaca")) 
        pacientes = pacientes + 1
        if(frequencia === 0){
            indice = indice + 1
        }
    }
    alert("Foram registradas " + (pacientes - 1) + " frequências cardíacas")
}

function maiorTemperatura(){
    let indice = 0
    let temperatura = 0
    let maiorTemperatura = 0

    while(indice < 5){
        temperatura = parseFloat(prompt("Digite a temperatura"))
        if(temperatura > maiorTemperatura){
            maiorTemperatura = temperatura
        }
        indice = indice + 1
    }
    alert("A maior temperatura é: " + maiorTemperatura + " graus")
}

function menorTemperatura(){
    let indice = 0
    let temperatura = 0
    let menorTemperatura = 9999999

    while(indice < 5){
        temperatura = parseFloat(prompt("Digite a temperatura"))
        if(temperatura < menorTemperatura){
            menorTemperatura = temperatura
        }
        indice = indice + 1
    }
    alert("A menor temperatura é: " + menorTemperatura + " graus")
}

function contarSintomas(){
    let indice = 0
    let febre = 0
    let paciente = 0

    while(indice < 5){
        nome = prompt("Digite o nome do paciente")
        febre = prompt(nome + " está com febre?")
        if (febre === "sim"){
            paciente = paciente + 1
        }
        indice = indice + 1
    }
    alert(paciente + " pacientes estão com febre")
}

function pacientesPorIdade(){
    let indice = 0
    let crianca = 0
    let adolescente = 0
    let adulto = 0

    while(indice < 8){
        idade = parseInt(prompt("Digite a idade do paciente"))
    if(idade < 12){
        crianca = crianca + 1
    } else if(idade <= 17){
        adolescente = adolescente + 1
    } else {
        adulto = adulto + 1
    }
    indice = indice + 1
    }
    alert("Criança: " + crianca + "\nAdolescente: " + adolescente + "\nAdulto: " + adulto)
}

function opcaoMenu(){
    let indice = 0

    while(indice < 1){
        menu = parseInt(prompt("1 - Cadastrar paciente \n2- Cadastras médico \n3- Sair"))
        if(menu === 1){
            paciente = prompt("Digite o nome do paciente")
        } else if(menu === 2){
            medico = prompt("Digite o nome do médico")
        } else if(menu === 3){
            indice = indice + 1
            alert("Sistema encerrado")
        } else{
            alert("Número inválido")
        }
    }
}

function relatorioPaciente(){
    
}
function exemplo01(){
    let nome = prompt("Digite seu nome");
    let sobrenome = prompt("Digite seu sobrenome");
    let nomeCompleto = (nome + " " + sobrenome);

    alert("Seu nome completo é " + nomeCompleto);
}

function conversaoStringParaInt(){
    let numero1 = parseInt("8");
    let numero2 = parseInt("12");
    let soma = numero1 + numero2;

    alert("Soma: " + soma);
}

function conversaoStringParaAlternativo(){
    let numero1 = parseInt(prompt("Digite o número 1"));
    let numero2 = parseInt(prompt("Digite o número 2"));
    let soma = numero1 + numero2;
    alert("Soma: " + soma);
}

function conversaoStringParaFloat(){
    let quantidadeHoras = parseInt(prompt("Digite a quantidade de horas trabalhadas"));
    let valorHora = parseFloat(prompt("Digite o valor hora"));

    let salarioBruto = quantidadeHoras * valorHora;

    alert("Quantidade de horas: " + quantidadeHoras + "\n" +
        "Valor da hora: " + valorHora + "\n" +
        "Salário bruto: " + salarioBruto
    )
}

function exemplo02(){   
     
let nome = prompt("Digite o nome do atleta");
let altura = parseFloat(prompt("Digite a altura"));
let peso = parseFloat(prompt("Digite o peso"));
let imc = peso / (altura * altura);

alert("Atleta " + nome + " tem IMC " + imc);
}

function exemplo03(){
 let anoNascimento = parseInt(prompt("Digite o seu ano de nascimento"));
 // let anoAtual = 2026;
 let anoAtual = new Date().getFullYear();
 let idade = anoAtual - anoNascimento;

 alert("Idade: " + idade);
}

function exemplo04(){    
 let modelo = prompt("Informe o modelo do carro");
 let ano = parseInt(prompt("Informe o ano do carro"));
 let velocidadeMaxima = parseInt(prompt("Informe a velocidade Máxima"));
 let tempoViagemHoras = parseInt(prompt("Informe as horas da viagem"));
 let distancia = velocidadeMaxima * tempoViagemHoras;

 alert("Carro: " + modelo + " " + ano + "\n" +
    "Distância estimada: " + distancia + " km");    
}
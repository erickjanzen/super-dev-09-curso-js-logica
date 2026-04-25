function exercicio01(){
    for (let indice = 5; indice > 0; indice = indice - 1){
        console.log(indice)
    }
}

function exercicio02(){
        let nome = prompt("Digite seu nome")
    for(let indice = 0; indice < 3; indice = indice + 1){
        console.log(nome)
    }
}

function exercicio03(){
    for(let indice = 1; indice < 11; indice = indice + 1){
        console.log(indice)
    }
}

function exercicio04(){
    for(let indice = 5; indice > 0; indice = indice - 1){
        console.log(indice)
    }
}

function exercicio05(){
    let total = 0
    for( let indice = 0; indice < 6; indice = indice + 1){
        total = indice + total
        console.log(indice)
    }
    console.log(total)
}

function exercicio06(){
    for(let indice = 0; indice <= 10; indice = indice + 1){
        if(indice % 2 === 0){
            console.log(indice)
        }
    }
}

function exercicio07(){
    for(let indice = 0; indice <= 10; indice = indice + 1){
        if(indice % 2 !== 0){
            console.log(indice)
        }
    }
}

function exercicio08(){

    for(let indice = 0; indice < 3; indice = indice + 1){
        let nome = prompt("Digite um nome")
        console.log(nome)
    }
}

function exercicio09(){
    let soma = 0
    let idade = 0
    for(let indice = 0; indice < 3; indice = indice + 1){
        let idade = parseInt(prompt("Digite uma idade"))
        soma = idade + soma
    }
    console.log(soma)
}

function exercicio10(){
    let soma = 0
    let nota = 0
    for(let indice = 0; indice < 4; indice = indice + 1){
    let nota = parseInt(prompt("Digite a nota"))
        soma = nota + soma
    }
    console.log(soma / 4)
}

function exercicio11(){
    let maiores = 0
    for(let indice = 0; indice < 5; indice = indice + 1){
        let idade = parseInt(prompt("Digite a idade"))
        if(idade >= 18){
            maiores = maiores + 1
        }
    }
    console.log(maiores)
}

function exercicio12(){
    for(let indice = 0; indice < 10; indice = indice + 1){
        console.log("1 + " + indice + " = "+ (indice + 1))
    }
}

function exercicio13(){
    let nome1
    let nome2
    let nome3
    let nome4
    for(let indice = 0; indice < 1; indice = indice + 1){
        nome1 = prompt("Digite um nome")
        nome2 = prompt("Digite um nome")
        nome3 = prompt("Digite um nome")
        nome4 = prompt("Digite um nome")
    } if ((nome1.length > 1) && (nome2.length > 1) && (nome3.length > 1) && (nome4.length > 1)){
        alert("Primeiro nome possui " + nome1.length + " letras" + "\nSegundo nome possui " + nome2.length + " letras" + "\nTerceiro nome possui " + nome3.length + " letras" + "\nQuarto nome possui " + nome4.length + " letras")
    }

}

function exercicio14(){
    let numeroM = 0
    let numero = 0
    for(let indice = 0; indice < 5; indice = indice + 1){
        numero = parseFloat(prompt("Digite um número"))
        if(numero > numeroM){
            numeroM = numero
        }
    }
    alert("O maior número é " + numeroM)
}

function exercicio15(){
    let numeroM = 9999999999
    let numero = 9999999999
    for(let indice = 0; indice < 5; indice = indice + 1){
        numero = parseFloat(prompt("Digite um número"))
        if(numero < numeroM){
            numeroM = numero
        }
    }
    alert("O menor número é " + numeroM)
}

function exercicio16(){
    let numeroP = 0
    for(let indice = 0; indice < 6; indice = indice + 1){
        let numero = parseFloat(prompt("Digite um número"))
        if(numero > 0){
            numeroP = numeroP + 1
        }
    }
    alert(numeroP + " são positivos")
}

function exercicio17(){
    let numeroP = 0
    for(let indice = 0; indice < 5; indice = indice + 1){
        let numero = parseFloat(prompt("Digite um número"))
        if(numero % 2 === 0){
            numeroP = numero + numeroP
        }
    }
    alert ("A soma dos números pares é " + numeroP)
}

function exercicio18(){
    let quantidade = parseInt(prompt("Digite o último número"))
    for(let indice = 0; indice < quantidade; indice = indice + 1){
        if(indice % 3 === 0){
            console.log(indice)
        }
    }
}

function exercicio19(){
    for(let indice = 0; indice < 3; indice = indice + 1){
        let produtos = prompt("Digite o nome do produto")
        if(produtos.length < 2){
            produto = prompt("Nome inválido, digite o nome de um produto válido")
        }
    }
    alert("Produtos cadastrados com sucesso")
}

function exercicio20(){
    let soma = 0
    let indice
    for(indice = 0; indice < 3; indice = indice + 1){
        let nome = prompt("Digite o nome do usuário")
        let idade = parseInt(prompt("Digite a idade do usuário"))
        soma = idade + soma
    }
    alert("Foram registrados " + indice + " usuários \nSoma das idades é " + soma + "\nA média de idade é " + (soma / indice).toFixed(2))
}

function exercicio21(){
    let inicial = parseInt(prompt("Digite o número inicial"))
    let final = parseInt(prompt("Digite o número final"))
    for(let indice = inicial; indice <= final; indice = indice + 1){
        if(indice % 2 === 0){
            console.log(indice)
        }
    }
}

function exercicio22(){
    let inicial = parseInt(prompt("Digite o número inicial"))
    let final = parseInt(prompt("Digite o último número"))
    let soma = 0
    for(let indice = inicial; indice <= final; indice = indice + 1){
        soma = soma + indice
    }
    console.log(soma)
}

function exercicio23(){
    let negativo = 0
    for(let indice = 0; indice < 6; indice = indice + 1){
        let numeroNeg = parseInt(prompt("Digite um número"))
        if(numeroNeg < 0){
            negativo = negativo + numeroNeg
        }
    }
    console.log(negativo)
}

function exercicio24(){
let somaAltura = 0
    for(let indice = 0; indice < 6; indice = indice + 1){
        let altura = parseFloat(prompt("Digite a altura"))
        somaAltura = altura + somaAltura
    }
    console.log("Altura média: " + (somaAltura / 6).toFixed(2))
}

function exercicio25(){
    let pontos = 0
    for(let indice = 0; indice < 8; indice = indice + 1){
        let nota = parseFloat(prompt("Digite a nota do aluno"))
        if(nota >= 7){
            pontos = pontos + 1
        }
    }
    console.log(pontos + " notas são maiores ou iguais a 7")
}
function exercicio26(){
    let maiorNum = 0
    let menorNum = 999999
    for(let indice = 0; indice < 7; indice = indice + 1){
        let numero = parseFloat(prompt("Digite um número"))
        if(numero < menorNum){
            menorNum = numero
        } else if(numero > maiorNum){
            maiorNum = numero
        }
    }
    console.log("O maior número é " + maiorNum + " e o menor número é " + menorNum)
}

function exercicio27(){
    let idadeS = 0
    for(let indice = 0; indice < 5; indice = indice + 1){
        let nome = prompt("Digite o nome da pessoa")
        let idade = parseInt(prompt("Digite a idade de " + nome))
        if(idade >= 18){
            idadeS = idade + idadeS
        }
    }
    console.log("A soma das idades é " + idadeS)
}

function exercicio28(){
    let masculino = 0
    let feminino = 0
    for(let indice = 0; indice < 6; indice = indice + 1){
        let nome = prompt("Digite o nome")
        let sexo = prompt("Digite o gênero da pessoa \n[M] Masculino \n[F] Feminino")
        while((sexo.toLowerCase() !== "m") && (sexo.toLowerCase() !== "f")){
            sexo = prompt("Digite o gênero da pessoa \n[M] Masculino \n[F] Feminino")
        }
        // se usar "|| ou" o while vai aparecer duas vezes
        if(sexo.toLowerCase() === "m"){
            masculino = masculino + 1 
        } else if(sexo.toLowerCase() === "f"){
            feminino = feminino + 1
        }

    }
    console.log(masculino + " são homens\n" + feminino + " são mulheres")
}

function exercicio29(){
    let media = 0
    for(let indice = 0; indice < 5; indice = indice + 1){
        let nota = parseFloat(prompt("Digite a nota do aluno"))
        while((nota < 0) || (nota > 10)){
            nota = parseFloat(prompt("Valor inválido, digite a nota do aluno"))
        }
        media = nota + media
    }
    console.log("A média do aluno é " + (media / 5))
}

function exercicio30(){
    for(let indice = 0; indice < 5; indice = indice + 1){
        let nTabuada = parseInt(prompt("Digite o número para tabuada"))
        for(let tabuada = 0; tabuada < 10; tabuada = tabuada + 1){
            console.log(nTabuada + " * " + (tabuada + 1 ) + " = " + (tabuada + 1 ) * nTabuada)
        }
        console.log("\n")
    }
}

function exercicio31(){
    let aprovados = 0
    let reprovados = 0
    for(let indice = 0; indice < 6; indice = indice + 1){
        let nome = prompt("Digite o nome do aluno")
        let nota = parseFloat(prompt("Digite a nota do aluno"))
        while((nota < 0) || (nota > 10)){
            nota = parseFloat(prompt("Nota inválida, digite uma nota válida"))
        }
        if(nota >= 7){
            aprovados = aprovados + 1
        } else {
            reprovados = reprovados + 1
        }
    }
    console.log(aprovados + " alunos foram aprovados\n" + reprovados + " alunos reprovaram")
}

function exercicio32(){
    let soma = 0
    for(let indice = 0; indice < 8; indice = indice + 1){
        let numero = parseFloat(prompt("Digite um número (somente os positivos serão somados)"))
        if(numero > 0){
            soma = numero + soma
        }
    }
    console.log(soma)
}

function exercicio33(){
    let nome = ""
    for(let indice = 0; indice < 5; indice = indice + 1){
        let nomeS = prompt("Digite o nome")
        if(nomeS.length > nome.length){
            nome = nomeS
        }
    }
    console.log("O maior nome é "  + nome)
}

function exercicio34(){
    let numero = parseInt(prompt("Digite um número para fatorar"))
    let numB = 0
    for(let indice = 1; indice < numero; indice = indice + 1){
        let numA = numero - 1
        numB = numA * (numA - 1)
    }
    console.log(numB)
}

function exercicio35(){
    let inicio = parseInt(prompt("Digite o número que a contagem regressiva começa"))
    let final = parseInt(prompt("Digite o número que a contagem regressiva termina"))
    for(let indice = inicio; indice >= final; indice = indice - 1){
        alert(indice)
}
}

function exercicio36(){
    let nota04 = 0
    let nota56 = 0
    let nota78 = 0
    let nota910 = 0
    for(let indice = 0; indice < 8; indice = indice + 1){
        let numero = parseInt(prompt("Digite a nota"))
        while((numero < 0) || (numero > 10)){
            numero = parseInt(prompt("Nota inválida, digite a nota"))
        }
        if((numero >= 0) && (numero <= 4)){
            nota04 = nota04 + 1
        } else if((numero > 4) && (numero < 7)){
            nota56 = nota56 + 1
        } else if((numero > 7) && (numero <= 8)){
            nota78 = nota78 + 1
        } else {
            nota910 = nota910 + 1
        }
    }
    console.log(nota04 + " nota(s) está entre 0 e 4\n" + nota56 + " nota(s) está entre 5 e 6\n" + nota78 + " nota(s) está entre 7 e 8\n" + nota910 + " nota(s) está entre 9 e 10")
}

function exercicio37(){
    let final = parseInt(prompt("Digite o número final"))
    let soma = 0
    for(let indice = 1; indice <= final; indice = indice + 1){
        if((indice % 2 === 0) || (indice % 3 === 0)){
            soma = indice + soma
        }
    }
    console.log(soma)
}

function exercicio38(){
    let soma = 0
    let baixa = 0
    for(let indice = 0; indice < 8; indice = indice + 1){
        let nota = parseFloat(prompt("Digite a nota"))
        while((nota < 0) || (nota > 10)){
            nota = parseFloat(prompt("Nota inválida, digite uma nota entre 0 e 10"))
        }
        soma = nota + soma
        if(nota < 7){
            baixa = baixa + 1
        }
    }
    console.log("A soma das notas é " + soma + "\nA média das notas é " + (soma / 8).toFixed(2) + "\n" + baixa + " notas são baixas" )
}

function exercicio39(){
    let pares = 0
    let impares = 0
    let soma = 0
    for(let indice = 0; indice < 10; indice = indice + 1){
        let numero = parseInt(prompt("Digite um número"))
        if(numero % 2 === 0){
            pares = pares + 1
        } else { 
            impares = impares + 1
        }
        soma = numero + soma
    }
    console.log(pares + " são pares\n" + impares + " são impares\n" +  soma + " é a soma dos números")
}

function exercicio40(){
    let passado = 0
    let mediaM = 0
    let mediaR = 999999
    let melhorN = ""
    let cadastro = 0
    for (let indice = 0; indice < 5; indice = indice + 1){
        let nome = prompt("Digite o nome do aluno")
        let nota1 = parseInt(prompt("Digite a primeira nota do aluno"))
        let nota2 = parseInt(prompt("Digite a segunda nota do aluno"))
        let media = (nota1 + nota2) / 2
        if(media > 7){
            passado = passado + 1
        }
        if(media > mediaM){
            mediaM = media
        } else if(media > mediaR){
            mediaR = media
        }
        if(media > mediaM){
            melhorN = nome
        }
        cadastro = cadastro + 1
    }
    console.log("Alunos cadastrados: " + indice + "\nAlunos aprovados: " + passado + "\nAlunos reprovados: " + (5 - passado) + "\nMaior média da turma: " + mediaM + "\nMenor média da turma: " + mediaR + "\nMelhor aluno: " + melhorN)
}
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
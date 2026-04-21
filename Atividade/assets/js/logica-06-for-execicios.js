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
function contarLetrasNome(){
    let nome = prompt("Digite seu nome")
    let letrasNome = nome.length

    alert("Seu nome tem " + letrasNome + " letras")
}

function converterParaMaiusculas(){
    let nome = prompt("Digite seu nome")
    let nomeMaiuscula = nome.toUpperCase()

    alert(nomeMaiuscula)
}

function converterParaMinusculas(){
    let nome = prompt("Digite seu nome em letras maiúsculas")
    let nomeMinusculas = nome.toLowerCase()

    alert(nomeMinusculas)
}

function mostrarPrimeiraLetra(){
    let palavra = prompt("Digite uma palavra")
    let primLetra = palavra[0]

    if(palavra){
        alert(primLetra)
    }
}

function mostrarUltimaLetra(){
    let palavra = prompt("Digite uma palavra")
    let ultLetra = palavra.length - 1

    if(palavra){
        alert(palavra[ultLetra])
    }
}

function verificarPalavraNaFrase(){
    let frase = prompt("Digite uma frase");
    let palavra = prompt("Digite uma palavra que está na frase");

    let fraseM = frase.toLowerCase()
    let palavraM = palavra.toLowerCase()

    if ((fraseM)&&(palavraM)&&(fraseM.includes(palavraM)===true)) {
        alert("A palavra que está na frase é: " + palavra)
    } else {
        alert("Essa palavra não está na frase")
    }
}

function substituirCorNaFrase(){
    let frase = prompt("Digite algum objeto e a cor azul")

    if (frase.toLowerCase().includes("azul") === true){
        alert(frase.replaceAll("azul", "vermelho"))
    }
}

function trocarEstacao(){
    let frase = prompt("Digite alguma frase com primavera")

    if (frase.toLowerCase().includes("primavera") === true){
        alert(frase.replaceAll("primavera", "verão"))
    }
}

function primeirosCaracteres(){
    let palavra = prompt("Digite uma palavra")

    if(palavra.length >= 4){
        alert(palavra.slice(0, 4))  
    }
}

function separarNome(){
    let nomeCompleto = prompt("Digite sem nome completo")
    let nome = nomeCompleto.split(" ")
    debugger
    if(nome ){
        alert("Nome: " + nome[0] + "\nSobrenome: " + nome[1] + "\nSobrenome: " + nome[2])
    }
}

function removerEspacosExtras(){
    
}
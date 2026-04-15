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

    alert(primLetra)
}

function mostrarUltimaLetra(){
    let palavra = prompt("Digite uma palavra")
    let ultLetra = palavra.lastIndexOf()

    alert(1 + ultLetra[0])
}
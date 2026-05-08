function exercicio01(){
    let nomes = [];
    
    for(let i = 0; i < 3; i += 1){
        nomes.push(prompt("Digite um nome"))
    }
    let texto = "Nomes cadastrados: "
    for(let i = 0; i < (nomes.length - 1); i++){
        let nome = nomes[i]
        texto = texto + nome + ", "
    }
    alert(texto + nomes[2])
}

function exercicio02(){
    let idades = []

    for(i = 0; i < 4; i += 1){
        idades.push(parseInt(prompt("Digite uma idade")))
    }
    let texto = "Idades cadastradas: "
    for(let i = 0; i < (idades.length - 1); i++){
        let idade = idades[i]
        texto = texto + idade + " / "
    }
    alert(texto + idades[3])
}

function exercicio03(){
    let cidades = [];

    for(i = 0; i < 5; i++){
        cidades.push(prompt("Digite uma cidade"))
    }
    let texto = "Cidades registradas: "
    for(i = 0; i < (cidades.length - 2); i++){
        let cidade = cidades[i]
        texto = texto + cidade + ", "
    }
    alert(texto + cidades[3] + " e " + cidades[4])
}

function exercicio04(){
    let numeros = [];
    for(i = 0; i < 5; i++){
        numeros.push(parseFloat(prompt("Digite o número")))
    }
    let soma = 0
    for(i = 0; i < 5; i++){
        soma = soma + numeros[i]
    }
    alert(soma)
}

function exercicio05(){
    let notas = []
    for(i = 0; i < 4; i++){
        notas.push(parseFloat(prompt("Digite a nota")))
    }
    let soma = 0
    for(i = 0; i < notas.length; i++){
        soma = soma + notas[i]
    }

    alert("Média: " + (soma / notas.length))
}

function exercicio06(){
    let produtos = [];

    for(i = 0; i < 4; i++){
        produtos.push(prompt("Digite o nome do produto"))
    }
    let texto = "Produtos: \n"
    for(i = 0; i < produtos.length; i++){
        let produto = produtos[i]
        texto = texto + produto + "\n"
    }
    alert(texto)
}

function exercicio07(){
    let temperatura = [];
    for(i = 0; i < 5; i++){
        temperatura.push(parseFloat(prompt("Digite uma temperatura")))
    }
    let tempMaisAlta = 0
    for(i = 0; i < temperatura.length; i++){
        let temp = temperatura[i]
        if(temp > tempMaisAlta){
            tempMaisAlta = temp
        }
    }
    alert("Temperatura mais alta: " + tempMaisAlta)
}

function exercicio08(){
    let precos = []

    for(let i = 0; i < 4; i++){
        precos.push(parseFloat(prompt("Digite o preço do produto")))
    }
    let precoMenor = 99999
    for(let i = 0; i < precos.length; i++){
        if(precos[i] < precoMenor){
            precoMenor = precos[i]
        }
    }
    alert("O menor preço é: " + precoMenor)
}

function exercicio09(){
    let numeros = []

    for(let i = 0; i < 6; i++){
        numeros.push(parseFloat(prompt("Digite um número")))
    }
    let pares = 0
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 === 0){
            pares = pares + 1
        }
    }

    alert("Quantidade de números pares: " + pares)
}

function exercicio10(){
    let alunos = []

    for(let i = 0; i < 5; i++){
        alunos.push(prompt("Digite o nome do aluno"))
    }
    let pesquisa = prompt("Digite um nome para pesquisar na lista de nomes")
    let nome = ""
    debugger
    for(let i = 0; i < alunos.length; i++){
        if(alunos[i] === pesquisa){
            nome = ""
            break
        } else {
            nome = " não"
        }
    }

    alert("O nome " + pesquisa + nome + " foi encontrado na lista de pesquisa")
}

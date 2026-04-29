<<<<<<< HEAD
function exemplo01(){
    let carros = [];
    carros.push("BMW m3");
    carros.push("BYD Seal");
    carros.push("Mobi");
    carros.push("Chevet");

    carros[3] = "Chevette";

    carros.splice(2, 1); // apagou o Mobi que era indice 2 (terceira posição)

    alert("Quantidade de elementos: " + carros.length + "\nPrimeiro: " + carros[0] + "\nSegundo: " + carros[1] + "\nTerceiro: " + carros[2]);
}

function exemplo02(){
    let alunos = [];
    let frequencias = [];
    let status = [];

    alunos.push(prompt("Digite o nome do aluno"));
    frequencias.push(parseInt(prompt("Digite o percentual de frequencia")));

    alunos.push(prompt("Digite o nome do aluno"));
    frequencias.push(parseInt(prompt("Digite o percentual de frequencia")));

    if(frequencias[0] >= 70){
        status.push("Aprovado");
    } else {
        status.push("Reprovado");
    }

    if(frequencias[1] >= 70){
        status.push("Aprovado");
    } else {
        status.push("Reprovado");
    }

    alert("Alunos: " + alunos[0] + 
        "\nFrequencia: " + frequencias[0] + 
        "\nStatus: " + status[0] + 
        "\n\nAlunos: " + alunos[1] + 
        "\nFrequencia: " + frequencias[1] + 
        "\nStatus: " + status[1]
    )
}

function exemplo03(){
    let perfumes = [];

    perfumes.push("212 VIP")
    perfumes.push("Malbec")
    perfumes.push("One Million")
    perfumes.push("Sauvage")

    alert(perfumes[0] + "\n" + perfumes[1] + "\n" + perfumes[2] + "\n" + perfumes[3])

    perfumes[1] = "Armaf"
    perfumes.push("Le Male")
    perfumes.splice(0, 1)
    

    alert(perfumes[0] + "\n" + perfumes[1] + "\n" + perfumes[2] + "\n" + perfumes[3])
}

function exemplo04(){
    let materias = [];
    let cargaHoraria = [];
    let valoresHora = [];

    materias.push("Matemática") //indice 0
    cargaHoraria.push(200)
    valoresHora.push(50.25)

    materias.push("História") // indice 1
    cargaHoraria.push(150)
    valoresHora.push(42.50)

    materias.push("Geografia") // indice 2
    cargaHoraria.push(135)
    valoresHora.push(40.75)

    alert("Materia: " + materias[0] + 
        "\nCarga horaria: " + cargaHoraria[0] + "h" + 
        "\nValores hora: " + "R$ " + valoresHora[0] +
        "\n\nMateria: " + materias[1] + 
        "\nCarga horaria: " + cargaHoraria[1] + "h" + 
        "\nValores hora: " + "R$ " + valoresHora[1] +
        "\n\nMateria: " + materias[2] + 
        "\nCarga horaria: " + cargaHoraria[2] + "h" + 
        "\nValores hora: " + "R$ " + valoresHora[2])

    materias[1] = "Alemão"
    cargaHoraria[0] = 67

    alert("Materia: " + materias[0] + 
        "\nCarga horaria: " + cargaHoraria[0] + "h" + 
        "\nValores hora: " + "R$ " + valoresHora[0] +
        "\n\nMateria: " + materias[1] + 
        "\nCarga horaria: " + cargaHoraria[1] + "h" + 
        "\nValores hora: " + "R$ " + valoresHora[1] +
        "\n\nMateria: " + materias[2] + 
        "\nCarga horaria: " + cargaHoraria[2] + "h" + 
        "\nValores hora: " + "R$ " + valoresHora[2])
}

function exemplo05(){
    let destinosTur = [];

    for(let indice = 0; indice < 4; indice = indice + 1){
        destinosTur.push(prompt("Digite um destino de turismo"))
    }
    
    alert("Primeiro destino: " + destinosTur[0] +
        "\nSegundo destino: " + destinosTur[1] +
        "\nTerceiro destino: " + destinosTur[2] + 
        "\nQuarto destino: " + destinosTur[3]
    )

    destinosTur[2] = prompt("Digite outro ponto turistico para ser o segundo")
    destinosTur.push(prompt("Adicione um novo ponto turistico"))
    destinosTur.splice(0, 1)

    alert("Primeiro destino: " + destinosTur[0] +
        "\nSegundo destino: " + destinosTur[1] +
        "\nTerceiro destino: " + destinosTur[2] + 
        "\nQuarto destino: " + destinosTur[3]
    )
}

function exemplo06(){
    let restaurante = []
    let cidade = []
    let valoresMedios = []

    restaurante.push(prompt("Digite o nome do restaurante"))
    cidade.push(prompt("Digite a cidade"))
    valoresMedios.push(parseFloat(prompt("Digite os valores médios")))

    restaurante.push(prompt("Digite o nome do restaurante"))
    cidade.push(prompt("Digite a cidade"))
    valoresMedios.push(parseFloat(prompt("Digite os valores médios")))

    restaurante.push(prompt("Digite o nome do restaurante"))
    cidade.push(prompt("Digite a cidade"))
    valoresMedios.push(parseFloat(prompt("Digite os valores médios")))

    alert("Restaurante: " + restaurante[0] +
        "\nCidade: " + cidade[0] +
        "\nValores médios: R$ " + valoresMedios[0] + 

        "\n\nRestaurante: " + restaurante[1] +
        "\nCidade: " + cidade[1] +
        "\nValores médios: R$ " + valoresMedios[1] +

        "\n\nRestaurante: " + restaurante[2] +
        "\nCidade: " + cidade[2] +
        "\nValores médios: R$ " +valoresMedios[2]
    )

    restaurante[0] = prompt("Digite um novo nome para o primeiro restaurante")
    valoresMedios[2] = parseFloat(prompt("Digite um novo valor médio para o terceiro restaurante"))

    alert("Restaurante: " + restaurante[0] +
        "\nCidade: " + cidade[0] +
        "\nValores médios: R$ " + valoresMedios[0] + 

        "\n\nRestaurante: " + restaurante[1] +
        "\nCidade: " + cidade[1] +
        "\nValores médios: R$ " +valoresMedios[1] +

        "\n\nRestaurante: " + restaurante[2] +
        "\nCidade: " + cidade[2] +
        "\nValores médios: R$ " + valoresMedios[2]
    )
}

function exemplo07(){
    let filmes = []
    let generos = []
    let duracao = []
    let duracaoHoras = []

    filmes.push(prompt("Digite o nome do filme"));
    generos.push(prompt("DIgite o gênero do filme"));
    duracaoHoras.push(parseInt(prompt("Digite a duração do filme em minutos")));
    
    filmes.push(prompt("Digite o nome do filme"));
    generos.push(prompt("DIgite o gênero do filme"));
    duracaoHoras.push(parseInt(prompt("Digite a duração do filme em minutos")));
    
    filmes.push(prompt("Digite o nome do filme"));
    generos.push(prompt("DIgite o gênero do filme"));
    duracaoHoras.push(parseInt(prompt("Digite a duração do filme em minutos")));
    
    duracao.push((duracaoHoras[0] / 60).toFixed(2))
    duracao.push((duracaoHoras[1] / 60).toFixed(2))
    duracao.push((duracaoHoras[2] / 60).toFixed(2))

    alert("Filme: " + filmes[0] + 
        "\nGêneros: " + generos[0] + 
        "\nDuração em horas: " + duracao[0] + "h" +

        "\n\nFilme: " + filmes[1] + 
        "\nGêneros: " + generos[1] + 
        "\nDuração em horas: " + duracao[1] + "h" +

        "\n\nFilme: " + filmes[2] + 
        "\nGêneros: " + generos[2] + 
        "\nDuração em horas: " + duracao[2] + "h"
    )
    generos[1] = prompt("Escolha outro gênero para o segundo filme")
    duracaoHoras[0] = parseInt(prompt("Digite outra duração para o primeiro filme em minutos"))

    duracao[0] = (duracaoHoras[0] / 60).toFixed(2)

    filmes.splice(2, 1)

    alert("Filme: " + filmes[0] + 
        "\nGêneros: " + generos[0] + 
        "\nDuração em horas: " + duracao[0] + "h" +

        "\n\nFilme: " + filmes[1] + 
        "\nGêneros: " + generos[1] + 
        "\nDuração em horas: " + duracao[1] + "h" +

        "\n\nFilme: " + filmes[2] + 
        "\nGêneros: " + generos[2] + 
        "\nDuração em horas: " + duracao[2] + "h"
    )
}

// fazer exercicio 06
function exemplo08(){
    let produtos = [];
    let quantidade = [];
    let precos = [];
    let valoresTotais = [];

    produtos.push(prompt("Digite o nome do produto"));
    quantidade.push(parseInt(prompt("A quantidade do produto")));
    precos.push(parseFloat(prompt("Digite o preço unitário")));

    produtos.push(prompt("Digite o nome do produto"));
    quantidade.push(parseInt(prompt("A quantidade do produto")));
    precos.push(parseFloat(prompt("Digite o preço unitário")));

    produtos.push(prompt("Digite o nome do produto"));
    quantidade.push(parseInt(prompt("A quantidade do produto")));
    precos.push(parseFloat(prompt("Digite o preço unitário")));

    valoresTotais[0] = quantidade[0] * precos[0]
    valoresTotais[1] = quantidade[1] * precos[1]
    valoresTotais[2] = quantidade[2] * precos[2]

    alert("Nome do produto: " + produtos[0] + 
        "\nQuantidade comprada: " + quantidade[0] +
        "\nPreço unitário: R$ " + precos[0] +
        "\nPreço final: R$ " + valoresTotais[0] +

        "\n\nNome do produto: " + produtos[1] + 
        "\nQuantidade comprada: " + quantidade[1] +
        "\nPreço unitário: R$ " + precos[1] + 
        "\nPreço final: R$ " + valoresTotais[1] + 

        "\n\nNome do produto: " + produtos[2] + 
        "\nQuantidade comprada: " + quantidade[2] +
        "\nPreço unitário: R$ " + precos[2] +
        "\nPreço final: R$ " + valoresTotais[2])

    produtos.push(prompt("Digite o nome de um novo produto"));
    quantidade.push(parseInt(prompt("A quantidade do novo produto")));
    precos.push(parseFloat(prompt("Digite o preço unitário do novo produto")));

    valoresTotais[3] = quantidade[3] * precos[3]

    precos[2] = parseFloat(prompt("Digite outro valor para o segundo produto"))

    valoresTotais[2] = quantidade[2] * precos[2]

    produtos.splice(0, 1)
    quantidade.splice(0, 1)
    precos.splice(0, 1)
    valoresTotais.splice(0, 1)
    
        alert("Nome do produto: " + produtos[0] + 
        "\nQuantidade comprada: " + quantidade[0] +
        "\nPreço unitário: R$ " + precos[0] +
        "\nPreço final: R$ " + valoresTotais[0] +

        "\n\nNome do produto: " + produtos[1] + 
        "\nQuantidade comprada: " + quantidade[1] +
        "\nPreço unitário: R$ " + precos[1] + 
        "\nPreço final: R$ " + valoresTotais[1] + 

        "\n\nNome do produto: " + produtos[2] + 
        "\nQuantidade comprada: " + quantidade[2] +
        "\nPreço unitário: R$ " + precos[2] +
        "\nPreço final: R$ " + valoresTotais[2])
}

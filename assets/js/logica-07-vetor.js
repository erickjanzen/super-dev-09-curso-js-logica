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
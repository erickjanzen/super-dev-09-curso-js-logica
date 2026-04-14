function exemploToLowerCase(){
    let nome = "John Cena";
    let nomeMinusculo = nome.toLowerCase();

    console.log("Nome minúsculo: " + nomeMinusculo);
}

function exemploToUpperCase(){
    let nome = "John Cena";
    let nomeMainusculo = nome.toUpperCase();

    console.log("Nome maiúsculo: " + nomeMaiusculo);
}

function exemploTamanho(){
    let nome = "John Cena";
    let quantidadeCaracteres = nome.toUpperCase();

    console.log("Nome maiúsculo: " + nomeMaiusculo);
}

function exemploTamanho(){
    let nome = "John Cena";
    let quantidadeCaracteres = nome.length;

    console.log("Texto: '" + nome + "'");
    console.log("Quantidade de caracteres: " + quantidadeCaracteres);
}

function exemploSubstituicao(){
    let texto = "Abacate, Uva, Maca, Pera";
    let textoCorrigido = texto.replace("Maca", "Maçã");

    console.log("Texto: " + texto);
    console.log("Texto Corrigido: " + textoCorrigido);
}

function exemploSubstituicaoNaPropriaVariavel(){
    let texto = prompt("Digite o preço");
    texto = texto.replace(",",".");
    texto = texto.replace("R$", "");
    texto = texto.replaceAll(" ","");

    console.log("Texto sanitizado: " + texto);
}

function removerEspacosDoFim(){
    let texto = "    O Batman vive a noite, de dia ele dorme    ";

    console.log("O texto original: '" + texto + "'");

    texto = texto.trimEnd();
    console.log("O texto sem espaços no fim: '" + texto + "'");
}

function removerEspacosDoComeco(){
    let texto = "      O Batman vive a noite, de dia ele dorme     ";

    console.log("O texto original: '" + texto + "'");

    //texto = texto.trimStart().trimEnd();
    texto = texto.trimStart();
    console.log("O texto sem espaços no começo: '" + texto + "'");
}

function removerEspacosDoComecoFinal(){
    let texto = "    O batman vive a noite, de dia ele dorme      ";

    console.log("O texto original: '" + texto + "'");

    texto = texto.trim();
    console.log("O texto sem espaços: '" + texto + "'")
}

function agregarCaracteresFim(){
    let nome = "Paulo C";
    console.log("Nome do Cartão: " + nome.padEnd(20, "*"));
}

function agregarCaracteresComeco(){
    let finalCartao = "3021";
    console.log("Número do Cartão: " + finalCartao.padStart(12,"*"));
}

function verificarSeComecaCom(){
    let texto = prompt("Digite um nome");

    if (texto.toUpperCase().startsWith("P") === true) {
        alert("Começa com a letra 'P', pois tem a senha secreta");
    } else {
        alert("Não pode entrar na festa");
    }
}

function verificarSeContem(){
    let nomeEpisodio = prompt("Digite o nome do episodio");

    if (nomeEpisodio.toUpperCase().includes("S01") === true){
        alert("Primeira temporada");
    } else if (nomeEpisodio.toUpperCase().includes("S02") === true){
        alert("Segunda temporada");
    } else {
        alert("Temporadas infinitas")
    }
}

function verificarSeTerminaCom(){
    let bolo = prompt("Digiteo nome do bolo");

    if (bolo.endsWith("chocolate")=== true){
        alert("Boa escolha");
    } else {
        alert("Não como isso")
    }
}

function pegarPosicao(){
    let fruta = "Abacate";
    let primeiroCaracter = fruta[0];

    console.log("Fruta: " + fruta + "\nPrimeira posição: " + primeiroCaracter);
}

function quebrarString(){
    let horaMinuto = "20:30";

    let partes = horaMinuto.split(":");
    console.log(partes);

    let hora = partes[0];
    let minuto = partes[1];
    console.log("Hora: " + hora);
    console.log("Minuto: " + minuto);
}

function exemploPegarParteDaString(){
    let nomeCompleto = "Ruan Costa";
    // Ruan Costa
    // R => 0 (começa aqui)
    // u => 1
    // a => 2
    // n => 3
    //   => 4
    // C => 5
    // o => 6
    // s => 7
    // t => 8
    // a => 9

    let nome = nomeCompleto.slice(0, 4);
    let sobrenome = nomeCompleto.slice(5, 10);
    console.log(nome + " " + sobrenome)
}

function pegarIndiceDoCaracter(){
    let texto = "Abacate Uva Pera";
    let ultimoIndiceDoEspaco = texto.lastIndexOf(" ");
    let ultimaPalavra = texto.slice(ultimoIndiceDoEspaco + 1, texto.length);
    console.log(texto);
    console.log(ultimaPalavra);
}

function descobrirIndiceDoCaracter(){
    let numeroCartao = "3010 2039 2019 2030";
    let indicePrimeiroEspaco = numeroCartao.indexOf(" ");
    let primeiraParteCartao = numeroCartao.slice(0, indicePrimeiroEspaco);

    console.log("Cartão: " + numeroCartao);
    console.log("Primeira parte do cartão: " + primeiraParteCartao);
}
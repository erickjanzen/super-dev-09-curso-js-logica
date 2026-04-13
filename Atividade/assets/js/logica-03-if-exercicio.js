function exercicio01(){
    let nome = prompt("Digite seu nome");
    let idade = parseInt(prompt("Digite sua idade"));

    if ((idade >= 0) && (idade < 18)){
        alert(nome + " é menor de idade");  
    } else if (idade >= 18){
        alert (nome + " é maior de idade");
    } else {
        alert(nome + " não existe");
    }
    
}

function exercicio02(){
    let numero = parseInt(prompt("Digite um número"))

    if (numero < 10) {
        alert(numero + " é menor que 10")
    } else {
        alert(numero + "é maior que 10")
    }
}

function exercicio03(){
    let numero = parseFloat(prompt("Digite zero"))

    if (numero === 0){
        alert("Boa campeão")
    } else {
        alert(numero + " não é zero")
    }
}

function exercicio04(){
    let numero = parseFloat(prompt("Descubra o número"))

    if (numero === 8001) {
        alert("Como você descobriu")
    } else {
        alert(numero + " não é a senha")
    }
}

function exercicio05(){
    let numero1 = parseInt(prompt("Digite um número"))
    let numero2 = parseInt(prompt("Digite outro número"))

    if ((numero1+numero2) > 0){
        alert((numero1 + numero2) + " é positivo")
    } else {
        alert((numero1+numero2) + " é negativo")
    }
}

function exercicio06(){
    let nm1 = parseFloat(prompt("Digite o preço")) 
    let nm2 = parseFloat(prompt("Digite o preço")) 
    let nm3 = parseFloat(prompt("Digite o preço")) 

    if ((nm1+nm2+nm3) <= 100){
        alert("Você pode fazer essa compra")
    } else {
        alert("Você não pode fazer essa compra")
    }
}

function exercicio07(){
    let idade = parseInt(prompt("Digite sua idade"))

    if (idade < 16) {
        alert("Não pode votar")
    } else if (idade < 18){
        alert("Voto opcional")
    } else {
        alert("Voto obrigatório")
    }
}

function exercicio08(){
    let numero = parseFloat(prompt("Digite um número"))

    if (numero < 0){
        alert("Seu número é negativo")
    } else if (numero === 0){
        alert("Seu número é nulo")
    } else {
        alert("Seu número é positivo")
    }
}

function exercicio09(){
    let numero1 = parseFloat(prompt("Digite o primeiro número"))
    let numero2 = parseFloat(prompt("Digite o segundo número"))

    if (numero1 > numero2){
        alert(numero1 + " é o maior número");
    } else if (numero1 < numero2){
        alert(numero2 + " é o maior número")
    } else {
        alert("Os números são iguais")
    }
}

function exercicio10(){
    let numero = parseFloat(prompt("Digite um número"))

    if ((numero >= 10) && (numero <= 20)) {
        alert(numero + " está entre 10 e 20")
    } else {
        alert (numero + " não está entre 10 e 20")
    }
}

function exercicio11(){
    let nm1 = parseFloat(prompt("Digite um número"))
    let nm2 = parseFloat(prompt("Digite um número"))
    let nm3 = parseFloat(prompt("Digite um número"))

    if ((nm1 > 0) && (nm2 > 0) && (nm3 > 0)) {
        alert("Todos os números são positivos")
    } else {
        alert("Um ou mais números são negativos")
    }
}

function exercicio12(){
    let usuario = prompt("Digite seu perfil")
    let senha = prompt("Digite sua senha")

    if ((usuario === "admin") && (senha === "1234")){
        alert("Login correto")
    } else {
        alert("Login incorreto")
    }
}

function exercicio13(){
    let numero = parseInt(prompt("Digite um número"))

    if (numero % 2 === 0){
        alert("Seu número é par")
    } else {
        alert("Seu número é impar")
    }
}

function exercicio14(){
    let salario = parseFloat(prompt("Digite seu salário familiar"))

        if (salario <= 2000){
        alert("Baixo salário familiar")
        } else if (salario <= 5000){
            alert("Médio salário familiar")
        } else {
            alert("Alto salário familiar")
        }
}

function exercicio15(){
    let temperatura = parseFloat(prompt("Digite a temperatur atual"))

    if (temperatura <= 15) {
        alert("Está frio")
    } else if (temperatura <= 25){
        alert("Está agradável")
    } else {
        alert("Está quente")
    }
}

function exercicio16(){
    let nm1 = parseInt(prompt("Digite um número"))
    let nm2 = parseInt(prompt("Digite um número"))

    if ((nm1 % nm2) === 0) {
        alert(nm1 + " e " + nm2 + " são múltiplos")
    } else {
        alert(nm1 + " e " + nm2 + " não são múltiplos")
    }
}

function exercicio17(){
    let nota1 = parseFloat(prompt("Digite a primeira nota"))
    let nota2 = parseFloat(prompt("Digite a segunda nota"))
    let nota3 = parseFloat(prompt("Digite a terceira nota"))

    let somaTotal = ((nota1 + nota2 + nota3) / 3)

    if (somaTotal < 5) {
        alert("Reprovado " + "(" + somaTotal + ")")
    } else if (somaTotal < 7) {
        alert ("Recuperação " + "(" + somaTotal + ")")
    } else {
        alert("Aprovado " + "(" + somaTotal + ")")
    }
}

function exercicio18(){
    let idade = parseInt(prompt("Digite sua idade"))
    let renda = parseInt(prompt("Digite sua renda"))

    if ((idade >= 18) && (renda >=2000)){
        alert("Aprovado para crédito")
    } else {
        alert("Não aprovado para crédito")
    }   
}

function exercicio19(){
    let hora = parseFloat(prompt("Digite o horário"))

    if ((hora < 0) || (hora <= 11)){
        alert("Bom dia")
    } else if (hora < 18)   {
        alert ("Boa tarde")
    } else if (hora < 24){
        alert("Boa noite")
    } else {
        alert ("Hora Inválida")
    }
}

function exercicio20(){
    let nm1 = parseFloat(prompt("Digite o primeiro número"))
    let operacao = prompt("Escolha a operação:" + "\nSoma: " + "+" + "\nSubtração: " + "-" + "\nMultiplicação: " + "*" + "\nDivisão: " + "/" + "\nNúmero anterior: " + nm1)
    let nm2 = parseFloat (prompt("Digite o segundo número"))
 
    
    if (operacao === "+") {
        alert(nm1 + " + " + nm2 + " = " + (nm1 + nm2))
    } else if (operacao === "-") {
        alert(nm1 + " - " + nm2 + " = " + (nm1 - nm2))
    } else if (operacao === "*") {
        alert(nm1 + " * " + nm2 + " = " + (nm1 * nm2))
    } else if (operacao === "/"){
        alert(nm1 + " / " + nm2 + " = " + (nm1 / nm2))
    }
}

function exercicio21(){
    let nm1 = parseFloat(prompt("Digite um número"))
    let nm2 = parseFloat(prompt("Digite um número"))
    let nm3 = parseFloat(prompt("Digite um número"))

    if ((nm1 < nm2) && (nm1 < nm3) && (nm2 < nm3)){
        alert("A ordem numérica é: " + nm1 + " " + nm2 + " " + nm3)

    } else if ((nm1 < nm2) && (nm1 < nm3) && (nm3 < nm2)){
        alert("A ordem numérica é: " + nm1 + " " + nm3 + " " + nm2)

    } else if ((nm2 < nm1) && (nm2 < nm3) && (nm1 < nm3)){
        alert("A ordem numérica é: " + nm2 + " " + nm1 + " " + nm3)

    } else if ((nm2 < nm1) && (nm2 < nm3) && (nm3 < nm1)){
        alert("A ordem numérica é: " + nm2 + " " + nm3 + " " + nm1)

    } else if ((nm3 < nm2) && (nm3 < nm1) && (nm2 < nm1)){
        alert("A ordem numérica é: " + nm3 + " " + nm2 + " " + nm1)

    } else if ((nm3 < nm2) && (nm3 < nm1) && (nm1 < nm2)){
        alert("A ordem numérica é: " + nm3 + " " + nm1 + " " + nm2)


    } else if ((nm1 = nm2) && (nm1 < nm3)){
        alert("A ordem numérica é: " + nm1 + " " + nm2 + " " + nm3)

    } else if ((nm1 = nm2) && (nm3 < nm1)){
        alert("A ordem numérica é: " + nm3 + " " + nm2 + " " + nm1)

    } else if ((nm3 = nm2) && (nm3 < nm1)){
        alert("A ordem numérica é: " + nm3 + " " + nm2 + " " + nm1)

    } else if ((nm3 = nm2) && (nm1 < nm3)){
        alert("A ordem numérica é: " + nm1 + " " + nm2 + " " + nm3)

    } else if ((nm3 = nm1) && (nm3 < nm2)){
        alert("A ordem numérica é: " + nm3 + " " + nm1 + " " + nm2)

    } else if ((nm3 = nm1) && (nm2 < nm3)){
        alert("A ordem numérica é: " + nm3 + " " + nm1 + " " + nm2)
    }
}

function exercicio22(){
    let nm1 = parseFloat(prompt("Digite o primeiro número"))
    let nm2 = parseFloat(prompt("Digite o segundo número"))
    let nm3 = parseFloat(prompt("Digite o terceiro número"))

    if ((nm1 > nm2) && ( nm1 > nm3)){
        alert("O maior número é: " + nm1)
    } else if ((nm2 > nm3) && (nm2 > nm1)){
        alert("O maior número é: " + nm2)
    } else if ((nm3 > nm2) && (nm3 > nm1)){
        alert("O maior número é: " + nm3)
    }
}

function exercicio23(){
    let nm1 = parseFloat(prompt("Digite o primeiro número"))
    let nm2 = parseFloat(prompt("Digite o segundo número"))
    let nm3 = parseFloat(prompt("Digite o terceiro número"))

    if ((nm1 < nm2) && (nm1 < nm3)){
        alert("O menor número é: " + nm1)
    } else if ((nm2 < nm1) && (nm2 < nm3)){
        alert("O menor número é: " + nm2)
    } else {
        alert("O menor número é: " + nm3)
    }
}

function exercicio24(){
    let nm1 = parseFloat(prompt("Digite o primeiro número"))
    let nm2 = parseFloat(prompt("Digite o segundo número"))
    let nm3 = parseFloat(prompt("Digite o terceiro número"))

    if((nm1 < nm2) && (nm1 < nm3) && (nm2 < nm3)){
        alert("Os números estão em ordem crescente")
    }else if((nm3 < nm2) && (nm2 < nm1) && (nm3 < nm1)){
        alert("Os números estão em ordem decrescente")
    } else {
        alert("Os números não possuem uma ordem")
    }
}

function exercicio25(){
    let idade = parseInt(prompt("Digite sua idade"))

    if (idade < 12) { 
        alert("Criança")
    } else if (idade < 18) { 
        alert("Adolescente")
    } else if (idade < 40) {
        alert("Adulto")
    } else if (idade < 60) {
        alert("Meia idade")
    } else {
        alert("Idoso")
    }
}

function exercicio26(){
    let valor = parseFloat(prompt("Valor do pagamento"))
    let formaPagamento = prompt("Método de pagamento:" + "\nCartão de Débito: -5%" + "\nPIX: -10%" + "\nCartão de Crédito: Até 8 vezes sem juros")

    if (formaPagamento === "PIX"){
        alert("Valor do pagamento: R$ " + valor * 0.9)
    } else if (formaPagamento === "cartão de débito") {
        alert("Valor do pagamento: R$ " + valor * 0.95)
    } else if (formaPagamento === "cartão de crédito"){
        parcelas = parseInt(prompt("Parcelas:"))
    }

    if (parcelas <= 8){
        alert("Valor do pagamento: R$ " + (valor / parcelas).toFixed(2) + " x" + parcelas)
    } else if (parcelas > 8){
        alert("Valor do pagamento: R$ " + (valor / parcelas).toFixed(2) / 0.85 + " x" + parcelas)
    }

    
}

function exercicio27(){
    let nm1 = parseInt(prompt("Digite o primeiro número"))
    let nm2 = parseInt(prompt("Digite o segundo número"))

    if ((nm1 < 0) && (nm2 < 0)) {
        alert("Os dois números são negativos")
    } else if ((nm1 < 0) && (nm2 > 0)){
        alert("Um dos números são negativos")
    } else if ((nm2 < 0) && (nm1 > 0)){
        alert("Um dos números são negativos")
    } else {
        alert("Os dois números são positivos")
    }
}

function exercicio28(){
    let nota1 = parseFloat(prompt("Digite a primeira nota"))
    let nota2 = parseFloat(prompt("Digite a segunda nota"))
    let nota3 = parseFloat(prompt("Digite a terceira nota"))

    let somaTotal = ((nota1 + nota2 + nota3) / 3)
    

    if (somaTotal < 7) {
       alert("Reprovado " + "\nNota final: " + somaTotal.toFixed(2))
    } else {
        frequencia = parseInt(prompt("Digite a quantidade de faltas"))
    }
    
    let freqFinal = (somaTotal - (frequencia * 0.1))

    if (freqFinal < 7) {
        alert("Reprovado" + "\nNota final: " + freqFinal.toFixed(2))
    } else {
        alert("Aprovado" + "\nNota final: " + freqFinal.toFixed(2))
    }
}

function exercicio29(){
    let numero = parseInt(prompt("Digite um número"))

    if (((numero % 2) === 0) && (numero & 3) === 0){
        alert("Seu número é divisível por 2 e por 3")
    } else if ((numero % 2)=== 0) {
        alert("Seu número é divisível por 2")
    } else if ((numero % 3)=== 0) {
        alert("Seu número é divisível por 3")
    } else {
        alert("Seu número não é divisível")
    }
}

function exercicio30(){
    let ano = parseInt(prompt("Digite um ano"))

    if (((ano % 4 )===0) && ((ano % 100)!==0)) {
        alert("Ano bissexto")
    } else if ((ano % 400)===0){
        alert("Ano bissexto")
    } else {
        alert("Ano não bissexto")
    }
}
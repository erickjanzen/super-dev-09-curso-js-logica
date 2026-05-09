function calcularNumeros(){
    let numero1 = parseInt(prompt("Digite o número 1"));
    let numero2 = parseInt(prompt("Digite o número 2"));

    //somar(10, 20);
    somar(numero1, numero2);
}

function somar(n1, n2){
    let soma = n1 + n2;
    alert("Soma: " + soma);
}
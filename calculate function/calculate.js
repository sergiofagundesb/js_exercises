function calculate(number1,operator,number2) {
    switch(operator) {
        case '+':
            return number1+number2;
        case '-':
            return number1-number2;
        case '*':
            return number1*number2;
        case '/':
            if(number2 == 0)
                return null;
        default: 
            return null;
    }
}
var valorUm = Number(window.prompt("Digite o primeiro valor"));
var operador = window.prompt("Digite o sinal da operação.\n + para soma\n- para subtração\n* para produto\n / para divisão.");
var valorDois = Number(window.prompt("Digite o valor dois"));
alert("O valor é: "+calculate(valorUm,operador, valorDois));


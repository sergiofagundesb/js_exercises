
var vezes = document.getElementById('numerodevezes').value;
function ChecaNumeroNoVetor(numero,array)
function geraBilhete(qtd)
{
    document.getElementById('resultadofinal').innerText = " ";
    var resultado = [];
    for(var i = 0; i < qtd; i++) // faz o sorteio de "i" bilhetes.
    {
        var bilhete = [];
        for(k = 1; k<= 60; k++)
        {
            bilhete.push(k); // coloca números de 1 a 60 para serem sorteados.
        }
        console.log("ultimo numero "+bilhete[59]); // verifica se todos os números foram colocados corretamente.
        for(var j = 0; j < 6; j++) // faz a adição de 6 elementos ao vetor "resultado" através de um laço de repetição
        {
            var sorteado = Math.round(Math.random(bilhete)*60); // faz o sorteio de um número com limite até 60.
            resultado.push(sorteado);
            console.log(sorteado+" foi o "+(j+1)+" º número sorteado");
            bilhete.splice(sorteado-1, 1);
            console.log(bilhete);
            if(j == 5)
            {
                console.log("Bilhete número "+(i+1));
                console.log(resultado);
                document.getElementById('resultadofinal').innerText += "Resultado do bilhete "+(i+1)+": "+resultado+"\n";
                resultado.splice(0,6);
            }
        }
    }
}
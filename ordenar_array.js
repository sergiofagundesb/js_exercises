var init = parseInt(window.prompt("Digite quantos números quer por"));
analisaNumero(init);
function analisaNumero(number)
{
    var armazena = Array(init);
    for(var a = 0; a< number; a++)
    {
        armazena[a] = parseInt(window.prompt("Digite o "+(a+1)+"° número"));
        console.log(armazena[a]);
    }
    var pass;
    for(var i = 0; i< armazena.length; i++)
    {
        for(var j = 0; j < armazena.length; j++)
        {
            console.log("Comparando armazena["+i+"]"+" com armazena["+j+"].");
            if(armazena[i] < armazena[j])
            {
                console.log("armazena["+i+"]"+" é menor que armazena["+j+"], permutou.");
                pass = armazena[i];
                armazena[i] = armazena[j];
                armazena[j] = pass;
            }
        }
    }
    for(var k = 0; k < armazena.length; k++)
    {
        console.log("vetor["+k+"]"+"="+armazena[k]); // debug
    }
    console.log("O produto dos dois maiores é");
    if(armazena[armazena.length-1] != armazena[armazena.length-2])
    {
        console.log(armazena[armazena.length-1]*armazena[armazena.length-2]);
    }
    else
    {
        console.log("Os maiores valores da array são iguais. Por regra do exercício, o valor de saída é"+0);
    }
}

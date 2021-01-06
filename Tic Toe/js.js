var vezDoJogador = false;
var clicado = [false,false,false,false,false,false,false,false,false];
var resultadoFinal = [0,0,0,0,0,0,0,0,0]; // 1=x, 2=o
var venceu = false;
var quadradosRestantes = 9;
function clicouNoQuadrado(id)
{
    pegaQuadrado(id);
}
function pegaQuadrado(id)
{
    var resultado = document.getElementById(id);
    if(clicado[id] == false)
    {
        if(venceu == false && quadradosRestantes != 0)
        {
            quadradosRestantes--;
            if(vezDoJogador == false)
            {
                resultado.innerText="X";
                resultadoFinal[id] = 1;
                vezDoJogador = true;
                clicado[id] = true;
            }
            else
            {
                resultado.innerText="O";
                resultadoFinal[id] = 2;
                vezDoJogador = false;
                clicado[id] = true;
            }
        }
        quemGanhou();
    }
    if(venceu == true)
    {
            var confirma = confirm("Jogo encerrado. Deseja iniciar um novo jogo?");
            if(confirma)
            {
                 return novoJogo();
            }
    }
}
function quemGanhou()
{
    if(quadradosRestantes == 0)
    {
        alert("DEU VELHA");
    }
    if(resultadoFinal[0] == resultadoFinal[1] && resultadoFinal[1] == resultadoFinal[2] != 0)
    {
        alert(`O jogador ${resultadoFinal[0]} venceu`);
        venceu = true;
    }
    else if(resultadoFinal[3] == resultadoFinal[4] && resultadoFinal[4] == resultadoFinal[5] && resultadoFinal[5] != 0)
    {
        alert(`O jogador ${resultadoFinal[3]} venceu`);
        venceu = true;
    }
    else if(resultadoFinal[6] == resultadoFinal[7] && resultadoFinal[7] == resultadoFinal[8] && resultadoFinal[8] != 0)
    {
        alert(`O jogador ${resultadoFinal[6]} venceu`);
        venceu = true;
    }
    else if(resultadoFinal[0] == resultadoFinal[3] && resultadoFinal[3] == resultadoFinal[6] && resultadoFinal[6] != 0)
    {
        alert(`O jogador ${resultadoFinal[0]} venceu`);
        venceu = true;
    }
    else if(resultadoFinal[1] == resultadoFinal[4] && resultadoFinal[4] == resultadoFinal[7] && resultadoFinal[7] != 0)
    {
        alert(`O jogador ${resultadoFinal[1]} venceu`);
        venceu = true;
    }
    else if(resultadoFinal[2] == resultadoFinal[5] && resultadoFinal[5] == resultadoFinal[8] && resultadoFinal[8] != 0)
    {
        alert(`O jogador ${resultadoFinal[2]} venceu`);
        venceu = true;
    }
    else if(resultadoFinal[0] == resultadoFinal[4] && resultadoFinal[4] == resultadoFinal[8] && resultadoFinal[8] != 0)
    {
        alert(`O jogador ${resultadoFinal[0]} venceu`);
        venceu = true;
    }
    else if(resultadoFinal[2] == resultadoFinal[4] && resultadoFinal[4] == resultadoFinal[6] && resultadoFinal[6] != 0)
    {
        alert(`O jogador ${resultadoFinal[2]} venceu`);
        venceu = true;
    }
}
function novoJogo()
{
    vezDoJogador = false;
    clicado = [false,false,false,false,false,false,false,false,false];
    resultadoFinal = [0,0,0,0,0,0,0,0,0]; 
    venceu = false;
    quadradosRestantes = 9;
    for(var i = 0; i < 9; i ++)
    {
        document.getElementById(i).innerText="";
    }
}
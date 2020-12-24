var alunosMatriculados = [ "a", "b", "c", "d", "e" ];
// Presença diária
var presencaSegunda = [ "b", "d", "e" ]; // -> 3 elementos ... 3/5
var presencaTerca = [ "a", "b", "c" ]; // ->  3 elementos ... 3/5
var presencaQuarta = ["a", "b", "e" ];
var presencaQuinta = [ "a", "b", "c", "d" ];
var presencaSexta = [ "a", "b", "c", "d", "e" ];
var presencaSemanal = [presencaSegunda,presencaTerca,presencaQuarta,presencaQuinta,presencaSexta];
console.log(presencaSemanal);
var soma =[];
var conta = 0;


for(var i = 0; i< alunosMatriculados.length;i++)
{
    soma.push(0);
}
verificaAlunoNaLista(alunosMatriculados,presencaSemanal);
function verificaAlunoNaLista(elemento,lista)
{
    for(var i=0; i < elemento.length; i++) //LOOP PASSANDO PRA PEGAR TODOS OS ALUNOS DA LISTA...
    {
        console.log("Testando "+elemento[i]);
        for(var j = 0; j < lista.length; j++)
        {
            for(var z = 0; z< 5; z++)
            {
                console.log("Checando se elemento["+i+"]=lista["+z+"]["+j+"]");
                //    console.log("soma["+i+"]="+soma[i]);
                if(elemento[i] == lista[z][j])
                {
                    soma[i] += 1;
                }
            }
            // detectar aqui se encontrou o elemento na lista
            // caso tenha encontrado o elemento na lista, adicionar em uma variável parametrizada de soma.
        }
    }
    calculaPresencaSemanal();
}
function calculaPresencaSemanal()
{
    for(var k = 0; k < alunosMatriculados.length; k++)
    {
        conta = soma[k]*100/5;
        console.log("Elemento "+alunosMatriculados[k]+"Presença : "+conta+"%");
    }
}
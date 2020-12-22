   var alunosMatriculados = [ "a", "b", "c", "d", "e" ];
    // Presença diária
    var presencaSegunda = [ "b", "d", "e" ]; // -> 3 elementos ... 3/5
    var presencaTerca = [ "a", "b", "c" ]; // ->  3 elementos ... 3/5
    var presencaQuarta = ["a", "b", "e" ];
    var presencaQuinta = [ "a", "b", "c", "d" ];
    var presencaSexta = [ "a", "b", "c", "d", "e" ];
    var presencaSemanal = [];
    var soma =[];
    var conta = 0;
    
    for(var index = 0; index < alunosMatriculados.length; index++)
    {
        soma.push(0);
    }
    adicionaLista();
    console.log(calculaPresencaSemanal(presencaSemanal));
    function adicionaLista()
    {
        presencaSemanal.push(presencaSegunda);
        presencaSemanal.push(presencaTerca);
        presencaSemanal.push(presencaQuarta);
        presencaSemanal.push(presencaQuinta);
        presencaSemanal.push(presencaSexta);
    }
    function calculaPresencaSemanal(lista)
    {
        for(i = 0; i < lista.length; i++)
        {
            //console.log("executando loop lista.length");
            for(var j = 0; j < alunosMatriculados.length; j++)
            {
                //console.log("executando loop alunosMatriculadas");
                if(alunosMatriculados[j] == lista[i][j])
                {
                    //console.log("Conferindo se "+alunosMatriculados[j]+" está na lista...");
                    soma[j] += 1;
                }
            }
        }
        for(var total = 0; total < alunosMatriculados.length; total++)
        {
            conta = 100*soma[total]/5;
            console.log(`Presença do aluno ${alunosMatriculados[total]}: ${conta}%`);
        }
    }
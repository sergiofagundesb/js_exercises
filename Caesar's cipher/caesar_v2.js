function cifraDeCesar(deslocamento, mensagem)
{
    var mensagemAlterada = "";
    for(var i = 0; i < mensagem.length; i++ )
    {
        if(mensagem.charCodeAt(i) >= 65 && mensagem.charCodeAt(i) <= 90)
        { 
            if(mensagem.charCodeAt(i)+deslocamento > 90)
            {
                mensagemAlterada += String.fromCharCode(mensagem.charCodeAt(i)+deslocamento-90+64);
            }
            else
            {
                mensagemAlterada += String.fromCharCode(mensagem.charCodeAt(i)+deslocamento);
            }
        }
        else if(mensagem.charCodeAt(i) >=97 && mensagem.charCodeAt(i) <= 122)
        {
            if(mensagem.charCodeAt(i)+deslocamento > 122)
            {
                mensagemAlterada += String.fromCharCode(mensagem.charCodeAt(i)+deslocamento-122+96);
            }
            else
            {
                mensagemAlterada += String.fromCharCode(mensagem.charCodeAt(i)+deslocamento);
            }
        }
        else 
        {
            mensagemAlterada += String.fromCharCode(mensagem.charCodeAt(i));
        }
    }
    console.log("Mensagem alterada: "+mensagemAlterada);
    return mensagemAlterada;
}
var passMsg = "";
var passDesloc = parseInt(window.prompt("Digite quantos algarismos de deslocamento terá"))%26;
passMsg =    window.prompt("Digite o valor que deseja criptografar");
cifraDeCesar(passDesloc,passMsg);
/*
Condicional: else e else if

Caso a instrução de if seja negativa, podemos adicionar else;
Que será a outra condicional a ser executada;
Podemos então criar uma bifurcação no código;
Já o else if tem a possibilidade de fazer outra verificação e adicionar mais um bloco de código;
Pode ser adicionados quantos 'else if'forem necessários;
O else é opcional, pode ser utilizado apenas if e else if;
Sempre se começa com if;

*/

console.log('Condicional: else e else if')

var nome = 'Nelson'

if(nome == 'Junior'){
    //alert('O nome dele é Junior!');
} else if(nome == 'Nelson'){
    //alert('O nome dele é Nelson!');
} else{
    //alert('Ele possui outro nome!');
}


var idade = 19;

if(idade > 20){
    console.log('Ele pode entrar na festa!')
} else if(idade >= 18){
    console.log('Ele só pode entrar com autorização')
}

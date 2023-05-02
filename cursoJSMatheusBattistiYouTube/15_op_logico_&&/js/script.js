/*
Operadores Lógicos:

Nas linguagens doe programação existem os operadores lógicos;
Estes operadores realizam comparações para que seja retornado um true ou false;
Decidindo então o fluxo da aplicação;
Utilizamos prncipalmente nbas unstruçõesde condição e repetição, em conjunto dos operadores de comparação;


Operador lógico &&

O operador lógico && é conhecido também como AND;
Ele vai retornar true apenas se as duas expressões retornarem true;
Qualquer outro resultado o operador lógico and retornará false;
*/

console.log('Operadores Lógicos: AND ou &&')

var idade = 27;
var nome = 'Nelson';

if(nome == 'Nelson' && idade == 27){ // O operador && verifica se da match(true) em ambos os lados.
    console.log('O Nelson pode entrar na aula!');
} else {
    console.log('Este não é o Nelson!')
}


if(1 == 1 && 3 > 2 && true){ // Pode se encadear quantas expressões necessária.
    console.log('Passou')
}

//Isolar operações
if((1 == 1 && 3 > 2) && true){ // Pode se isolar com parenteses() a operação ser resolvida primeiro.
    console.log('Passou')
}



var nome = 'Andressa';
var idade = '25';

if(nome == 'Andressa' && idade == '25'){
    console.log('Verificando...');
    //alert('Andressa com 25 anos!');
}

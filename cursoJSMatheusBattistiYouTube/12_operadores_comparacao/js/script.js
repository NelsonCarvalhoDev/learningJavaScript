/*
Operadores de comparação:

São comumente utilizados para verificação nas estruturas de condição;
Temos os seguintes operadores: ==, =, >, <, >=, >=, <=;
A partir de uma espressão de comparação podemnos obter um true ou false;
*/

console.log('Operadores de comparação: ')

var idade = 17;

if(idade >= 18){
    console.log('Pode tirar a CNH!')
};

if( idade <= 17){
    console.log('Não atingiu idade miníma, não pode fazer a CNH!')
}

var nome = 'Junior';

if( nome == 'Nelson'){ // Esse operador representa 'Igualdade' tanto da direita como da esquerda.
    console.log('O seu nome é Nelson');
}

if( nome != 'Nelson'){ // Esse operador significa diferente '!='.
    console.log('O nome não é Nelson');
}

if(20 > 100){ //False
    console.log('Passou');
}

if (10 < 20){ //True
    console.log('Passou 2');
}
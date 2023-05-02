/*
Comparação de tipo e valor:

Dois outros operadores de comparação existem no JavaScript: === e !== ;
A função é comparar valor e tipo de dado'
*/

console.log('Comparação de tipo e valor: === e !==');

var numero = '5';

if(numero === 5){ // == Verifica apenas o valor e === Verifica o valor e o tipo
    console.log('O numero é 5');
}

if(numero !== 5){ // !== Verifica se o valor e o tipo de dado é diferente.
    console.log('Não é o número 5 do tipo Number!');
}

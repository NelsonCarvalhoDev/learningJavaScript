/*
Estruturas de repetição: 

Estruturas servem para repetir quantas vezes necessário uma operação;
Por exemplo: repetir uma determinada lógica em cada elemento de um array;
As estruturas mais comuns são: while e for;
Evitar loops infinitos;

Estrutura while:

O while é a estrutura de repetição mais simples do JavaScript;
A ideia é que se repita algo até atingir tal condição;
While == Enquanto;



console.log('Estruturas de repetição: ')

var x = 0;

while(x < 5){
    console.log('Repetição: ' + x, 'com incremento.');

    //Incrementador para que saia do while e não fique no loop infinito:

    x += 1; //x++
    
}

console.log('==================================================================')

var arr = ['Nelson', 'Junior', 'A', 'B'];
var y = 0;

while(y <= 3){

    console.log(arr[y]);

    //Com o incremento ele vai passar por cada elemento do array.
    y += 1;

}

console.log('==================================================================')

var palavra = 'Nelson';
var i = 0;

while(i < 6){

    console.log(palavra[i]);

    // Vai passar por todos caracteres de uma palavra.

    i += 1;
}

console.log('==================================================================')
*/
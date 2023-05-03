/*
Estrutura for:

O for tem uma sintaxe mais complexa, mas é optado pela maioria dosprogramadores;
Apesar de parecer mais difícil, como a instrução fica toda em uma linha proporciona maior;


console.log('For: ')

for(var i = 0; i < 5+1; i++){ // Primeiro vai ser inserido a variável, depois a condição para sair do loop e depois o incremento do loop.
    console.log('Repetindo for: ' + i);
}

var arr = [1,2,3,4,5];

for(var j= 0; j < arr.length; j++){ //lenght significa comprimento. Então nesse caso sera passado 1° variável depois 2° condição com arr.length, 'length' diz quantos elementos tem no comprimento do array
    console.log(arr[j]);
}

console.log(arr.length) //Comprimento do Array
*/

for(/*Variável*/var x = 5; /*Condição*/ x < 100; /*Loop*/ x *= 3){
    console.log(x);
}

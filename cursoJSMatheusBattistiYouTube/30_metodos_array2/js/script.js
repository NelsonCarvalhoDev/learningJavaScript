/*
Métodos Arrays 2:
Podemos também resgatar um conjunto de elementos com os métodos, criar outro array a partir de um array;
Identificar o índice de um elemento específico e muito mais;
*/
console.log('Métodos Arrays 2: ')

// splice, adicionar item no elemento do array, no meio.
var arr = [1,2,3,4,5]
console.log(arr.splice())

arr.splice(2, 0, 999); //Parametro: Indice que deseja acessar / Deletar quantos elementos? / O que quer adicionar?
console.log(arr);

arr.splice(4, 1); //Removendo o 4.
console.log(arr);

arr.splice(2, 0, 'String'); //Adcionando String.
console.log(arr);

// indexOf
console.log(arr.indexOf(5));

// join
var arr2 = ['O', 'rato', 'roeu', 'a', 'roupa'];
console.log(arr2.join(', '));

// reverse inverter a ordem de uma array.
console.log(arr2.reverse());


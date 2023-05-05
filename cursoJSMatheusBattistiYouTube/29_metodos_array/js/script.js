/*
Métodos de Array:

Os arrays também possuem métodos;
Facilitando adicionar e remover elmentos, resgatar apenas uma parte do array...
*/
console.log('Métodos de Array: ')

// length, mostra o número de elementos no array.
var arr = [1, 2, 3, 4, 5];
console.log(arr.length);

// push, adiciona um elemento ao final do array.
arr.push(6);
arr.push('Também pode ser adicionado outro formato de iten');
console.log(arr);

// pop, exclui o ultimo item do array.
arr.pop();
console.log(arr);

// unshifht, permite adicionar itens no inicio do array.
arr.unshift(0);
arr.unshift('Adicionado no inicio');
console.log(arr);

// shift, remove itens do inicio do array.
arr.shift();
console.log(arr);

// Acessa o ultimo elemento do array através do length reduzindo um indice pois array começa no zero.
console.log(arr[arr.length - 1]);

//isArray, verifica se é um array, utilizado em códigos que precisam de uma validação maior.
console.log(Array.isArray(5)); //verificando um número.
console.log(Array.isArray(arr)); //verificando o array.

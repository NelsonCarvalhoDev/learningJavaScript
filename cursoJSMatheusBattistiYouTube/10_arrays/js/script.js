/*
Arrays:

Na verdade os arrays são considerados objetos em JavaScript, porém servem como listas;
Podemos ter itens de qualquer tipo de dado também;
Porém não por chave e valor, e sim por índice;'
Os arrays começam com o índice zero(0) EX: 0, 1, 2, 3
*/

console.log('Arrays: ')

var arr = [7, 'Nelson', true, {numero: 7, numero: 10}]; //obs1 Quando for colchetes[] significa que estamos trabahando com arrays e quando for chaves{} significa que é objetos.
// obs² arrays aceitam qualquer tipos de dados.

console.log(arr);


// É mais comum ver arrays de uma só tipagem:
var arr2 = [1, 2, 3, 4, 5];
console.log(arr2);

//Acessando elementos do Array:
console.log(arr[1]);
console.log(arr2[0]);

//Inserir elemento no Array:
arr[4] = 10;
console.log(arr);

//Sobrescrever(alterar, modificar) elementos do Array:
arr[0] = 'Nelson';
console.log(arr);

//Tipo de dados:
console.log(typeof arr); //No JavaScript ele é considerado objeto más tem uma sintaxe diferente.
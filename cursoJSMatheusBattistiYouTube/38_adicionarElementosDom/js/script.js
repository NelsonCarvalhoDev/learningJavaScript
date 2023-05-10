/*
Adicionando elemento: 

Podemos inserir um elemento dentro de outro, por exemplo um paragráfo em uma div;
Isso é considerado como 'acrescentar um filho' em JS;
*/

console.log('Adicionando elemento: ')

// criar elemento
var el = document.createElement('div');
el.classList = 'div-criada';
console.log(el);

// acessar container para inserir div pelo append child

var container = document.querySelector('#container')
container.appendChild(el);

// inserBefore - inserir um elemento antes
var el2 = document.createElement('div');
el2.classList = 'div-before';

// selecionar div criada
var el3 = document.querySelector('#container .div-criada');
console.log(el3);

// deve ser passado dois paramnetros 1° o que vai ser inserido e 2° a referência.
container.insertBefore(el2, el3);

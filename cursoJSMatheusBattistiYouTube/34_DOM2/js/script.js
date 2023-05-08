/*
Document object model: querySelector e querySelectorAll;

Com a evolução da linguagem foram criados dois seletores que acabam com toda a complexidade desta ação;
querySelector e querySelectorAll;
Com estes podemos acessar os elementos baseados em regras de CSS;
id = você vai utilizar hastag #
classe = utiliza o ponto .
tag = apenas chama pelo nome
querySelector = obter 1 elemento
querySelectorAll = obter varios elementos

*/
console.log('Document object model: ')

var itensClasse = document.getElementsByClassName('item');
console.log(itensClasse);

// querySelectorAll/ id marca com # e classe com .
var itensQuery = document.querySelectorAll('#lista2 li');
console.log(itensQuery);

var itensQuery2 = document.querySelectorAll('#lista .item')
console.log(itensQuery2);

// querySelector = vai obter apenas 1 elemento
var lista = document.querySelector('#lista');
console.log(lista);

var primeiraLista = document.querySelector('ul');
console.log(primeiraLista);

var span = document.querySelector('#paragrafo span');
console.log(span);

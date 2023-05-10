/*
Trocando elementos DOM: 

Podemos trocar um elemento com o DOM;
Substituir uma tag por outr e de modo bem fácil
*/

console.log('Trocando elementos DOM: ')

//criar um elemento
var el = document.createElement('h3');
// atribuindo uma classe
el.classList = 'testando-classe';
// criando nó de texto\
var texto = document.createTextNode('Este é o texto do H3');
// inserindo no DOM
el.appendChild(texto);
// imprimindo
console.log(el);

// selecionar o elemento que sera trocado
var tittle = document.querySelector('#tittle');
// imprimindo
console.log(tittle);
// selecionar o pai por seletor. elemento tittle que é o body
//var body = document.querySelector('body');
// usando a propriedade parentNode que ira selecionar o elemento pai do tittle automaticamente.
var pai = tittle.parentNode;
// trocar os elementos
pai.replaceChild(el, tittle);
//
console.log(pai);

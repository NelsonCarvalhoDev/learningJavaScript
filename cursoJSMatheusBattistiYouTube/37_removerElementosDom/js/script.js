/*
Remover elementos DOM

Remover elementos também é muito fácil com JavaScript;
Temos como remover o elemento diretamente e também um elemento filho;
*/
console.log('Remover elementos DOM: ');

// removendo elemento filho;
var container = document.querySelector('#container');

var p = document.querySelector('#container p');
container.removeChild(p);

// remover o elemento;
var subtitle = document.querySelector('.subtitle');
subtitle.remove();

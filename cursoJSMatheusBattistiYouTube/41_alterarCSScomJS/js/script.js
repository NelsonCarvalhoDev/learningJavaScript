/*
Alterando CSS com JS:
As regras de CSS ficam de forma inline;
Substituindo a maioria das outras regras criadas;
*/
console.log('Alterando CSS com JS: ')
// selecionando elemento
var title = document.querySelector('#title');
// adicionando estilo
title.style.color = 'red';
// background-color palavras comumente usadas com traço devem ser transformadas em uma palavra só sem traço ex: backgroundColor em formato camelCase pois o JS é case sensitive.
title.style.backgroundColor = 'yellow';

// selecionar elemento
var subtitle = document.querySelector('.subtitle');
// adicionar varios estilos de uma só vez.
subtitle.style.cssText = 'color: blue; background-color: pink; font-size: 50px';

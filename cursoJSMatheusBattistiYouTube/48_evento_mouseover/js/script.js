/*
Evento mouseover:
O mouseover é ativado quando o ponteiro domouse passa em cima do elemento que criamos o evento;
Temos também o evento mouseout que é quando o ponteiro sai do elemento;
*/

// mouseover
var title = document.querySelector('#title');
title.addEventListener('mouseover', function(){
    this.style.backgroundColor = 'orange';
});
// mouseout
title.addEventListener('mouseout', function(){
    this.style.backgroundColor = 'white';
});

// mostrando classe com over
var subtitle = document.querySelector('.subtitle');
subtitle.addEventListener('mouseover', function(){
    var legenda = document.querySelector('#legenda')
    legenda.classList.remove('hide');
});
// ocultando classe com out
subtitle.addEventListener('mouseout', function(){
    var legenda = document.querySelector('#legenda')
    legenda.classList.add('hide');
});

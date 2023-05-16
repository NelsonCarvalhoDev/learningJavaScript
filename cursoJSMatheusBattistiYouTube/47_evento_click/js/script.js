/*
Evento Click

O click é ativado quando o usuário clica em um elemento em que atrelamos o evento;
Após a ação podemos fazer as modificações e alterações no HTML/CSS que quisermos;
*/

var btn = document.querySelector('#btn');
console.log(btn);
btn.addEventListener('click', function(){
    console.log('Clicou');
    console.log(this);
    this.style.color = 'orange';
});

// click testando elementos.
var title = document.querySelector('#title');
title.addEventListener('click', function(){
    var subtitle = document.querySelector('.subtitle');
    subtitle.style.display = 'none';
    //console.log('Clicando no title!')
});

// double click

var subtitle = document.querySelector('.subtitle');
    subtitle.addEventListener('dblclick', function(){
        console.log('Click duplo através do dblclick com o addEventListener.');
});

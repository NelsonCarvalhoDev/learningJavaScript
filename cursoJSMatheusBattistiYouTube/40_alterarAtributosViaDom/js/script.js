/*
Alterar Atributos via JS e DOM:

Podemos alterar os atributos via JS e DOM;
Por exemplo: alterar o atributo alt de uma imagem;
Ou até um src de uma imagem;
Todos atributos podem ser alterados via JS!
*/
console.log('Alterar Atributos via JS e DOM: ')

// adicionar atributo
var tittle = document.querySelector('#tittle');
tittle.setAttribute('class', 'testando-atributo');
console.log(tittle);

var btn = document.querySelector('#btn');
btn.setAttribute('disabled', 'disabled');
var subtitle = document.querySelector('.subtitle');
subtitle.setAttribute('id', 'titulo-2');

// remover atributo

var lista = document.querySelector('#lista');
lista.removeAttribute('id');

// acendendo e apagando a lampada
var lampada = document.querySelector('#lampada');

lampada.addEventListener('click', ()=>{
    if(lampada.className == 'on'){
        lampada.setAttribute('src', './img/lampadaOff.png');
        lampada.className = 'off';
    } else {
        lampada.setAttribute('src', './img/lampadaOn.png');
        lampada.className = 'on';
    }
});

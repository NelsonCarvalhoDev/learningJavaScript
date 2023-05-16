/*
O que são eventos?

Por meio de JavaScript podemos mapear algumas ações dos usuários, que chamamos de eventos;
Como: movimento do mouse, click, mouse entrando ou saindo de um elemento, carregamento da página e etc;
E então criar comportamento interessante como: animação de menu abrindo e fechando;

Evento onload

O onload é ativado ao carregar a página;
Podemos depois desse evento realizar alguma ação no nosso projeto;
*/

window.onload  = function() {
    console.log('carregou o dom');

    var title2 = document.querySelector('#title');
    console.log(title2);
}

console.log('carregou o JS');

var title = document.querySelector('#title');
console.log(title);
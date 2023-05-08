/*
Alterando o conteúdo: DOM

Podemos alterar o texto de qualquer elemento de forma fácil com JavaScript;
Posteriormente poderemos atrelar esta ação com algum evento;

*/
console.log('');

// selecionar elemento

var tittle = document.querySelector('#tittle');
console.log(tittle);

// alterar texto com innerHTML e textContent(Mais utilizado, recomendado e performatico.)
tittle.innerHTML = 'Alterando o Tittle da pagina através do DOM.'

//textContent

var subtitle = document.querySelector('.subtitle');
console.log(subtitle);

subtitle.textContent = 'Alterando o sub titulo';

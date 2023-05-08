/*
Criar elementos com o DOM

Outra possibilidade do JS e o DOM é crar elementos;
O texto de um elemento é considerado um nó na árvore do DOM;
Ou seja, temos que criar o texto do elemento também;
*/

console.log('Criar elementos com o DOM: ');

//Criar um elemento
var novoParagrafo = document.createElement('p');

// Criar nó de texto
var texto = document.createTextNode('Criando um nó de texto dentro do paragrafo.')
// Inserindo nó de texto no paragrafo:
novoParagrafo.appendChild(texto);
console.log(novoParagrafo);
//Mapeando body
var body = document.querySelector('body');
console.log(body);
// appendChild para inserir elemento no body
body.appendChild(novoParagrafo);

//inserir em um container (div)

var container = document.getElementById('container');
console.log(container);

var el = document.createElement('span')
el.appendChild(document.createTextNode('Inserindo texto no span!'));
container.appendChild(el);

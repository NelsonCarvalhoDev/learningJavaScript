/*
Propriedades de document: 

O objeto document não tem somente métodos;
Podemos retirar várias informações importantes das suas propriedades também;
*/
console.log('Propriedades de document: ');

// propriedades document
console.log(document.body);

console.log(document.head);

console.log(document.links[0]);

console.log(document.links[1]);

// alterando o texto do links[0]
document.links[0].textContent = 'Twitter';

console.log(document.URL);

console.log(document.title);

// alterando o title da pagina
document.title = 'Aula 42';
console.log(document.title);

// alterando texto do HTML com JS
var titulo = document.querySelector('h1');
titulo.innerHTML = 'Este é o novo titulo da pagina!'
console.log(titulo);

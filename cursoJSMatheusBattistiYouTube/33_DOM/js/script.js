/*
Document object model: Intrudoção

Uma interface de programação para HTML
Por meio dele temos método para acessar a árvore de elementos;
O DOM fornece uma cópia do HTML;
Podemos manupular eventos pelo DOM para afetar o HTML;
document = Pai de todos, tudo pode ser acessado por ele.

Document object model:

Acessar o DOM caracteriza-se por identrificar um elemento do HTML através de métodos;
Depois podemos manupulá-los da forma que quisermos;
Acessar o DOM é semelhante as regras de CSS;
Podemos acessar por: tags, ids, classes;
*/
console.log('Document object model: ')

//Acessando elementos por tag:

var titulo = document.getElementsByTagName('h1')[0];
console.log(titulo);

var lis = document.getElementsByTagName('li');
console.log(lis[3]);

// Id :

var paragrafo = document.getElementById('paragrafo');
console.log(paragrafo);


// class

 var itensDaLista = document.getElementsByClassName('item');
 console.log(itensDaLista);
 
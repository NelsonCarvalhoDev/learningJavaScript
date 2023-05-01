/*
String:

String é o tipo de dado para textos;
As strings podem ser escritas com aspas simples e duplas. Porém siga um padrão.;
Um número entre aspas pode ser considerado uma string;
É possível também concatenar(juntar) strings com o +;
*/

console.log('String');


let nome = 'Nelson';
let sobreNome = 'Carvalho'
let nomeCompleto = nome + ' ' + sobreNome; //Concatenando


console.log(nome);
console.log(typeof nome);
console.log(nomeCompleto);
console.log(typeof '5.30000');

let frase = 'Frase';
console.log(frase);
console.log(typeof frase);

console.log( nome + ' ' + frase);

document.write('Hello World!'); // Função para escrever na tela, manipulando DOM.

document.write('Ele disse: "Ola"'); //Utilizando aspas simples e duplas.

console.log('Este número : ' + nome); // Concatenando.

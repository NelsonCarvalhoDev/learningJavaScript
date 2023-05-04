/*
Métodos de String:

*/

console.log('Métodos de String: ')

// length = propriedade comprimento ou quantidade caracteres que uma string possui;
var nome = 'Nelson';
console.log(nome.length);

// indexOf = Acessar através do indice;
console.log(nome[2])

var frase = 'O rato roeu a roupa do rei de Roma';

console.log(frase.indexOf('roeu')); //Vai imprimir o número do indice para manipular a palavra.

// slice = vai remover uma parte da frase;
var roeu = frase.slice(7, 11);
console.log(roeu);

// replace = substituir uma palavra na frase.
var novaFrase = frase.replace('roeu', 'subistituida');
console.log(novaFrase)

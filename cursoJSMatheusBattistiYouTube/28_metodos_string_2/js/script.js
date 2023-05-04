/*
Métodos de String 2:

Os métodos de string também auxiliam na sua modificação;
Podemos por exemplo deixar a fonte em caixa alta ou baixa com JS;
*/
console.log('Métodos de String 2');

var frase = 'Esta é a frase que vamos manipular';
var fraseUpper = frase.toUpperCase();

console.log(fraseUpper);
console.log(frase.toLowerCase());

// trim = remove espaços

var nome = '         Nelson    ';

//Criando a nova variável com o metodo
var nomeTrim = nome.trim()

console.log(nome);
console.log(nomeTrim);

// split = transforma em array;

console.log(frase.split(' '));

var tags = 'PhP, JAVASCRIPT, HTML, CSS'

console.log(tags.split(', '));

// lastIndexOf = Ultima palavra

var fraseDois = 'Ultima palavra desta frase que contem 48 palavra'

console.log(fraseDois.length);
console.log(fraseDois.indexOf('palavra'));
console.log(fraseDois.lastIndexOf('palavra'));
console.log(fraseDois[47])
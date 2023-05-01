/*
Tipos de dados

No JavaScript temos diversos tipos de dados, os mais utilizados são:
Number, String, Boolean, null e undefined, Object;
Podemos verificar o tipo do dado com o operador: typeof;

Number:
O Number é o tipo de dado para números;
Possui tês valores simbólicos: +Infinity, -Infinity e NaN;
Não existe um tipo definido para inteiros, todo número é um Number;
*/

// typeof
let numero = 7;

console.log(numero);
console.log(typeof numero);

//Float é considerado um Number
let float = 5.32;
console.log(float);
console.log(typeof float);

//Não é considerado Number por estar em String
let textoComNumero = '423';

console.log(textoComNumero);
console.log(typeof textoComNumero);


//Number
console.log(NaN);
console.log(typeof NaN);
console.log(+Infinity);
console.log(typeof +Infinity);
console.log(-Infinity);
console.log(typeof -Infinity);

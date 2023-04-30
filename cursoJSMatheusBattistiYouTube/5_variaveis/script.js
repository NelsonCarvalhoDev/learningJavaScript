/*
Variáveis de tipagem fraca pode ser alterada ao longo do código pode dar problemas ao alterar a sua tipagem ao longo do código.
*/

var teste = 1;

var nome = 'Outro';

console.log(teste);

teste = 'Nelson';

console.log(teste);

console.log(nome);

var meuPrimeiroNome = 'Nelson';

console.log(meuPrimeiroNome);

var meuSobreNome = 'Carvalho';

console.log(meuSobreNome);

let variavelLet = 'Variavel Let';

console.log(variavelLet);

const variavelConst = 'Variavel Const';

console.log(variavelConst);

var semValor; //Variável sem valor, que será adicionado um valor ao decorrer do código, ira aparecer como 'undefined'no console.

console.log(semValor);

semValor = 'Inserindo string na variável sem valor!';

console.log(semValor);

/*

Sintaxe das variáveis:

Simbolos permitidos:
var $nome = 'sifrão é permitido.';
var _nome = 'underline é permitido';
var nome5 = 'número nunca pode ser usado como 1 algarismo';
var meuPrimeiroNome = 'Aumenta a legibilidade do código em camelcase';

Metodo que não ira funcionar:
var @nome = 'teste';
var 5nome = 'teste';

console.log(@nome);

*/

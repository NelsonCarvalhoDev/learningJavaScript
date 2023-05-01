/*
Objetos:
'Itens dos objetos são chamados de propriedades'

Funcionam como array associativo de outras linguagens;
Podemos criar propriedades com chave e valor;
A ideia é guardar um consunto de valores para utilizar posteriormente;
*/
console.log('Objetos: ')

// Objeto:
var obj = {
    Nome: 'Nelson',
    Idade: '27',
    Profissão: 'Programdor',
    estaTrabalhando: true,
};
//typeof
console.log(obj);
console.log(typeof obj);

//Acessar uma propriedade do Objeto:
console.log(obj.Nome);
console.log(obj.Idade);
console.log(obj.Profissão)

//Concatenando.
console.log('O meu nome é: ' + obj.Nome); 


//Mudar o valor de uma propriedade:
obj.Nome = 'Carvalho';
console.log(obj.Nome);
console.log(obj);

//Criar propriedades no objeto:
obj.Graduação = true;
console.log(obj);

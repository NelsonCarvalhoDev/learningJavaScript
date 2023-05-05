/*
Como você pode perceber muitos tipos de dados tem métodos e propriedades;
Podemos criar também os nossos objetos com propriedades e métodos para auxiliar nos nossos programas;
*/

console.log('Objeto: ')
let pessoa = {
    nome: 'Nelson',
    idade: '27',
    falar: function() {
        //console.log(alert('Hello!'));
        console.log('Hello!');
    },
    soma: function(a, b) {
        return a + b;
    }
};
console.log(pessoa.nome);
pessoa.falar();

var soma = pessoa.soma(2, 2);
console.log(soma);

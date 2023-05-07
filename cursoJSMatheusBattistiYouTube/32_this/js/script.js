/*
A intrução this: 

Fora de escopos locais o this sempre se refere ao objeto global Windowl;
Em objetos o this vai se referir a instância e poder passar suas propriedades;
Escopo global = this;
*/
console.log('A intrução this: ');
console.log(this);

let pessoa = {
    nome: 'Nelson',
    idade: 27,
    falar: function() {
        //console.log(alert('Hello!'));
        console.log('Hello!');
    },
    dizerNome: function() {
        console.log('O meu nomer é: ' + this.nome);
    },
    // Alterar com this;
    aniversario: function(){
        this.idade += 1;
    },
    saudacao: function(){
        return 'Sr. ' + this.nome;
    }
};
pessoa.dizerNome();
console.log(pessoa.idade);
pessoa.aniversario();
console.log(pessoa.idade);
var sdc = pessoa.saudacao();
console.log('Olá ' + sdc);

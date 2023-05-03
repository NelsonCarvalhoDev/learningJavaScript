/*
Funções:

Funções são blocs de códigos reutilizáveis;
Ou seja, evitamos a repetição da lógica de um programa em diversas partes do código;
A função precisa ser invocada para ser executada, colocar o nome da função e colocar parenteses;
Algumas funções tem o return, que e o retorno da função para o usuário o retorno não é obrigatório;


console.log('Funções: ')

function primeiraFuncao(){
    console.log('Entrando no mundo das Funções!')
}
//Executando a função:
primeiraFuncao();


//Argumentos:
function dizerNome(nome){
    console.log('O nome é: ' + nome)
    console.log(`O nome é: ${nome}`)
}
//Nesse modo é obrigatório passar um parametro caso contrário resulta em undefined.
dizerNome();
dizerNome('Nelson');

//Argumentos Arrow Function:
idade = (idade) => {
    console.log('A idade é: ' + idade)
    console.log(`A idade é: ${idade}`)
}
idade();
idade('27');

//É possivel passar como variavel o parametro para uma função
var nomeDoBancoDeDados = 'Nelson'

dizerNome(nomeDoBancoDeDados);

//Return Arrow Function
soma = (a, b) => {
    return a + b;
};

soma = (a, b) => {
    var soma =  a + b;
    return soma;
};

//Criando uma variável para passar parametros
var somaUm = soma(2, 5);
// Imprimindo na tela o resultado através da váriavel que esta chamando a função.
console.log(somaUm);

var somaDois = soma(5, 5);
console.log(somaDois);

// De forma prática também é possível apenas imprimir o resultado:
console.log(soma(4, 5));

*/

//Arrow function de sintaxe curta:

soma = (a, b) => a + b;

//Imprimindo resultado da função na tela dop HTML:

document.getElementById("test").innerHTML = soma(2, 6);

//console.log(soma(2, 5));



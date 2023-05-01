/*
Operadores condicionais

São instruções que podem determinar o fluxo de uma aplicação;
Amplamentes utilizados, deixam os softwares dinâmicos;
Exemplos são: if, else if, else;

Condicional: if

Executa um bloco de código se a unstrução for verdadeira;
Se for falsa, segue o código normalmente;
Lembrando que: true e false são do tipo Boolean;
*/
console.log('Operadores Condicionais: ')

console.log('Antes do if')

if(false){
    console.log('Testando o if') //Expressão em false o algoritmo ignora a instrução, executa o antes e o depois.
}



    var idade = 15;
    var idadeMinima = 18;

    if(idade >= idadeMinima) {
        console.log('Pode fazer a CNH!')
    } else if(idade >= 15){
        console.log('Precisa esperar 3 anos!')
    } else {
        console.log('Não pode fazer CNH!')
    }


console.log('Depois do if');

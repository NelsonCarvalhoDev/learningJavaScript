/*
Operador lógico or ou ||: 

O operador lógico || é conhecido também como OR;
Ele retorna true caso uma das operações retorne verdadeiro;
O OR retorna false apenas se as duas expressões são falsas;
Ele só ira retornar falso se as duas partes forem false;

*/

console.log('Operador lógico or ou ||: ')

var nome = 'Junior'; //Como pode reparar foi passado apenas uma informação true e o operador OR retorna como true.
var idade = '13'//Apenas ira retornar false se ambas as partes forém false.

if(nome == 'Nelson' || idade > 14){
    console.log('Pode entrar na aula!');
} else {
    console.log('Não pode entrar!');
}

/*Misturando os operadores: 
Está expressão vai ser avaliada da esquerda para direita.


if(nome == 'Junior' && 15 > 20 || 10 == 10){
    console.log('true');
} else {
    console.log('false');
}

*/

//Invertenendo a expressão

if((nome == 'Junior' || 10 > 20) && 10 == 10){
    console.log('true');
} else {
    console.log('false');
}

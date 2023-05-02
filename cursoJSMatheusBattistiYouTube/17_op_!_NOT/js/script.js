/*
Operador lógico ! ou Negação(NOT): 

O operador lógico ! é conhecido também como NOT;
Este operador muda o valor que a espressão retornou;
Se recebeu true vira false, se recebeu false vira true;
Ele verifica as expressão e retorna invertendo;
*/

console.log('Operador lógico ! ou Negação: ')

if(!true){
    console.log('true')
} else {
    console.log('false')
}

// True que vira false
var nome = 'Nelson';

if(!(nome == 'Nelson')){
    console.log('true')
}else {
    console.log('false')
}

// False que vira true
var nome = 'Junior';

if(!(nome == 'Nelson')){
    console.log('true')
}else {
    console.log('false')
}

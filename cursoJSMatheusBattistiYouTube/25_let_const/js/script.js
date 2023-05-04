/*
Utilizando let e const podemos criar escopo até em instruções como if;
Deixando o código mais confiável;
Separando cada bloco em um escopo;
*/

console.log('let e const + escopo: ')

//Atribuindo valor 5 a variável 'x'.
let x = 5;
//Alterando o valor da variável 'x' para 12.
x = 12;

//Constante. Ao atribuir um valor a variável não podera ser alterado ao longo do código.
const y = 110;

// y = 12; //Ao verificar o console sera representado o erro.



console.log(`let x (fora do if) ${x}`)
console.log(`const y (fora do if) ${y}`)

//Diferença de var para let é que pode criar a mesma variável sem alterar o valor da variável com o mesmo nome, permitindo a criação de variáveis em blocos.
if(true){
    let x = 20;
    console.log(`let x (dentro da if1) ${x}`);
    const y = 50;
    console.log(`const y (dentro da if1) ${y}`)
}

//Variável let x no escopo global.
console.log(`let x (fora do if) ${x}`)

if( 20 > 10){
    const y = 100;
    console.log(`const y (dentro da if2) ${y}`)
}

for(let x = 0; x < 10; x++){
    console.log(`let x (dentro da for) ${x}`)
}



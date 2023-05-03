/*
Operadores de atribuição:

Temos algumas maneiras de atribuir um valor a uma variável;
As mais utilizadas são: +=, -=, *=l, /=;
Basicamente é uma forma resumida da operação: x = x + y;
Em loops também é comum utilizar os operadores ++ ou --;
*/



console.log('Operadores de atribuição: ')

var x = 1;
var y = 2;

// soma
console.log(x = x + y); // x=1 y=2
console.log (x += y);

// subtração
console.log(x -= y);

// multiplicação
console.log(x *= y);

// divisão
console.log( x /= y);

// lops
console.log(x++);
console.log(x--);

while(x <= 100){

    console.log(x);

    x *= 2;
}

//console.log(x);

var j = 1;

while( x > 0){

    console.log(x);

    x -= j;

}


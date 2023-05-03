/*
Break e continue:

Com break podemos encerrar uma instrução;
Com o continue podemos pular uma instrução;
Utilizados na maioria das vezes em loops;
*/


console.log('BREAK: ')

for(var i = 10; i > 0; i--){

    console.log(i);

    if( i === 5){
        break;
    }
}
console.log('Deu o break!');


console.log('CONTINUE: ')

var x = 10;

while(x < 100){
    
    x += 10;

    if( x === 60 || x === 90 /*Utilizando o OR */){
        console.log('Continue!')
        continue; //Pode reparar que ao utilizar o 'continue' ele pula para o proximo.
    }
    console.log('Testando continue: ' + x);
}


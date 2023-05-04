/*
Escopo:

No JavaScript podemos ter vários escopos;
O global, que é iniciado em toda a aplicação;
E os locais, que podem existir em várias instruções como as funções;
*/


console.log('Escopo')

//Variável no escopo 'Global'
var x = 1;
var y = 3;

console.log(x, y);
teste = () => {

    var z = 0;
    console.log(z);
    console.log(x);
};

teste();

/*Exemplo demonstrando quando está fora do escopo.
console.log(z);
*/

testando = () => {
    var z = 5;
    console.log(z);
}

testando();

if(true){
    var p = 1;
}

console.log(p);

/*
O objeto Number, pai dos números, contém métodos muito úteis para trabalhar com números em JS;
A maioria dos tipos de dado também tem um objeto pai, como: String, Object e Array;
Metodo: uma açao que será executada em cima de algum parametro ou sem parametro
Propriedade: Um valor fixo (número de elementos de um array) sempre disponível.
*/
console.log('Métodos Númericos: ')


// parseFloat 10.0 (Flutuante)
console.log(parseFloat('11.111')); //Transforma uma string em um number flutuante.
console.log(Number.parseFloat('11.111'));

// parseInt
console.log(parseInt('11'));
console.log(parseInt('16.96')); //Transforma em um número inteiro.

// toFixed limita as casas decimais.
console.log(`Sua conta será: R$${23.5678575699.toFixed(2)}`);

// isNaN
console.log(isNaN('Teste')); // is not a number = true (não é um número)
console.log(isNaN(1)); //é um número = false
console.log(isNaN('7')); // converte string para número


// MAX_VALUE e MIN_VALUE = São os maximos e os minimos que o JS aceita abaixo disso vão ser tratados como -Infinity e acima como Infinity.
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

//A cima
console.log(2.7976931348623157e+308)

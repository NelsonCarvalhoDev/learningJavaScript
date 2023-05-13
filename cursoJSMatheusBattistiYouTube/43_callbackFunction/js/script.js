/*
Callback functions:

A função de calback é um recurso muito interessante e também amplamente utilizado em JS;
Permite executar uma função depois de uma determinada ação;
Conceito fundamental para entender a parte assíncrona do JS;
*/
console.log();

exibir = num => console.log(`O resultado da operação foi: ${num}`);
    
soma = (a, b, callback) => {
    var op = a + b;
    callback(op);
}

soma = (a, b) => {
    const op = a + b
    exibir(op)
}

multiplicacao = (a, b, cb) => {
    let op = a * b;
    cb(op);
}

soma(2, 2, exibir);
multiplicacao(2, 4, exibir);

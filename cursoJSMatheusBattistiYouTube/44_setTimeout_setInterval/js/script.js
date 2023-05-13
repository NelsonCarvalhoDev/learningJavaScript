/*
setTimeout e setInterval

Podemos com estas funções criar ações o software que executam depois de um tempo ou de tempos em tempos;
Um dos argumentos destas funções é uma callback function;
Exemplo1: quero que um pop up apareca na pagina depois de 2 segundos utilizamos o setTimeout.
Exemplo2: quero saber a cada 2 segundos onde ta o mouse o client utilizamos o setInterval.
callback assíncrona
uma função que é passada como argumento para outra é considerada callback
*/

//setTimeout executa uma função depois de um tempo

console.log('antes do settimeout');

setTimeout(function() {
    console.log('testando o setTimeout');
}, 2000); // tempo em milisegundos

console.log('depois do settimeout');

//setInterval

setInterval(function() {
    console.log('testando o setInterval');
}, 10000);

/*
clearTimeout e clearInterval:

Podemos por um fim em setTimeout e setInterval por meio destes dois métodos;
Entao após determinada condição os timers não serão mais executados;
*/
console.log('clearTimeout e clearInterval: ');

var x = 0;

var myTimer = setTimeout(function(){
    console.log('O x é 0');
}, 1500);

x = 5;

// verificando se x é maior que zero se sim limpa o setTimeout com o clerTimeout.
if(x > 0) {
    clearTimeout(myTimer);
    console.log('O x passou de 0');
};

// clearInterval na prática

var myInterval = setInterval(function(){
    console.log('Imprimindo interval')
}, 500);

setTimeout(function(){
    console.log('Interrompendo Interval com clearInterval!');
    clearInterval(myInterval);
}, 1000);

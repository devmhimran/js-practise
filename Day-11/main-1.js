


var firstVar = document.getElementById('one');
var secondVar = document.getElementById('two');
var output = document.getElementById('output');

firstVar.addEventListener('click', function(){
    output.innerText = 'Hello Print By this First One';
});
secondVar.addEventListener('click', function(){
    output.innerText = 'Hello Print By this Second One';
});
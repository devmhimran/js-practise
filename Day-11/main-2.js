

var inputForm = document.getElementById('inputForm');
var inputBtn = document.getElementById('inputBtn');
var outputTxt = document.getElementById('output');

inputBtn.addEventListener('click', function(){
    var output = inputForm.value;
    console.log(output);
    outputTxt.innerText = output; 
    
    inputForm.value = '';
    
});
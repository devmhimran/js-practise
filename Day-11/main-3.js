



var inputForm = document.getElementById('inputForm');
var inputBtn = document.getElementById('inputBtn');
var outputTxt = document.getElementById('output');

inputBtn.addEventListener('click', function(){
    var output = inputForm.value;
    outputTxt.innerText = output;
    inputForm.value = '';
});


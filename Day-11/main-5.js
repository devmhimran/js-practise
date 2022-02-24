;
var inputForm = document.getElementById('inputField');
var inputBtn = document.getElementById('inputBtn');
var deleteMsg = document.getElementById('msg');
inputBtn.addEventListener('click', function(){
    deleteMsg.style.display = 'none';
});
inputForm.addEventListener('focus', function(){
    inputForm.style.backgroundColor = 'red';
    inputForm.style.color = 'white';
});
inputForm.addEventListener('blur', function(){
    inputForm.style.backgroundColor = 'white';
    inputForm.style.color = 'black';
});
inputForm.addEventListener('keyup', function(event){
    // var formField = inputForm.value;
    // console.log(formField);
    // console.log(event.target.value);
    if(event.target.value == 'delete'){
        inputBtn.removeAttribute('disabled');
    }else{
        inputBtn.setAttribute('disabled', true);
    }
     
});
inputForm.addEventListener('change', function(){
    var formField = inputForm.value;
    console.log(formField);
     
});

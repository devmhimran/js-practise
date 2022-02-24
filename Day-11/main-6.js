

var deleteText = document.getElementById('deleteText');
var deleteForm = document.getElementById('deleteForm');
var deleteBtn = document.getElementById('deleteBtn');

deleteBtn.addEventListener('click', function(){
    deleteText.style.display = 'none';
    deleteForm.value = '';
});
deleteForm.addEventListener('focus', function(){
    deleteForm.style.backgroundColor = 'red';
});
deleteForm.addEventListener('blur', function(){
    deleteForm.style.backgroundColor = 'blue';
});
deleteForm.addEventListener('keyup', function(e){

    if( e.target.value == 'delete' ){
        deleteBtn.removeAttribute('disabled'); 
    }else{
        deleteBtn.setAttribute('disabled', true); 
    }
    // console.log(e.target.value);
    
});
deleteForm.addEventListener('change', function(){ console.log('done')});



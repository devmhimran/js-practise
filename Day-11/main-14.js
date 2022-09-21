


var items = document.getElementsByClassName('items');
var listItems = document.getElementById('list-items');
var addItems = document.getElementById('addItems');



addItems.addEventListener('click', function(){
    var newList = document.createElement('li');
    newList.classList.add('items');
    newList.innerText = 'hello';
    listItems.appendChild(newList);
});
listItems.addEventListener('click', function(e){
    e.target.parentNode.removeChild(e.target);
});



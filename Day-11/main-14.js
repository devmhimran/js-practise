


var items = document.getElementsByClassName('items');
var listItems = document.getElementById('list-items');
var addItems = document.getElementById('addItems');




// for( var item of items ){
//     item.addEventListener('click', function(e){
//         e.target.parentNode.removeChild(e.target);
//     });
//     item.style.margin = '15px 0';
// }

addItems.addEventListener('click', function(){
    var newList = document.createElement('li');
    newList.classList.add('items');
    newList.innerText = 'hello';
    listItems.appendChild(newList);
});
listItems.addEventListener('click', function(e){
    e.target.parentNode.removeChild(e.target);
});



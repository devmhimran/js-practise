
var listSection = document.getElementById('list-section');
var secondItem = document.getElementById('second-element');
var ulCheck = document.getElementById('list-container');
var allLi = document.getElementsByClassName('list-item');
for(var list of allLi){
    list.style.margin = '20px 0' ;
}


secondItem.addEventListener('click', function(event){
    console.log('2nd Click1');
    event.stopImmediatePropagation();
});
secondItem.addEventListener('click', function(event){
    console.log('2nd Click2');
});
secondItem.addEventListener('click', function(event){
    console.log('2nd Click3');
});
secondItem.addEventListener('click', function(event){
    console.log('2nd Click4');
});
ulCheck.addEventListener('click', function(e){
    console.log('Ul Cliked');
    e.stopImmediatePropagation();
});
listSection.addEventListener('click', function(){
    console.log('Section clicked');
});
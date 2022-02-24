



var commentTxt = document.getElementById('comment-text');
var inputComment = document.getElementById('inputComment');
var submitBtn = document.getElementById('submit');
var commentParent = document.getElementById('comment');
var commentDesign = document.getElementsByClassName('comment-text');


submitBtn.addEventListener('click', function(){
    var commentAdd = inputComment.value;
    var newComment = document.createElement('p');
    newComment.innerText = commentAdd;
    newComment.classList.add('comment-text');
    commentParent.appendChild(newComment);
    
    inputComment.value = '';
    
});
for( var cmnt of commentDesign ){
    cmnt.style.backgroundColor = 'green';
    cmnt.style.padding = '5px';
    cmnt.style.margin  = '20px 0';
}


// var newCmnt  = document.createElement('p');
// newCmnt.innerText = 'Hello world';
// newCmnt.classList.add('comment-text');
// document.getElementById('comment').appendChild(newCmnt);




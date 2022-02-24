




var redBtn = document.getElementById('button-red');
redBtn.onclick = buttonRed;


function buttonRed(){
    document.body.style.backgroundColor = 'red';
}

var blueBtn = document.getElementById('button-blue');
blueBtn.onclick  = function blueBtn(){
    document.body.style.backgroundColor = 'blue';
}

var goldenBtn = document.getElementById('button-golden-rod');
goldenBtn.addEventListener('click', goldenButton);
function goldenButton(){
    document.body.style.backgroundColor = 'goldenrod';
}

var hotPink = document.getElementById('button-hot-pink');
hotPink.addEventListener('click', hotPinkBtn);
function hotPinkBtn(){
    document.body.style.backgroundColor = 'hotpink';
}

var greenYellow = document.getElementById('button-green-yellow');
greenYellow.addEventListener('click', function greenYellowBtn(){
    document.body.style.backgroundColor = 'greenyellow';
});


document.getElementById('forward').addEventListener('click', function(){
    history.forward();
    console.log('forward')
});
document.getElementById('back').addEventListener('click', function(){
    history.back();
    console.log('back');
    document.getElementById('body').style.backgroundColor = 'green';
});
document.getElementById('green').addEventListener('click', function(){
    document.getElementById('body').style.backgroundColor = 'green';
});
document.getElementById('red').addEventListener('click', function(){
    document.getElementById('body').style.backgroundColor = 'red';
});
document.getElementById('reload').addEventListener('click', function(){
    location.reload();
    console.log('reload');
});
document.getElementById('url').addEventListener('click', function(){
    location.assign('https://www.youtube.com/');
    // console.log('reload');
});
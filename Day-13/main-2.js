document.getElementById('container').style.padding = '20px';
document.getElementById('add-border').addEventListener('click', function(){
    const  containerBorder = document.getElementById('container');
    containerBorder.style.border = '5px solid red';
});

function addBackgroundColor(){
    const getFriendClass = document.getElementsByClassName('friend');
    for( const friend of getFriendClass ){
        friend.style.backgroundColor = 'yellow';
    }
}

document.getElementById('add-friend').addEventListener('click', function(){
    const container = document.getElementById('container');
    const NewElement = document.createElement('div');
    NewElement.classList.add('friend');
    NewElement.innerHTML = `
    <h3 class="friend-name">Friend-4</h3>
    <p>Ratione laboriosam sapiente cum quae?</p>`;
    container.appendChild(NewElement);
});
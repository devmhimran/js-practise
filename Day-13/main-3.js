 
function setPlayer(players){
    players.style.border = '2px solid blue';
    players.style.margin = '20px';
    players.style.padding = '20px';
    players.style.borderRadius = '15px';
}

const player = document.getElementsByClassName('player');
for( const players of player ){
    // console.log(players);
    setPlayer(players);
    // players.addEventListener('click', function(){
    //     players.style.backgroundColor = 'skyblue';
    // });
}
 const addBtn = document.getElementById('addBtn');
    addBtn.style.backgroundColor = 'red';
    addBtn.style.color = 'white';
    addBtn.style.padding = '15px 35px';
    addBtn.style.border = 'none';
    

addBtn.addEventListener('click', function(){
    const playerContainer = document.getElementById('container');
    const newElement = document.createElement('div');
    newElement.classList.add('player');
    newElement.innerHTML = `
        <h4 class="player-name">player - 5</h4>
        <p>Ex pariatur error tenetur labore dolores, quidem libero nulla iste repellat est doloribus ut eaque optio omnis at, ipsum sint!</p>`;
        setPlayer(newElement);
    playerContainer.appendChild(newElement);
});


document.getElementById('container').addEventListener('click', function(e){
    // e.target.tagname.style.backgroundColor = 'yellow';
   console.log(e.target.tagName.toLowerCase());
   if( e.target.tagName.toLowerCase() == 'div' ){
    e.target.style.backgroundColor = 'yellow';
   }else{
    e.target.parentNode.style.backgroundColor = 'yellow';   
    }
});
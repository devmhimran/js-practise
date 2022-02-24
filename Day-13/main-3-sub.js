

const addBtn = document.getElementById('addBtn');

// addBtn.addEventListener('click', function(){
//     const container = document.getElementById('container');
//     const newElements = document.createElement('div');
//     newElements.classList.add('player');
//     newElements.innerHTML = `
//         <h4 class="player-name">player - 5</h4>
//         <p>Ex pariatur error tenetur labore dolores, quidem libero nulla iste repellat est doloribus ut eaque optio omnis at, ipsum sint!</p>
//     `;
//     container.appendChild(container);
// });




document.getElementById('addBtn').addEventListener('click', function(){
    const container = document.getElementById('container');
    const NewElement = document.createElement('div');
    NewElement.classList.add('player');
    NewElement.innerHTML = `
    <h3 class="friend-name">Friend-4</h3>
    <p>Ratione laboriosam sapiente cum quae?</p>`;
    container.appendChild(NewElement);
});
const gridChoice = 4;
let array4 = [ 1,3,2,4,5,7,6,8 ];
let array2 = [ 1,2 ];
const grid = document.getElementById('grid');
const moves = document.getElementById('moves');
let cards, card1, card2, flipped1 = false, flipped2 = false, movesMade = 0;




showGrid();
cards = document.querySelectorAll('button');
cards.forEach(card => {
    card.addEventListener('click', () => {
            flipCard(card);
        })
});





function showGrid(){
    if( gridChoice === 4 ){
        grid.classList.add('grid4x4');
    } else {
        grid.classList.add('grid2x2');
    }
    appendCards();  
}



function flipCard(card){
    if( flipped1 === false){
        flipped1 = true;
        card1 = card;
        movesMade++;
    } else if ( flipped2 === false){
        if(card === card1) return;
        flipped2 = true;
        card2 = card;
        movesMade++;
    } else return;

    card.classList.add('flip');
    card.style.color = 'black';
    moves.innerHTML = movesMade;
}

function appendCards(){
    
    const count = gridChoice*gridChoice;
    const array = chooseArray();
    for(let i = 0; i < count; i++){
        const btn = document.createElement('button');
        if( i < array.length ){
            btn.innerHTML = array[i];
        } else {
            //treversing array backwards
            btn.innerHTML = array[array.length - (i - array.length + 1)];
        }              
        grid.appendChild(btn);
    }

}

function chooseArray(){
    if ( gridChoice === 4 ){
        return array4;
    } else {
        return array2;
    }
}


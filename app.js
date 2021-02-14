const gridChoice = 4;
const array4 = [ 1,3,2,4,5,7,6,8 ];
const grid = document.getElementById('grid'); 


window.addEventListener('load', showGrid);



function showGrid(){
    if( gridChoice === 4 ){
        grid.classList.add('grid4x4');
    } else {
        grid.classList.add('grid2x2');
    }
    appendBtn();  
}

function appendBtn(){
    
    const count = gridChoice*gridChoice;
    for(let i = 1; i <= count; i++){
        const btn = document.createElement('button');
        btn.innerHTML = 1;                   
        grid.appendChild(btn);
    }

}
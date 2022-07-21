const container = document.querySelector('div.grid-container');
const barVal = document.querySelector('#bar');
barVal.addEventListener('mouseup', function(e){
    deleteGrid();
    createGrid(e.target.value);
});

createGrid(16) //default grid
function createGrid(size){
    for(let i = 0; i < size * size; i++)
    {
    let gridElement = document.createElement('div');
    gridElement.classList.add('gridElement')
        /*Pass JS values into CSS ... Super useful!! 
          link: https://eager.io/blog/communicating-between-javascript-and-css-with-css-variables/ 
          */
    gridElement.style.setProperty('--grid-height', 560/size);
    gridElement.style.setProperty('--grid-width', 560/size);
    container.appendChild(gridElement);
    }
    let paragraph = document.querySelector('span');
    paragraph.textContent = `   This is a ${size} x ${size} grid`;
    divs = document.querySelectorAll('div.gridElement');
        divs.forEach(div => {
         div.addEventListener('mouseover', function(e){
             e.target.classList.add('hovered');
             e.target.classList.add('hovering');
            })
        })
        divs.forEach(div => 
            div.addEventListener('mouseout', e => 
                e.target.classList.remove('hovering')));
}



const clear = document.querySelector('#clear');
clear.addEventListener('click', clearGrid);
function clearGrid ()
{
    divs = document.querySelectorAll('div.gridElement');
    divs.forEach(div => div.classList.remove('hovered'));
}

function deleteGrid()
{
    divs = document.querySelectorAll('div.gridElement');
    divs.forEach(div => div.remove());
}

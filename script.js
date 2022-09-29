//Add Selectors
let pickedColor = '#c70039';
const container = document.querySelector('div.grid-container');
const barVal = document.querySelector('#bar');
const colour = document.querySelector('#pick');


barVal.addEventListener('mouseup', function(e){
    deleteGrid();
    createGrid(e.target.value);
});

createGrid(16)

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
             e.target.style.backgroundColor = `${pickedColor}`;
             e.target.classList.add('hovering');
             console.log(e.target);
            })
        })
        divs.forEach(div => 
            div.addEventListener('mouseout', e => 
                e.target.classList.remove('hovering')));
}
colour.addEventListener('change', function(e){
    console.log(e)
    pickedColor = e.target.value;
} )



const clear = document.querySelector('#clear');
clear.addEventListener('click', clearGrid);
function clearGrid ()
{
    divs = document.querySelectorAll('div.gridElement');
    divs.forEach(div => div.style.backgroundColor = 'white');
}

function deleteGrid()
{
    divs = document.querySelectorAll('div.gridElement');
    divs.forEach(div => div.remove());
}

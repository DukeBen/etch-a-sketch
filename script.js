const container = document.querySelector('div.container');
const size = prompt("What size do you want")
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

const divs = document.querySelectorAll('div.gridElement');
divs.forEach(div => {
    div.addEventListener('mouseover', function(e){
        e.target.classList.add('hovered');
    })
})

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => divs.forEach(div => div.classList.remove('hovered')));
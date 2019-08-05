let container = document.getElementById('container')

function drawGrid (height, width){
    let quantity = height * width;
    container.style.gridTemplateColumns =  `repeat(${width}, 1fr)`
    container.style.gridTemplateRows =  `repeat(${height}, ${384 / height}px)`
    for(let i = 0; i < quantity; i++){
        let div = document.createElement('div')
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black'
        })
        container.appendChild(div)
    }
}
drawGrid(16, 16)

let clear = document.getElementById('clear')
clear.addEventListener('click', ()=> {
    container.innerHTML = ''
    let width = prompt('How many pixels wide do you want? (10-200) ')
    let height = prompt('How many pixels tall? (10-200) ')
    drawGrid(height, width)
})
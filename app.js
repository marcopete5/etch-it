let container = document.getElementById('container')
let colorful = false;

function drawGrid (height, width){
    let quantity = height * width;
    container.style.gridTemplateColumns =  `repeat(${width}, 1fr)`
    container.style.gridTemplateRows =  `repeat(${height}, ${384 / height}px)`
    for(let i = 0; i < quantity; i++){
        let div = document.createElement('div')
        div.addEventListener('mouseover', () => {
            if(colorful){
                let color = Math.floor(Math.random() * 16777216).toString(16);
                let final = '#000000'.slice(0, -color.length) + color;
                if(div.style.backgroundColor){
                    if(div.style.backgroundColor[0] === '#'){
                        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(div.style.backgroundColor);
                        let rgb = result ? { r: parseInt(result[1], 16),
                            g: parseInt(result[2], 16),
                            b: parseInt(result[3], 16)
                        } : null;
                        let {r,g,b} = rgb;
                        r -= 5
                        g -= 5
                        b -= 5
                        div.style.backgroundColor = `rgb(${r},${g},${b})`
                    }else {
                        let bc = div.style.backgroundColor;
                        let nums = bc.slice(bc.indexOf('(') +1, bc.indexOf(')'))
                        nums = nums.split(', ')
                        div.style.backgroundColor = `rgb(${nums[0] -= 50}, ${nums[1] -= 50}, ${nums[2] -= 50})`
                    }
                }else {
                    div.style.backgroundColor = final;
                }
            }else {
                div.style.backgroundColor = 'black';
            }
            
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

let color = document.getElementById('color')

color.addEventListener('click', ()=> {
    color.textContent === 'Colorful' ? color.textContent = 'Black' : color.textContent = 'Colorful';
    colorful = !colorful;
})
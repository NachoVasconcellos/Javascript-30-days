window.onload = function() {
    addColor();
}

for(let i = 0; i < 9; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    document.querySelector('.container').appendChild(box);
}

const btn = document.querySelector('.box');
const randomColorBlock = document.querySelectorAll('.box');

function randomHexColorCode() {
    let chars = '0123456789abcdef';
    let colorLength = 6;
    let color = '';

    for(let i = 0; i < colorLength; i++) {
        let randomColor = Math.floor(Math.random() * chars.length);
        color += chars.substring(randomColor, randomColor + 1);
    }
    return '#' + color;
}

function addColor() {
    randomColorBlock.forEach(e => {
        let newColor = randomHexColorCode();
        e.style.backgroundColor = newColor;
        e.innerHTML = newColor;
    })
}
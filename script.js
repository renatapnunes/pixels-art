// cria e adiciona paleta de cores
let pallete = document.getElementById('color-palette');
for (let i = 0; i < 4; i += 1) {
    let color = document.createElement('div');
    color.className = 'color';
    let arrayRadomColors = generateArrayRandomColors();
    color.style.backgroundColor = arrayRadomColors[i];
    pallete.appendChild(color);
}
// gera rgb aleatorio
function generateRandomColors () {
    let r = Math.ceil(Math.random()*254);
    let g = Math.ceil(Math.random()*254);
    let b = Math.ceil(Math.random()*254);
    let rgb = ('rgb(' + r + ', ' + g + ', ' + b + ')');
    return rgb;
}
// gera array de 4 cores
function generateArrayRandomColors () {
    let colorsArray = [];
    let colorRGB;
    colorsArray[0] = 'rgb(0, 0, 0)';
    for (let i = 1; i < 4; i += 1) {
        colorRGB = generateRandomColors();
        colorsArray[i] = colorRGB;
    }
    for (let i = 1; i < colorsArray - 1; i += 1) {
        if (colorsArray[i] === colorsArray[i+1]) {
            colorRGB = generateRandomColors();
            colorsArray[i+1] = colorRGB;
        }
    }
    return colorsArray;
}
// quadro de pixels
let board = document.getElementById('pixel-board');
for (let i = 0; i < 5; i += 1) {
    let pixelLine = document.createElement('div');
    pixelLine.className = 'pixel-line';
    board.appendChild(pixelLine);
}
let arrayPixelLine = document.getElementsByClassName('pixel-line');
for (let i = 0; i < 5; i += 1) {
    for (let j = 0; j < 5; j += 1) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.style.backgroundColor = 'rgb(255, 255, 255)';
        arrayPixelLine[i].appendChild(pixel);
    }
}



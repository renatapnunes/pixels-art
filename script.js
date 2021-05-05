let pallete = document.getElementById('color-palette');
for (let i = 0; i < 4; i += 1) {
    let color = document.createElement('div');
    color.className = 'color';
    let arrayRadomColors = generateArrayRandomColors();
    color.style.backgroundColor = arrayRadomColors[i];
    pallete.appendChild(color);
}


function generateRandomColors () {
    let r = Math.ceil(Math.random()*254);
    let g = Math.ceil(Math.random()*254);
    let b = Math.ceil(Math.random()*254);
    let rgb = ('rgb(' + r + ', ' + g + ', ' + b + ')');
    return rgb;
}

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


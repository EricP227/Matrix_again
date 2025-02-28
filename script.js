const matrix = document.getElementById('matrix');
const layerCount = 3;
const columnCount = 50;
const charSet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

function getRandomChar() {
    return charSet[Math.floor(Math.random() * charSet.length)];
}

for (let i = 0; i < layerCount; i++) {
    const layer = document.createElement('div');
    layer.classList.add('matrix-layer');
    matrix.appendChild(layer);

    for (let j = 0; j < columnCount; j++) {
        const column = document.createElement('div');
        column.classList.add('matrix-column');
        column.style.left = `${(j / columnCount) * 100}%`;
        layer.appendChild(column);

        const charCount = Math.floor(Math.random() * 20) + 20;
        let columnText = '';
        for (let k = 0; k < charCount; k++) {
            columnText += getRandomChar() + '<br>';
        }
        column.innerHTML = columnText;
    }
}

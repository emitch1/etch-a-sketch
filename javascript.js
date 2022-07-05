function createGrid() {
    const prevGrid = document.querySelector('.grid-container');
    prevGrid.innerHTML = '';
    let gridSize = prompt("Indicate grid size (between 1 and 100): ");
    while (gridSize <= 1 || gridSize > 100) {
        
        gridSize = prompt("Indicate grid size");
    } 
    populateGrid(gridSize);
}

function populateGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const div1 = document.createElement('div');
        div1.className = `divR${i}`;
        div1.style.display = "flex";
        div1.style.flexDirection = 'column';
        div1.style.flexGrow = "1";
        document.querySelector('.grid-container').appendChild(div1);

        for (let j = 0; j < gridSize; j++) {
            const div2 = document.createElement('div');
            div2.className = "div2";
            div2.style.flexGrow = "1";
            document.querySelector(`.divR${i}`).appendChild(div2);

        }
    }
    draw();
}

function draw() {
    const divs = document.querySelectorAll('.div2');
    divs.forEach((div) => {
        div.addEventListener('mouseover', () => div.style.backgroundColor = 'black');
    });
}

const btn = document.querySelector('button');
btn.addEventListener('click', () => createGrid());


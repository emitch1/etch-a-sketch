const gridSize = prompt("Indicate grid size");

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

const divs = document.querySelectorAll('.div2');
divs.forEach((div) => {
    div.addEventListener('mousedown', () => div.style.backgroundColor = 'black');
});
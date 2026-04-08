function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
}
function createGrid(numSquaresPerSide) {
    // make the grid
    const sizeOfGrid = 640; // px
    const sizeOfCell = (sizeOfGrid / numSquaresPerSide); // px

    const grid = document.querySelector(".grid");
    // console.log(sizeOfGrid, sizeOfCell);
    for (let i = 0; i < numSquaresPerSide * numSquaresPerSide; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = `${sizeOfCell}px`;
        cell.style.height = `${sizeOfCell}px`;
        grid.appendChild(cell);
    }

    // detect hovering on cell to simulate pen track
    grid.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = getRandomColor();
    });
}

function deleteGrid() {
    const grid = document.querySelector(".grid");
    grid.replaceChildren(); // removes all children
}

// create initial grid
createGrid(16);

// logic for the resize button
const resizeGridBtn = document.querySelector(".resize-grid-btn");

resizeGridBtn.addEventListener("click", () => {
    let numSquaresPerSide = prompt("How many squares per side? (Maximum: 100)", "");

    if (numSquaresPerSide === null) return; // exit if user clicks Cancel or presses ESC key

    if (numSquaresPerSide === "" || isNaN(numSquaresPerSide)) {
        alert("Please enter a positive integer.");
        return;
    }
    numSquaresPerSide = Number(numSquaresPerSide);

    if (!Number.isInteger(numSquaresPerSide) || 
        numSquaresPerSide <= 1 || 
        numSquaresPerSide > 100
    ) {
        alert("Please enter a positive integer less than 100.");
        return;
    }
    // create new grid
    deleteGrid();
    createGrid(numSquaresPerSide);
});
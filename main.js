const container = document.querySelector(".container")

// GRID
let gridSize = 16;

function createGrid(gridSize) {
    container.innerHTML = ''
    const cellSize = 400 / gridSize;

    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = document.createElement("div");
        cell.classList.add('cell');
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        cell.addEventListener("mouseenter", () => {
            cell.style.backgroundColor = 'black';
        })
        container.appendChild(cell);
    }
}

//RESIZE
const button = document.querySelector("button")
button.addEventListener('click', () => {
  let newSize = prompt("Enter grid size (1 to 100):", 16);

  newSize = parseInt(newSize);

  if (isNaN(newSize) || newSize < 1 || newSize > 100) {
    alert("Invalid input. Please enter a number between 1 and 100.");
    return;
  }

  gridSize = newSize;
  createGrid(gridSize);
});

createGrid(gridSize);
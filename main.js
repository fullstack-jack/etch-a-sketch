const container = document.querySelector(".container")

let gridSize = 32

for (let i = 0; i <= gridSize*gridSize; i++) {    
    const cell = document.createElement("div")
    cell.classList.add('cell')
    container.append(cell)
}


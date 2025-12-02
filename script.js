const container = document.querySelector(".container");
const btns = document.querySelectorAll("button")
let random = false
let darken = false

btns.forEach(btn => {
    btn.addEventListener("click", e => {
        switch(e.target.className) {
            case "size":
                let gridSize = +prompt("Gridsize:", 16)
                gridSize < 100 && gridSize > 2 ? 
                createGrid(gridSize) :
                alert("Must be between 2 and 100")   
                break
            case "random":
                random = !random
                break
            case "darken":
                darken = !darken
                break
        }
    })
})

const createGrid = (size=16) => {
    container.innerHTML = ""
    random = false
    darken = false
    for (let i = 0; i < size**2; i++) {
        const square = document.createElement("div")
        square.classList.add("square")
        square.style.flexBasis = `calc(100% / ${size})`
        square.addEventListener("mouseover", () => {
            darken
                ? (square.style.backgroundColor = "black",
                square.style.opacity = Math.min(1, (parseFloat(square.style.opacity) || 0) + 0.1))
                : random
                ? (square.style.backgroundColor = `#${Math.floor(Math.random() * 16777215)
                    .toString(16)
                    .padStart(6, "0")}`,
                square.style.opacity = 1)
                : (square.style.backgroundColor = "black", square.style.opacity = 1);
            });
        container.append(square)
    }
}

createGrid()



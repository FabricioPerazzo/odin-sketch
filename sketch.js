// Creating 16x16 div grid

const body = document.querySelector("body");

const container = document.createElement("div");
container.classList.add("container");

body.appendChild(container);

for (let i = 0; i < 16; i++){
    let rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    rowDiv.id = `row${i}`;
    container.appendChild(rowDiv);
}

let j = 0;
for (let i = 0; i < 256; i++){
    if (i !== 0 && i % 16 === 0){
        j++;
    }

    let rowDivToAdd = document.querySelector(`#row${j}`);

    let squareDiv = document.createElement("div");
    squareDiv.classList.add("square");

    rowDivToAdd.appendChild(squareDiv);
}

// Adding hovering effect to each square div

const squaresArray = document.querySelectorAll(".square");

squaresArray.forEach((square) => {
    square.addEventListener("mouseover", (event) => {
        square.style.backgroundColor = "black"
    })
})


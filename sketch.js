const container = document.createElement("div");
container.classList.add("container");

for (let i = 0; i < 16; i++){
    let rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    container.appendChild(rowDiv);
}

const gridOfDivs = [];

for (let i = 0; i < 256; i++){
    let squareDiv = document.createElement("div");
    squareDiv.classList.add("square");
    gridOfDivs[i] = squareDiv;
}
function createGrid(size) {
    let format;
    if (size === 16) format = "small";
    else if (size === 40) format = "medium";
    else format = "big";

    let rowsArray = document.querySelectorAll(".isRow");
    rowsArray.forEach((row) => {
        row.remove();
    });

    for (let i = 0; i < size; i++){
        let rowDiv = document.createElement("div");
        rowDiv.classList.add(`${format}Row`);
        rowDiv.classList.add("isRow");
        rowDiv.id = `row${i}`;
        container.prepend(rowDiv);
    }

    let j = 0;
    for (let i = 0; i < (size * size); i++){
        if (i !== 0 && i % size === 0){
            j++;
        }

        let rowDivToAdd = document.querySelector(`#row${j}`);

        let squareDiv = document.createElement("div");
        squareDiv.classList.add(`${format}Square`);
        squareDiv.classList.add("isSquare");
        rowDivToAdd.appendChild(squareDiv);
    }

    // Adding hovering effect to each square div

    const squaresArray = document.querySelectorAll(".isSquare");

    squaresArray.forEach((square) => {
        square.addEventListener("mouseover", (event) => {
            square.style.backgroundColor = "black";
        })
    })
}



// Creating initial 16x16 div grid

const body = document.querySelector("body");

const container = document.createElement("div");
container.classList.add("container");

body.appendChild(container);

createGrid(16); // creates a small grid

// Adding size and erase buttons to display

const buttonsDisplay = document.createElement("div");
buttonsDisplay.classList.add("buttonsDisplay");
container.appendChild(buttonsDisplay);

const sizeButtons = document.createElement("div");
sizeButtons.classList.add("sizeButtons");

const textDiv = document.createElement("div");
textDiv.textContent = "GRID SIZE:";
sizeButtons.appendChild(textDiv);

const smallButton = document.createElement("button");
const mediumButton = document.createElement("button");
const bigButton = document.createElement("button");

smallButton.classList.add("buttons");
mediumButton.classList.add("buttons");
bigButton.classList.add("buttons");

smallButton.textContent = "Small";
mediumButton.textContent = "Medium";
bigButton.textContent = "Big";

sizeButtons.appendChild(smallButton);
sizeButtons.appendChild(mediumButton);
sizeButtons.appendChild(bigButton);

const eraseButtonDisplay = document.createElement("div");
eraseButtonDisplay.classList.add("eraseButtonDisplay");

const eraseButton = document.createElement("button");
eraseButton.classList.add("buttons");
eraseButton.textContent = "Erase";
eraseButtonDisplay.appendChild(eraseButton);

buttonsDisplay.appendChild(sizeButtons);
buttonsDisplay.appendChild(eraseButtonDisplay);

// Adding functionality to the buttons

eraseButton.addEventListener("click", (event) => {
    let squaresArray = document.querySelectorAll(".isSquare");

    squaresArray.forEach((square) => {
        square.style.backgroundColor = "white";
    })
});

smallButton.addEventListener("click", (event) => {
    createGrid(16); // small 16 rows
});
mediumButton.addEventListener("click", (event) => {
    createGrid(40); // medium 40 rows
});
bigButton.addEventListener("click", (event) => {
    createGrid(80); // big 80 rows
});
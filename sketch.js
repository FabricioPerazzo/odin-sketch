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

let squaresArray = document.querySelectorAll(".square");

squaresArray.forEach((square) => {
    square.addEventListener("mouseover", (event) => {
        square.style.backgroundColor = "black"
    })
})

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

})

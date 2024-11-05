const GRIDSIDE = 600;
let squarePerSide = 16;


const sketchArea = document.querySelector("#sketch-area");
const sliderContainer = document.querySelector("#slider-container");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#slider-value");

sliderValue.textContent = `${slider.value} x ${slider.value} (Resolution)`;

sketchArea.style.width = sketchArea.style.heigth = `${GRIDSIDE}px`;

function changeBackgroundColor(){
    this.style.backgroundColor = "black";
}

function createGridCells(squarePerSide){
    const totalSquares = (squarePerSide*squarePerSide);
    const heigthOrWidth =  `${(GRIDSIDE /squarePerSide) -2}px`
    for (let i = 0;i<totalSquares;i++){
        const gridCell = document.createElement("div");
        gridCell.style.width = gridCell.style.height = heigthOrWidth;
        gridCell.classList.add("cell")

        sketchArea.appendChild(gridCell);

        gridCell.addEventListener("mouseover",changeBackgroundColor);
    } 
}

function removeGridCells(){
    while(sketchArea.firstChild){
        sketchArea.removeChild(sketchArea.firstChild);
    }
}




createGridCells(squarePerSide);









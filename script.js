// Initializes the  variables
let isDrawing = false;
let currentColor = "black";

let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
let index = 0;

function changeBackgroundColor() {
  // changes the entire background color.

  document.body.style.backgroundColor = colors[index];
  index = (index + 1) % colors.length;
}

setInterval(changeBackgroundColor, 5000);

// Handles mouse down 
function handleMouseDown(event) {
  isDrawing = true;
  handleMouseOver(event); // Color the square immediately
}

// Handles mouse up 
function handleMouseUp() {
  isDrawing = false;
}

// Handles  mouse over button
function handleMouseOver(event) {
  if (isDrawing) {
    if (currentColor === "rainbow") {
      event.target.style.backgroundColor = `rgb(${Math.random() * 255}, ${
        Math.random() * 255
      }, ${Math.random() * 255})`;
    } else {
      event.target.style.backgroundColor = currentColor;
    }
  }
}

// Toggles color picker visibility
function toggleColorPicker() {
  const colorPicker = document.getElementById("color-picker");
  colorPicker.style.display =
    colorPicker.style.display === "none" ? "block" : "none";
}

// Set active button
function setActiveButton(buttonId) {
  const buttons = document.querySelectorAll("#sidebar button");
  buttons.forEach((btn) => btn.classList.remove("active"));
  const button = document.getElementById(buttonId);
  button.classList.add("active");
}

// Updates and displays grid size
function handleGridSizeChange(event) {
  const newSize = event.target.value;
  document.getElementById(
    "grid-size-display"
  ).textContent = `${newSize} x ${newSize}`;
  createGrid(newSize);
}

// Creation of grid
function createGrid(size) {
  const container = document.getElementById("grid-container");
  container.innerHTML = ""; // Clear existing grid
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("grid-square");
    gridSquare.addEventListener("mouseover", handleMouseOver);
    gridSquare.addEventListener("mousedown", handleMouseDown);
    container.appendChild(gridSquare);
  }
}

// Rainbow color mode
function setRainbowMode() {
  currentColor = "rainbow";
  setActiveButton("rainbow-mode");
}

// Eraser button action
function setEraser() {
  currentColor = "white";
  setActiveButton("eraser");
}

// Delete sketch button action 
function deleteSketch() {
  createGrid(16); // Reset to default 16x16 grid
  setActiveButton("delete");
}

function handleColorPicker(event) {
  currentColor = event.target.value;
}

// Musedown and mouseup to the grid container
const container = document.getElementById("grid-container");
container.addEventListener("mousedown", handleMouseDown);
container.addEventListener("mouseup", handleMouseUp);

// Initial grid 
createGrid(16);


// Button event for Color Mode
document.getElementById("color-mode").addEventListener("click", function () {
  toggleColorPicker();
  setActiveButton("color-mode");
});

document
  .getElementById("rainbow-mode")
  .addEventListener("click", setRainbowMode);
document.getElementById("eraser").addEventListener("click", setEraser);
document.getElementById("delete").addEventListener("click", deleteSketch);

// Attaches event listener to the grid size slider
document
  .getElementById("grid-size-slider")
  .addEventListener("input", handleGridSizeChange);

// Changes on the color picker
document
  .getElementById("color-picker")
  .addEventListener("input", handleColorPicker);

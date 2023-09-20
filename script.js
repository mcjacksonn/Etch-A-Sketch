// Initialize variables
let isDrawing = false;
let currentColor = "black";

// Function to handle mouse down event
function handleMouseDown(event) {
  isDrawing = true;
  handleMouseOver(event); // Color the square immediately
}

// Function to handle mouse up event
function handleMouseUp() {
  isDrawing = false;
}

// Function to handle mouseover event
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

// Function to toggle color picker visibility
function toggleColorPicker() {
  const colorPicker = document.getElementById("color-picker");
  if (colorPicker.style.display === "none") {
    colorPicker.style.display = "block";
  } else {
    colorPicker.style.display = "none";
  }
}

// Function to listen for color picker changes
function handleColorPicker(event) {
  currentColor = event.target.value;
}

// Function to create a grid
function createGrid(size) {
  const container = document.getElementById("grid-container");
  container.innerHTML = ""; // Clear existing grid
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("grid-square");
    gridSquare.addEventListener("mouseover", handleMouseOver);
    gridSquare.addEventListener("mousedown", handleMouseDown); // New line
    container.appendChild(gridSquare);
  }
}

// Function to reset and resize grid
function resetGrid() {
  const size = prompt("Enter the number of squares per side:", 16);
  if (size > 0 && size <= 100) {
    createGrid(size);
  } else {
    alert("Invalid size. Must be between 1 and 100.");
  }
}

// Function to set color mode
function setColorMode() {
  currentColor = prompt("Enter a color:", "black") || "black";
}

// Function to set rainbow mode
function setRainbowMode() {
  currentColor = "rainbow";
}

// Function to set eraser mode
function setEraser() {
  currentColor = "white";
}

// Function to delete the sketch
function deleteSketch() {
  createGrid(16); // Reset to default 16x16 grid
}

// Attach mousedown and mouseup event listeners to the grid container
const container = document.getElementById("grid-container");
container.addEventListener("mousedown", handleMouseDown);
container.addEventListener("mouseup", handleMouseUp);

// Initial grid creation
createGrid(16);

// Button events
document.getElementById("reset-button").addEventListener("click", resetGrid);
document.getElementById("color-mode").addEventListener("click", setColorMode);
document
  .getElementById("rainbow-mode")
  .addEventListener("click", setRainbowMode);
document.getElementById("eraser").addEventListener("click", setEraser);
document.getElementById("delete").addEventListener("click", deleteSketch);
// Listen for changes on the color picker
document
  .getElementById("color-picker")
  .addEventListener("input", handleColorPicker);

// Listen for clicks on the "Color Mode" button
document
  .getElementById("color-mode")
  .addEventListener("click", toggleColorPicker);


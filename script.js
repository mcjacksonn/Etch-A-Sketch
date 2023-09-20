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
  colorPicker.style.display =
    colorPicker.style.display === "none" ? "block" : "none";
}

// Function to set active button
function setActiveButton(buttonId) {
  const buttons = document.querySelectorAll("#sidebar button");
  buttons.forEach((btn) => btn.classList.remove("active"));
  const button = document.getElementById(buttonId);
  button.classList.add("active");
}

// Function to update and display grid size
function handleGridSizeChange(event) {
  const newSize = event.target.value;
  document.getElementById(
    "grid-size-display"
  ).textContent = `${newSize} x ${newSize}`;
  createGrid(newSize);
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
    gridSquare.addEventListener("mousedown", handleMouseDown);
    container.appendChild(gridSquare);
  }
}

// Function to set rainbow mode
function setRainbowMode() {
  currentColor = "rainbow";
  setActiveButton("rainbow-mode");
}

// Function to set eraser mode
function setEraser() {
  currentColor = "white";
  setActiveButton("eraser");
}

// Function to delete the sketch
function deleteSketch() {
  createGrid(16); // Reset to default 16x16 grid
  setActiveButton("delete");
}

function handleColorPicker(event) {
  currentColor = event.target.value;
}

// Attach mousedown and mouseup event listeners to the grid container
const container = document.getElementById("grid-container");
container.addEventListener("mousedown", handleMouseDown);
container.addEventListener("mouseup", handleMouseUp);

// Initial grid creation
createGrid(16);

// Button events
// Button event for Color Mode
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

// Attach event listener to the grid size slider
document
  .getElementById("grid-size-slider")
  .addEventListener("input", handleGridSizeChange);

// Listen for changes on the color picker
document
  .getElementById("color-picker")
  .addEventListener("input", handleColorPicker);

let isDrawing = false;

// Function to handle mouse down event
function handleMouseDown() {
  isDrawing = true;
}

// Function to handle mouse up event
function handleMouseUp() {
  isDrawing = false;
}

// Function to handle mouseover event
function handleMouseOver(event) {
  if (isDrawing) {
    event.target.style.backgroundColor = "black";
  }
}

// Function to create a grid
function createGrid(rows, cols) {
  const container = document.getElementById("grid-container");
  container.innerHTML = ""; // Clear existing grid
  container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

  for (let i = 0; i < rows * cols; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("grid-square");
    gridSquare.addEventListener("mouseover", handleMouseOver);
    container.appendChild(gridSquare);
  }
}

// Function to reset and resize grid
function resetGrid() {
  const size = prompt("Enter the number of squares per side:", 16);
  if (size > 0 && size <= 100) {
    createGrid(size, size);
  } else {
    alert("Invalid size. Must be between 1 and 100.");
  }
}

// Attach mousedown and mouseup event listeners to the grid container
const container = document.getElementById("grid-container");
container.addEventListener("mousedown", handleMouseDown);
container.addEventListener("mouseup", handleMouseUp);

// Initial grid creation
createGrid(16, 16);

// Button event for resetting the grid
document.getElementById("reset-button").addEventListener("click", resetGrid);

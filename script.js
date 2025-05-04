let squaresPerSide = 100;

function createGrid(squaresPerSide) {
  const gridContainerDiv = document.querySelector('.grid-container');
  const squareWidth = 100 / squaresPerSide;
  const totalSquares = Math.pow(squaresPerSide, 2);
  removeGrid();
  for (let i = 0; i < totalSquares; i++) {
    const div = document.createElement('div');
    div.style.flexBasis = squareWidth + "%";
    gridContainerDiv.appendChild(div);
  }
  addHoverClass();
};

createGrid(squaresPerSide);

function addHoverClass() {
  const squareDivs = document.querySelectorAll('div.grid-container div');
  squareDivs.forEach((div) => {
    div.addEventListener('mouseover', () => {
      div.classList.add('hovered');
    })
  });
}

const gridSizeBtn = document.querySelector('.grid-size-btn');
gridSizeBtn.addEventListener('click', () => {
  squaresPerSide = Number(getSquarePerSide());
  while
    (
    squaresPerSide <= 0 || squaresPerSide > 100 ||
    !Number.isInteger(squaresPerSide)
  ) {
    squaresPerSide = Number(getSquarePerSide(false));
  };
  createGrid(squaresPerSide);
});

function getSquarePerSide(firstTime = true) {
  if (firstTime) return prompt('How many square per side for the grid?');
  if (!firstTime) return prompt("Please enter a number between 1-100\nHow many square per side for the grid?");
}

function removeGrid() {
  const gridContainerDiv = document.querySelector('.grid-container');
  const numberOfSquares = gridContainerDiv.children.length;
  for (let i = 0; i < numberOfSquares; i++) {
    gridContainerDiv.removeChild(gridContainerDiv.firstElementChild);
  }
}

const clearButton = document.querySelector('.clear-btn');
clearButton.addEventListener('click', () => {
  createGrid(squaresPerSide);
})

let drawEnabled = true;

const drawButton = document.querySelector('.draw-btn');
drawButton.addEventListener('click', () => {
  switchDraw();
})

document.addEventListener('keydown', (e) => {
  if (e.code === 'Space') switchDraw();
});

function switchDraw() {
  drawEnabled = !drawEnabled;
  (drawEnabled) ? 
  drawButton.textContent = 'Draw (Space) - Enabled' : drawButton.textContent = 'Draw (Space) - Disabled';
}
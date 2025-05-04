let squaresPerSide = 16;


function createGrid(squaresPerSide) {
  const gridContainerDiv = document.querySelector('.grid-container');
  const totalSquares = Math.pow(squaresPerSide, 2);
  for (let i = 0; i < totalSquares; i++) {
    const div = document.createElement('div');
    div.textContent = i;
    gridContainerDiv.appendChild(div);
  }
};

createGrid(squaresPerSide);

const squareDivs = document.querySelectorAll('div.grid-container div');
squareDivs.forEach((div) => {
  div.addEventListener('mouseover', () => {
    div.classList.add('hovered');
  })
});

const gridSizeBtn = document.querySelector('.grid-size-btn');
gridSizeBtn.addEventListener('click', () => {
  squaresPerSide = Number(getSquarePerSide());
  while
  (
    squaresPerSide <= 0 ||
    squaresPerSide > 100 ||
    !Number.isInteger(squaresPerSide)
  ) {
    squaresPerSide = Number(getSquarePerSide(false));
  }
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
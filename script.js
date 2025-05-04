let squaresPerSide = 16;

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
      div.style.backgroundColor = generateRandomColor();
      div.style.opacity = increaseOpacity();
      div.classList.add('hovered');
    })
  });
}

const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

function getCharacters(index) {
  return hexCharacters[index];
}

function generateRandomColor() {
  let hexColor = "#";

  for (let position = 0; position < 6; position++) {
    const randomPosition = Math.floor ( Math.random() * hexCharacters.length )
    hexColor += getCharacters(randomPosition);
  }
  return hexColor;
}

let opacityValue = 0;

function increaseOpacity() {
  return opacityValue += 0.1;
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
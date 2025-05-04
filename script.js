function createGrid() {
  const gridContainerDiv = document.querySelector('.grid-container');
  for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.textContent = i;
    gridContainerDiv.appendChild(div);
  }
};

createGrid();

const squareDivs = document.querySelectorAll('div.grid-container div');
squareDivs.forEach((div) => {
  div.addEventListener('mouseover', ()=> { 
    div.classList.add('hovered');
  })
});

const gridSizeBtn = document.querySelector('.grid-size-btn');
gridSizeBtn.addEventListener('click', () => {
  console.log('clicked');
});
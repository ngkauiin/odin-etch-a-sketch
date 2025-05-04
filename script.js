function createGrid() {
  const gridContainerDiv = document.querySelector('.grid-container');
  for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.textContent = i;
    gridContainerDiv.appendChild(div);
  }
}

createGrid();
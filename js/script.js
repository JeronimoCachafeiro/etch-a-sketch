const container = document.querySelector('.container');

function createGrid() {
  for (let i = 0; i < 256; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('item');
    container.appendChild(newDiv);
  }
}

createGrid();
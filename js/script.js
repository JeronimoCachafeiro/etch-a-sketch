const container = document.querySelector('.container');

function createGrid() {
  for (let i = 0; i < 256; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('square');
    container.appendChild(newDiv);
  }
}

createGrid();

const squares = document.querySelectorAll('.square');
for (const square of squares) {
  square.addEventListener('mouseover', () => square.style.backgroundColor = 'white');
}
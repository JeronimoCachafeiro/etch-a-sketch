const container = document.querySelector('.container');
const square = document.querySelector('.square');

function createGrid(squaresPerSide) {
  for (let i = 0; i < (squaresPerSide * squaresPerSide); i++) {
    container.style.cssText = `grid-template-columns: repeat(${squaresPerSide}, 1fr);`
    const newDiv = document.createElement('div');
    newDiv.classList.add('square');
    newDiv.style.backgroundColor = 'black';
    container.appendChild(newDiv);
  }
}

createGrid(32);

const firstSquare = document.querySelector('.square');
const btn = document.createElement('button');
btn.textContent = 'Size'
document.body.insertBefore(btn, container);
btn.addEventListener('click', () => {
  let squaresPerSide = prompt('Choose the number of squares per side (max=100):');
  if (+squaresPerSide > 100) {
    squaresPerSide = 100;
  }
  container.innerHTML = '';
  createGrid(squaresPerSide);
  
});

container.addEventListener('mouseover', function(e) {

  if (e.target.matches('.square')) {
    e.target.style.backgroundColor = 'white';
  }
  
})
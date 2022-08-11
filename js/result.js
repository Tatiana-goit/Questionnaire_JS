const startPage = document.querySelector('.start__page');
const resultPage = document.querySelector('.result__page');
const resultInfo = document.querySelector('.result__info');
const newStartBtn = document.querySelector('.result-newStart__btn');

newStartBtn.addEventListener('click', () => newStart());

function newStart() {
  resultPage.style.display = 'none';
  startPage.style.display = 'block';
}

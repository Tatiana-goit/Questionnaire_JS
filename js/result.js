const startPage = document.querySelector('.start__page');
const resultPage = document.querySelector('.result__page');
const resultInfo = document.querySelector('.result__info');
const newStartBtn = document.querySelector('.result-newStart__btn');
const lastResultBtn = document.querySelector('.lastResult__btn');
const lastResultModal = document.querySelector('.lastResult__modal');
const lastResultList = document.querySelector('.lastResult__list');

newStartBtn.addEventListener('click', () => onClickNewStart());
lastResultBtn.addEventListener('click', () => {onClickshowResult();});

function onClickNewStart() {
  resultPage.style.display = 'none';
  startPage.style.display = 'block';
  lastResultModal.style.display = 'none';
  lastResultList;
}

function onClickshowResult() {
  lastResultModal.style.display = 'block';
  lastResultList.innerHTML = `<li></li>`;
  let arrayOfAnswers = JSON.parse(localStorage.getItem('nameOfArray'));
  arrayOfAnswers.map(el => {
    lastResultList.innerHTML += `<li> ${el*100/4} % </li>`;
  });
}


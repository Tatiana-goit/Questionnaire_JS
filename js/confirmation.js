const confirmationPage = document.querySelector('.confirmation__page');
const resultPage = document.querySelector('.result__page');
const confirmationBtn = document.querySelector('.confirmation__btn');
const resultInfo = document.querySelector('.result__info');

confirmationBtn.addEventListener('click', () => moveToResult());

function moveToResult() {
  confirmationPage.style.display = 'none';
  resultPage.style.display = 'block';
  localStorage.getItem('rightAnswers');
  let result = localStorage.getItem('rightAnswers');
  resultInfo.innerHTML = `<p class="result__text">${result} of 4</p>
    <p class="result__percent">${(result * 100) / 4} %</p>
    `;
}

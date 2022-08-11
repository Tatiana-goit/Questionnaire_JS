const confirmationPage = document.querySelector('.confirmation__page');
const resultPage = document.querySelector('.result__page');
const confirmationBtn = document.querySelector('.confirmation__btn');
const resultInfo = document.querySelector('.result__info');

confirmationBtn.addEventListener('click', () => moveToResult());

function moveToResult() {
  confirmationPage.style.display = 'none';
  resultPage.style.display = 'block';

  let arrayOfAnswers = JSON.parse(localStorage.getItem('nameOfArray'));
  let result = arrayOfAnswers[arrayOfAnswers.length-1]
  let persentResult = (result * 100) / 4;

  let comment = '';
  if (persentResult <= 10) {
    comment = 'Your result is very low';
  }
  if (persentResult > 10 && persentResult <= 30) {
    comment = 'Your result is low';
  }
  if (persentResult > 35 && persentResult <= 60) {
    comment = 'Your result is average';
  }
  if (persentResult > 60 && persentResult <= 75) {
    comment = 'Your result is good';
  }
  if (persentResult > 75 && persentResult <= 95) {
    comment = 'Your result is good';
  }
  if (persentResult > 95 && persentResult <= 100) {
    comment = 'Your result is excellent';
  }

  resultInfo.innerHTML = `<p class="result__text">${result} of 4</p>
    <p class="result__percent">${persentResult} %</p>
    <p class="result__commit">${comment}</p>
    `;
}

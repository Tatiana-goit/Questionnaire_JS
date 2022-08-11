const startPage = document.querySelector('.start__page');
const resultPage = document.querySelector('.result__page');
const resultInfo = document.querySelector('.result__info');
const newStartBtn = document.querySelector('.result-newStart__btn');
const lastResultBtn = document.querySelector('.lastResult__btn');
const lastResultModal = document.querySelector('.lastResult__modal');
const lastResultList = document.querySelector('.lastResult__list');

newStartBtn.addEventListener('click', () => onClickNewStart());
lastResultBtn.addEventListener('click', () => {
  onClickshowResult();
});

function onClickNewStart() {
  resultPage.style.display = 'none';
  startPage.style.display = 'block';
  lastResultModal.style.display = 'none';
  lastResultList;
}

function onClickshowResult() {
  // const clock = defineTime();
  lastResultModal.style.display = 'block';
  lastResultList.innerHTML = `<li></li>`;
  let arrayOfAnswers = JSON.parse(localStorage.getItem('nameOfArray'));
  arrayOfAnswers.map(el => {
    // lastResultList.innerHTML += `<li> ${clock}</li>`;
    lastResultList.innerHTML += `<li> ${el*100/4} % </li>`;
  });
}

// function defineTime() {
//   let date = new Date();
//   let hours = date.getHours();
//   let minutes = date.getMinutes();
//   let seconds = date.getSeconds();
//   if (hours < 10) {
//     hours = `0${hours}`;
//   }
//   if (minutes < 10) {
//     minutes = `0${minutes}`;
//   }
//   if (seconds < 10) {
//     seconds = `0${seconds}`;
//   }

//   let clock = `${hours}:${minutes}:${seconds}`;
//   return clock;
// }

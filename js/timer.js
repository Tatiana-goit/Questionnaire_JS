const timeEl = document.querySelector('.time');
const resultPage = document.querySelector('.result__page');
const quizPage = document.querySelector('.quiz__page');
const simpleTestBtn = document.querySelector('.simpleTest');
const difficultTestBtn = document.querySelector('.difficultTest');


simpleTestBtn.addEventListener('click', () => {
  let time = 10;
  let timerId = setInterval(() => {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    timeEl.innerHTML = `${minutes}:${seconds}`;
    time--;
    if (time < 0) {
      clearInterval(timerId);
      quizPage.style.display = 'none';
      resultPage.style.display = 'block';
      return;
    }
  }, 1000);
});

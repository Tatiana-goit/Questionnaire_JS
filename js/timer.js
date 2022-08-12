const timeEl = document.querySelector('.time');
const quizPage = document.querySelector('.quiz__page');
const confirmationPage = document.querySelector('.confirmation__page');
const simpleTestBtn = document.querySelector('.simpleTest');
const confirmationBtn = document.querySelector('.confirmation__btn');

simpleTestBtn.addEventListener('click', () => startTimer());

function startTimer() {
  let time = 10;
  // let time = 240;
  timeEl.innerHTML = `00:00`;
  let timerId = setInterval(() => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    timeEl.innerHTML = `${minutes}:${seconds}`;
    time--;
    if (time < 0) {
      quizPage.style.display = 'none';
      confirmationPage.style.display = 'block';
      return;
    }
  }, 1000);

  confirmationBtn.addEventListener('click', () => {
    clearInterval(timerId);
  });
}

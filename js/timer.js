const timeEl = document.querySelector('.time');
// const submitBtn = document.querySelector('.quiz__btn');
const resultPage = document.querySelector(".result__page")
const quizPage = document.querySelector(".quiz__page")
// const preliminaryResultsBtn = document.querySelector(
//   '.quiz__preliminaryResults',
// );

let time = 10;
let timerId = setInterval(updateTime, 1000);
function updateTime() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  timeEl.innerHTML = `${minutes}:${seconds}`;
  time--;
  console.log(time);
  if (time < 0) {
    clearInterval(timerId);
    quizPage.style.display = 'none';
    resultPage.style.display = 'block';
    return
  }
}



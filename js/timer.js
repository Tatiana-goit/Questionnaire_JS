const timeEl = document.querySelector('.time');

let time = 120;
setInterval(updateTime, 1000);
function updateTime() {
  const minutes = Math.floor(time/60);
  let seconds = time % 60;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  timeEl.innerHTML = `${minutes}:${seconds}`
  time--
//   if ()
}


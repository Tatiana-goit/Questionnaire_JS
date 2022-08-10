const startPage = document.querySelector(".start__page")
const quizPage = document.querySelector(".quiz__page")
const resultPage = document.querySelector(".result__page")
const resultInfo = document.querySelector(".result__info")
const newStartBtn = document.querySelector(".result-newStart__btn")
const preliminaryResultsBtn = document.querySelector(".quiz__preliminaryResults")

preliminaryResultsBtn.addEventListener("click", () => showResults())
newStartBtn.addEventListener("click", () => newStart())

function showResults() {
    quizPage.style.display = "none"
    preliminaryResultsBtn.style.display = "none"
    resultPage.style.display = "block"
    console.log(11111111111111111111111111111111111)
    let result = localStorage.getItem('sumRightAnswers');
    resultInfo.innerHTML = `<p class="result__text">${result} of 4</p>
    <p class="result__percent">${result*100/4} %</p>
    `
}

function newStart() {
    resultPage.style.display = "none"
    startPage.style.display = "flex"
}
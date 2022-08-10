const startPage = document.querySelector(".start__page")
const quizPage = document.querySelector(".quiz__page")
const resultPage = document.querySelector(".result__page")
const resultInfo = document.querySelector(".resultInfo")
const newStartBtn = document.querySelector(".newStart")
const preliminaryResultsBtn = document.querySelector(".quiz__preliminaryResults")

preliminaryResultsBtn.addEventListener("click", () => showResults())
newStartBtn.addEventListener("click", () => newStart())

function showResults() {
    quizPage.style.display = "none"
    preliminaryResultsBtn.style.display = "none"
    resultPage.style.display = "flex"
    let result = localStorage.getItem('sumRightAnswers');
    resultInfo.innerHTML = `<p class="resultText">Ваш результат ${result}</p>`
}

function newStart() {
    resultPage.style.display = "none"
    startPage.style.display = "flex"
}
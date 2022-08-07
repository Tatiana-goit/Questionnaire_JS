const startPage = document.querySelector(".start")
const quizPage = document.querySelector(".quiz")
const resultPage = document.querySelector(".result")
const resultInfo = document.querySelector(".resultInfo")
const newStartBtn = document.querySelector(".newStart")
const preliminaryResultsBtn = document.querySelector(".preliminaryResults")

preliminaryResultsBtn.addEventListener("click", () => showResults())
newStartBtn.addEventListener("click", () => newStart())

function showResults() {
    quizPage.style.display = "none"
    resultPage.style.display = "block"
    let result = localStorage.getItem('sumRightAnswers');
    resultInfo.innerHTML = `<p class="resultText">Ваш результат ${result}</p>`
}

function newStart() {
    resultPage.style.display = "none"
    startPage.style.display = "block"

}
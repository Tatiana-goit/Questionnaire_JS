const startPage = document.querySelector(".start")
const quizPage = document.querySelector(".quiz")
const simpleTestBtn = document.querySelector(".simpleTest")
const difficultTestBtn = document.querySelector(".difficultTest")

function onClickSimpleTest() {
    startPage.style.display = "none"
    quizPage.style.display = "block"
}

function onClickdifficultTest(){
    startPage.style.display = "none"
    quizPage.style.display = "block"
    console.log("Пока недоступен сложный тест")
    
}

simpleTestBtn.addEventListener("click", ()=>onClickSimpleTest())
difficultTestBtn.addEventListener("click", ()=>onClickdifficultTest())
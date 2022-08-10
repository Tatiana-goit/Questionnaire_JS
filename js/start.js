const startPage = document.querySelector(".start__page")
const quizPage = document.querySelector(".quiz__page")
const simpleTestBtn = document.querySelector(".simpleTest")
const difficultTestBtn = document.querySelector(".difficultTest")

function onClickSimpleTest() {
    startPage.style.display = "none"
    quizPage.style.display = "flex"
}

function onClickdifficultTest(){
    // startPage.style.display = "none"
    // quizPage.style.display = "flex"
    alert("This test is not yet available.")
    
}

simpleTestBtn.addEventListener("click", ()=>onClickSimpleTest())
difficultTestBtn.addEventListener("click", ()=>onClickdifficultTest())
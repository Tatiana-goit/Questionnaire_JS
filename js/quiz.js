import questions from "../info.json" assert { type: "json" };

const quizPage = document.querySelector(".quiz__page")
const confirmationPage = document.querySelector(".confirmation__page")
const headerContainer = document.querySelector('.quiz-header');
const listContainer = document.querySelector('.quiz-list');
const submitBtn = document.querySelector('.quiz__btn');

let rightAnswers = 0;
let questionIndex = 0;

submitBtn.addEventListener('click', () => clickReply());

function clearPage() {
  headerContainer.innerHTML = '';
  listContainer.innerHTML = '';
}

function showQuestion() {
  // Question
  const title = questions[questionIndex]['question'];
  headerContainer.innerHTML = `<h2 class="quiz__title">${title}</h2>`;

  // Answers
  questions[questionIndex]["answers"].map((el, index) => {
    const list = 
    `<li  class="quiz-list__item">
      <label class="quiz-list__label">
        <input type="radio" value=${index + 1} class="quiz-list__input" name="answer"/>
        <span class="quiz-list__answer">${el}</span>
      </label>
    </li>`;
    listContainer.innerHTML += list;
  });
}

function clickReply() {
  const checedRadioBtn = listContainer.querySelector('input:checked');

  if (!checedRadioBtn) {
    submitBtn.blur();
    alert('Choose an answer');
    return;
  }

  const userAnswer = +checedRadioBtn.value;
  const correctAnswer = questions[questionIndex]['correct'];

  if (userAnswer === correctAnswer) {
    rightAnswers++;
  }

  if (questionIndex !== questions.length - 1) {
    questionIndex++;
    clearPage();
    showQuestion();
    return;
  } else {
    clearPage();
    localStorage.setItem('rightAnswers', rightAnswers);
    quizPage.style.display = 'none';
    confirmationPage.style.display = 'block';
    rightAnswers = 0;
    questionIndex = 0;
    showQuestion();
  }
}

clearPage();
showQuestion();




// const URL =
//   'https://docs.google.com/spreadsheets/d/e/2PACX-1vT15nH81WQdOfeDMIwFoHUbDYeiYzK8JdmEd9_Ui2aHWtNWD3s1spHszZxrGI2LgG9bAzBe5ZXd0iRY/pub?gid=0&single=true&output=tsv';

// function parseGoogleSheet(url) {
//   return fetch(url)
//     .then(r => r.text())
//     .then(parseText);

//   function parseText(text) {
//     const dataArr = text.split('\r\n').map(row => row.split('\t'));
//     const names = dataArr.shift();
//     const data = dataArr.map(row =>
//       row.reduce((acc, el, i) => {
//         acc[names[i]] = el;
//         return acc;
//       }, {}),
//     );
//     return data;
//   }
//   return data;
// }

// const questions = await parseGoogleSheet(URL);
// console.log(questions);

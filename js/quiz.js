// import questions from "../info.json" assert { type: "json" };

const quizPage = document.querySelector('.quiz__page');
const confirmationPage = document.querySelector('.confirmation__page');
const headerContainer = document.querySelector('.quiz-header');
const listContainer = document.querySelector('.quiz-list');
const submitBtn = document.querySelector('.quiz__btn');

const modal = document.querySelector('.quiz__modal');
const chooseBtn = document.querySelector('.quiz__btn-choose');
chooseBtn.addEventListener('click', () => chooseBtn.style.display = 'none');
listContainer.addEventListener('click', () => chooseBtn.style.display = 'none');


let rightAnswers = 0;
let questionIndex = 0;
let index = 0;
let arrayOfAnswers = [];
let checkModal = false;

submitBtn.addEventListener('click', () => onClickReply());

const questions = await fetch(
  `https://62ecf1bba785760e6760a342.mockapi.io/quiz`,
).then(res => res.json());

function clearPage() {
  headerContainer.innerHTML = '';
  listContainer.innerHTML = '';
}

function showQuestion() {
  // Question
  const title = questions[questionIndex]['question'];
  headerContainer.innerHTML = `<h2 class="quiz__title">${title}</h2>`;

  // Answers
  questions[questionIndex]['answers'].map((el, i) => {
    const list = `<li  class="quiz-list__item">
      <label class="quiz-list__label">
        <input type="radio" value=${
          i + 1
        } class="quiz-list__input" name="answer"/>
        <span class="quiz-list__answer">${el}</span>
      </label>
    </li>`;
    listContainer.innerHTML += list;
  });
}

function onClickReply() {
  const checedRadioBtn = listContainer.querySelector('input:checked');

  if (!checedRadioBtn) {
    chooseBtn.style.display = 'block';
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

    if (arrayOfAnswers.length !== 0) {
      JSON.parse(localStorage.getItem('nameOfArray'));
    }
    arrayOfAnswers.push(rightAnswers);
    localStorage.setItem('nameOfArray', JSON.stringify(arrayOfAnswers));

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

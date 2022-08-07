  import questions from "../info.json" assert { type: "json" };

  const headerContainer = document.querySelector('.quiz-header')
  const listContainer = document.querySelector('.quiz-list')
  const submitBtn = document.querySelector('.quiz-submit')
  const preliminaryResultsBtn = document.querySelector(".preliminaryResults")


  let rightAnswers = 0
  let questionIndex = 0

  submitBtn.addEventListener('click', () => clickReply())


  function clearPage() {
    headerContainer.innerHTML = ''
    listContainer.innerHTML = ''
  }

  function showQuestion() {
    // Question
    const title = questions[questionIndex]['question']
    headerContainer.innerHTML = `<h2>${title}</h2>`

    // Answers
    questions.map((question, index) => {
      const list = `<li  class="quiz-list__item">
                              <label class="quiz-list__label">
                                  <input type="radio" value=${
                                    index + 1
                                  } class="answer" name="answer" />
                               <span class="quiz-list__answer">${[
                                 question['answers'][index],
                               ]}
                               </span>
                               </label>
                      </li>`
      listContainer.innerHTML += list
    })
  }

  
  function clickReply() {
    const checedRadioBtn = listContainer.querySelector('input:checked')

    if (!checedRadioBtn) {
      submitBtn.blur()
      alert('Выберите вариант ответа')
      return
    }

    const userAnswer = +checedRadioBtn.value
    const correctAnswer = questions[questionIndex]['correct']

    if (userAnswer === correctAnswer) {
      rightAnswers++
    }

    if (questionIndex !== questions.length - 1) {
      questionIndex++
      clearPage()
      showQuestion()
      return
    } else {
      clearPage()
      localStorage.setItem('sumRightAnswers', rightAnswers);
      questionIndex = 0
      rightAnswers = 0
      submitBtn.style.display="none"
      preliminaryResultsBtn.style.display="block"
    }
  }

clearPage()
showQuestion()
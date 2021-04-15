const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort()
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Remember level Question',
        answers: [
          { text: 'Click here', correct: true },
        ]
      },
  {
    question: 'How many bit microcontroller is 8051?',
    answers: [
      { text: '2 bit', correct: false },
      { text: '4 bit', correct: false },
      { text: '8 bit', correct: true },
      { text: '16 bit', correct: false }
    ]
  },
  {
    question: '8051 microcontroller is a _______',
    answers: [
      { text: '40 pin', correct: true },
      { text: '16 pin', correct: false },
      { text: '32 pin', correct: false },
      { text: '48 pin', correct: false }
    ]
  },
  {
    question: 'Number of banks in 8051 ',
    answers: [
      { text: '2', correct: false },
      { text: '4', correct: true },
      { text: '6', correct: false },
      { text: '8', correct: false }
    ]
  },
  {
    question: 'Understand level Question',
    answers: [
      { text: 'Click here', correct: true },
    ]
  },
  {
    question: 'Explain register in 8051 ?',
    answers: [
        { text: 'a) Registers are used in the CPU to store information on temporarily basis which could be data to be processed', correct: false },
        { text: 'b) Address pointing to the data which is to be fetched', correct: false },
        { text: 'a & b both', correct: true },
        { text: 'none', correct: false }
    ]
  },
  {
    question: '8051 series has how many 16 bit registers?',
    answers: [
      { text: '2', correct: true },
      { text: '0', correct: false },
      { text: '1', correct: false },
      { text: '3', correct: false }
    ]
  },
  {
    question: 'A register bank is used for the programmable registers used by assembly language programmers ',
    answers: [
      { text: 'Temporarily value store', correct: false },
      { text: 'To store value', correct: true },
      { text: 'All of above', correct: false },
      { text: 'none', correct: false }
    ]
  },
  {
    question: 'Apply level Question',
    answers: [
      { text: 'Click here', correct: true },
    ]
  },
  {
    question: 'Given example from which addressing mode MOVA, #0AFH;',
    answers: [
      { text: 'Register addressing mode', correct: false },
      { text: 'Direct Addressing Mode', correct: false },
      { text: 'Immediate addressing mode', correct: true },
      { text: 'None of above', correct: false }
    ]
  },
  {
    question: 'Example of Direct Addressing mode ',
    answers: [
      { text: 'MOVCA, @A+PC;', correct: false },
      { text: 'MOVCA, PC;', correct: false },
      { text: 'RLA;', correct: false },
      { text: 'MOVR2, 45H;', correct: true }
    ]
  },
  {
    question: 'AT89C2051 has RAM of: ',
    answers: [
        { text: '128 bytes', correct: true },
        { text: '256 bytes', correct: false },
        { text: '62 bytes', correct: false },
        { text: '512 bytes', correct: false }
    ]
  },
  {
    question: 'Analyze level Question',
    answers: [
      { text: 'Click here', correct: true },
    ]
  },
  {
    question: 'Intel 8051 follows which architecture? ',
    answers: [
      { text: 'Harvard Architecture ', correct: true },
      { text: 'Neumann Architecture ', correct: false },
      { text: 'IBM', correct: false },
      { text: 'none of above', correct: false }
    ]
  },
  {
    question: 'Disadvantages of microcontroller',
    answers: [
      { text: 'The microcontroller cannot interface high power devices directly.', correct: false },
      { text: 'It has more complex structure as compared to microprocessor', correct: false },
      { text: 'It only performed limited number ', correct: false },
      { text: 'All of above', correct: true }
    ]
  },
  {
    question: 'How are the status of the carry, auxiliary carry and parity flag affected if the write instruction MOV A,#9C ADD A,#64H',
    answers: [
      { text: 'CY=0,AC=0,P=0', correct: false },
      { text: 'CY=1,AC=1,P=0', correct: true },
      { text: 'CY=0,AC=1,P=0', correct: false },
      { text: 'CY=1,AC=1,P=1', correct: false }
    ]
  },
  {
    question: 'Evaluate level Question',
    answers: [
      { text: 'Click here', correct: true },
    ]
  },
  {
    question: 'The first microprocessor  introduced in 1971 was of ______ value ',
    answers: [
      { text: '2 bit', correct: true },
      { text: '4 bit', correct: false },
      { text: '8 bit', correct: false },
      { text: '16 bit', correct: false }
    ]
  },
  {
    question: 'Microprocessors solving computing consists of  ',
    answers: [
      { text: 'ALU', correct: false },
      { text: 'register array', correct: false },
      { text: 'Control unit ', correct: false },
      { text: 'All of the above', correct: true }
    ]
  },
  {
    question: 'On power up, the 8051 uses which RAM locations for register R0- R7 ',
    answers: [
      { text: '00-2F', correct: false },
      { text: '00-07', correct: true },
      { text: '00-7F', correct: false },
      { text: '00-0F', correct: false }
    ]
  },
  {
    question: 'Create level Question',
    answers: [
      { text: 'Click here', correct: true },
    ]
  },
  {
    question: 'Create bit pattern for entering Bank 2 register  ',
    answers: [
      { text: '11', correct: false },
      { text: '10', correct: false },
      { text: '01', correct: true },
      { text: '00', correct: false }
    ]
  },
  {
    question: 'The bus system is created using ________  design ',
    answers: [
      { text: 'Pascal', correct: false },
      { text: 'Dennis Ritchie ', correct: false },
      { text: 'Charles Babbage', correct: false },
      { text: 'Von Neumann', correct: true }
    ]
  },
  {
    question: 'Which pin provides a reset option in 8051? ',
    answers: [
      { text: 'Pin 1', correct: false },
      { text: 'Pin 9', correct: true },
      { text: 'Pin 11', correct: false },
      { text: 'Pin 8', correct: false }
    ]
  }
]
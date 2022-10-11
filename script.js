// Making delay and loading screen for quiz!
const loader = document.querySelector(".loader__wrapper");

window.addEventListener(
  "load",
  function (load) {
    window.removeEventListener("load", load, false);

    setTimeout(function () {
      loader.style.display = "none";
    }, 2500);
  },
  false
);

const quizData = [
  {
    question:
      "1. The CSS property used to control the element’s font-size is__________",
    a: "font-size",
    b: "text-size",
    c: "text-style",
    d: "None",
    correct: "a",
  },
  {
    question:
      "2. The HTML attribute used to define the internal stylesheet is___________",
    a: "style",
    b: "<style>",
    c: "<link>",
    d: "<script>",
    correct: "b",
  },
  {
    question:
      "3. Which of the following CSS property is used to set the background image of an element?",
    a: "background-color",
    b: "background-image",
    c: "background-attachment",
    d: "None",
    correct: "b",
  },
  {
    question:
      "4. Which of the following is the correct syntax to display the hyperlinks without any underline?",
    a: "a {decoration : no-underline;}",
    b: "a {text-decoration : underline;}",
    c: "a {text-decoration : none;}",
    d: "None",
    correct: "c",
  },
  {
    question:
      "5. Which of the following is the correct syntax to make the background-color of all paragraph elements to yellow?",
    a: "all {background-color : yellow;}",
    b: "p {background-color : #yellow;}",
    c: "p {background-color : yellow;}",
    d: "all p {background-color : #yellow;}",
    correct: "c",
  },
  {
    question:
      "6. Which of the following property is used as the shorthand property for the padding properties?",
    a: "padding-right",
    b: "padding-left",
    c: "padding",
    d: "All of the above",
    correct: "c",
  },
  {
    question: "7. How to select the elements with the class name “example”?",
    a: "example",
    b: "#example",
    c: "Class example",
    d: ".example",
    correct: "d",
  },
  {
    question: "8. The CSS property used to make the text bold is___________",
    a: "weight: bold",
    b: "font-weight : bold",
    c: "style: bold",
    d: "font: bold",
    correct: "b",
  },
  {
    question:
      "9. The property in CSS used to change the background color of an element is_____________",
    a: "background-color",
    b: "color",
    c: "bgcolor",
    d: "None",
    correct: "a",
  },
  {
    question:
      "10. Which of the following syntax is correct in CSS to make each word of a sentence start with a capital letter?",
    a: "transform : capitalize;",
    b: "text-style : capital;",
    c: "text-transform : capital;",
    d: "text-transform : capitalize;",
    correct: "a",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.querySelector(".question");
const a_text = document.getElementById("a__text");
const b_text = document.getElementById("b__text");
const c_text = document.getElementById("c__text");
const d_text = document.getElementById("d__text");
const sumbitBtn = document.getElementById("submit");
const lastScreen = document.querySelector(".ending__container");
const lastBtn = document.querySelector(".lastBtn");

let currentScore = 0;
let currentQuiz = 0;

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswer() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

sumbitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      currentScore++;
    }
    currentQuiz++;
  }

  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    currentQuiz = 0;

    lastScreen.classList.remove("hidden");

    quiz.classList.add("hidden");

    lastScreen.innerHTML = `<h2>You answered ${currentScore}/${quizData.length} questions correctly </h2>`;

    if (currentScore === 10) {
      lastScreen.style.color = "#90EE90";
    }
    if (currentScore === 0) {
      lastScreen.style.color = "red";
    }
    lastBtn.classList.remove("hidden");
    lastBtn.onclick = function () {
      quiz.classList.remove("hidden");
      lastScreen.classList.add("hidden");
      lastBtn.classList.add("hidden");
      currentScore = 0;
      loadQuiz();
    };
  }
});

//when press start will generate question.
const questionSec = document.querySelector('#questionSec');
const displayText = document.querySelector('#displaytext');
const start = document.querySelector('#start');
const question = document.querySelector('#question');
const answer1 = document.querySelector('#answer1');
const answer2 = document.querySelector('#answer2');
const answer3 = document.querySelector('#answer3');
const answer4 = document.querySelector('#answer4');
let p = document.querySelectorAll('.lista');
let btn = document.querySelector('#btn')


//console.log(p);
//timer will start
let count = 15;
const timerLeft = document.querySelector('span');
let timer;
let isPlay = true;
//questions will change to other questions


const questions = [{
  question: "What liquid substance invented in 1926 is used in a car's cooling system?",
  answer: {
    A: 'Oil',
    B: 'Washer Fluid',
    C: 'Antifreeze',
    D: 'Water'
  },
  rightAnswer: 'Antifreeze'
}, {
  question: "Which car company uses the tagline 'The ultimate driving machine'?",
  answer: {
    A: 'Audi',
    B: 'BMW',
    C: 'Honda',
    D: 'Toyota'
  },
  rightAnswer: 'BMW'
}, {
  question: 'What car company came out with the RX-8 in 2004?',
  answer: {
    A: 'Mazda',
    B: 'BMW',
    C: 'Mercedes',
    D: 'Toyota'
  },
  rightAnswer: 'Mazda'
}, {
  question: 'What car manufacturer makes the Altima?',
  answer: {
    A: 'Mazda',
    B: 'Nissan',
    C: 'Mercedes',
    D: 'Ford'
  },
  rightAnswer: 'Nissan'
}, {
  question: 'What was the first Japanese car to be introduced in the United States?',
  answer: {
    A: 'Suzuki',
    B: 'Mitsubishi',
    C: 'Honda',
    D: 'Toyota'
  },
  rightAnswer: 'Honda'
}];




let currentI = 0;


function questionGen() {
  while (currentI < 5) {


    question.textContent = `${questions[currentI].question}`;
    answer1.textContent = `${questions[currentI].answer.A}`;
    answer2.textContent = `${questions[currentI].answer.B}`;
    answer3.textContent = `${questions[currentI].answer.C}`;
    answer4.textContent = `${questions[currentI].answer.D}`;

    p.forEach(function (button) {
      console.log(button);
      button.addEventListener('click', function () {

        console.log(this.textContent)
        if (this.textContent !== questions[currentI].rightAnswer) {

          questionSec.textContent = 'Wrong Answer';

        } else {
          questionSec.textContent = 'Correct Answer';
        }

      })

    })
    currentI++;




  }
}

questionGen()
















function startGame() {
  if (isPlay) {

    timer = setInterval(function () {
      count--;
      timerLeft.textContent = count;
      if (count <= 0) {
        clearInterval(timer)
        questionSec.textContent = 'Times UP!!!!';
        isPlay = false
      }
    }, 1000);


  }
}

start.addEventListener('click', startGame);

//if answer correct 
// correct answer and generate next question, add time to timer by 5
// else  
// wrong answer and generate next question, sub time to timer by 5
// when complete will ask user to input their name
//stored user score and display with user name
//info and score will store for the next user to break record.
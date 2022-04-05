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
let btn = document.querySelector('#btn');
let next = document.querySelector('.next');
const isCorrect = document.querySelector('.iscorrect');
const reset = document.querySelector('#reset');
//console.log(p);
//timer will start
let count = 150;
let count2 = 1;
let timer2;
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
},{
  question: 'When was the Acura NSX first released?',
  answer: {
    A: '1980',
    B: '1995',
    C: '1990',
    D: '1991'
  },
  rightAnswer: '1990'
},{
  question: 'Which of these is NOT a system within a car?',
  answer: {
    A: 'Fuel',
    B: 'Yaw',
    C: 'Exhaust',
    D: 'Transmission'
  },
  rightAnswer: 'Yaw'
},{
  question: '"Alignment" is an aspect of the _____ system.',
  answer: {
    A: 'Fuel',
    B: 'Cooling',
    C: 'Exhaust',
    D: 'Steering'
  },
  rightAnswer: 'Steering'
},{
  question: 'Most modern cars run on a ____-stroke gasoline engine.',
  answer: {
    A: '2',
    B: '3',
    C: '8',
    D: '4'
  },
  rightAnswer: '4'
},{
  question: 'Where does the four-stroke cycle take place?',
  answer: {
    A: 'In the carburetor',
    B: 'In the cylinders',
    C: 'In the radiator',
    D: 'In the starter'
  },
  rightAnswer: 'In the cylinders'
}];




let currentI = 0;


function questionGen() {
  if (document.querySelector('.front')) {
    questionSec.removeChild(questionSec.firstElementChild);
  }
  btn.style.display = 'block';
  if (currentI < questions.length) {
    question.textContent = `${questions[currentI].question}`;
    answer1.textContent = `${questions[currentI].answer.A}`;
    answer2.textContent = `${questions[currentI].answer.B}`;
    answer3.textContent = `${questions[currentI].answer.C}`;
    answer4.textContent = `${questions[currentI].answer.D}`;

  } else {
    // function to stop time and pop up score
   stopTime();
    //init()
    renderList()
  
  }

  checkAnswer();
  
  isPlay = false
}




function handleListeners() {

  console.log(this.textContent)
  if (this.textContent !== questions[currentI].rightAnswer) {
    //questionSec.textContent = 'Wrong Answer';
    isCorrect.textContent = 'Wrong Answer'
    timer2 = setInterval(function () {
      count2--;
      if (count2 <= 0) {
        clearInterval(timer2)
        isCorrect.textContent = '';
      }

    }, 1000);

    count -= 5;
    currentI++;
    p.forEach(function (button) {
      button.removeEventListener('click', handleListeners);
    })
    questionGen()
  } else {
    //questionSec.textContent = 'Correct Answer';
    isCorrect.textContent = 'Correct Answer'
    timer2 = setInterval(function () {
      count2--;
      if (count2 <= 0) {
        clearInterval(timer2)
        isCorrect.textContent = '';
      }

    }, 1000);
    count += 10;
    currentI++;
    p.forEach(function (button) {
      button.removeEventListener('click', handleListeners);
    })
    questionGen()
  }
}

function checkAnswer() {
  if (currentI === question.length){

   isPlay = false

  } else {
  p.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', handleListeners)

  })
}
}

let stopTime = function stop() {
  clearInterval(timer);

}

function renderList() {
  

  let user = prompt('Enter your name to see your score');
  console.log(user)
  if (document.querySelector('#questionSec')) {
    questionSec.removeChild(questionSec.firstElementChild);
    questionSec.removeChild(questionSec.firstElementChild);
    questionSec.removeChild(questionSec.firstElementChild);
  
    var listEl = document.createElement("ol");
    //listEl.innerHTML = '';
    listEl.textContent = 'Your Score';
    questionSec.appendChild(listEl);
   
    
    var scores = JSON.parse(localStorage.getItem("score"))||[];
    stored(user,scores)
    scores.forEach(scored =>{
    var newli = document.createElement("li");
    newli.textContent =  `${scored.userName.trim()} score is: ${scored.highScore}`;
    listEl.appendChild(newli)
})
    }
    
 
  


  
  


function stored (userName,score){
  
  let scoreList = {
    userName : userName,
    highScore: count
  };
    score.push(scoreList);
    localStorage.setItem('score',JSON.stringify(score));
    console.log(score)
  }
}


  








function startGame() {
  if (isPlay) {
    questionGen()
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
reset.addEventListener('click',function (){
  location.reload();
})



//if answer correct 
// correct answer and generate next question, add time to timer by 5
// else  
// wrong answer and generate next question, sub time to timer by 5
// when complete will ask user to input their name
//stored user score and display with user name
//info and score will store for the next user to break record.
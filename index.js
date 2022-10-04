
var readlineSync = require("readline-sync");

var score = 0;

var highScores = [
  {
    name: "Satyam",
    score: 5,
  },

  {
    name: "Anonymous",
    score: 4,
  },
]

var questions = [{
  question: "Where is my birth Place? ",
  answer: "Patna"
}, {
  question: "Who is my favorite supervillain? ",
  answer: "Joker"
},
{
  question: "Where do I work? ",
  answer: "highradius"
},
{
  question:"Who is my favourite Super Hero ?",
  answer:"Batman"
},
{
  question:"Which is my favorite Anime ?",
  answer:"Naruto"
}];



// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("Your Current Score: ", score);
  console.log("-*-*-*-*-*-*-")
}

function playGame() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to DO YOU KNOW Satyam ?");

playGame();
console.log("YAY! You Scored: ", score);
console.log("Check out the latest high scores ");
//function for checking highscore and printing it.

highScores.map(score => console.log(score.name, " : ", score.score))

var readlineSync = require("readline-sync");
var score = 0;
var chalk = require("chalk");

question1 = {
  question: "What is my name? ",
  answer: "Tunir"
}
question2 = {
  question: "Who is my favorite superhero? ",
  answer: "Spiderman"
}
question3 = {
  question: "Which is my favorite sad song? ",
  answer: "Channa Meraya"
}
question4 = {
  question: "Where do i live? ",
  answer: "Gwalior"
}

questionList = [question1,question2,question3,question4];

function quiz(question, userInput){
  if (question.answer === userInput){
    score++;
    console.log(chalk.green("You are correct."));
  }else{
    console.log(chalk.red("You are wrong."));
  }
};

console.log(chalk.blue("-----------------------------------------------------"));
console.log(chalk.blue("-------- Welcome to HOW WELL DO YOU KNOW ME! --------"));
console.log(chalk.blue("-----------------------------------------------------"));

console.log(chalk.magenta("Please note *** "));
console.log(chalk.magenta("Each correct answer will net you 1 points. No point deduction for wrong answers. "));
console.log("---===---------===---------===---------===---------");
for (var i = 0; i < questionList.length; i++){
  userInput = readlineSync.question(questionList[i].question);
  quiz(questionList[i], userInput);
  console.log("---===---------===---------===---------===---------");
}

console.log("Your Final Score: " + score);


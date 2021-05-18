const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
//let candidateAnswer;
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];
let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"
];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question ("What is your name? ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
 let tempAnswer;
 
 for (let x=0; x<5; x++){
  tempAnswer = input.question (questions[x]);
  candidateAnswers[x] = tempAnswer;
  console.log();
 }
 /*
candidateAnswers[0] = input.question (questions[0]);
candidateAnswers[1] = input.question (questions[1]);
candidateAnswers[2] = input.question (questions[2]);
candidateAnswers[3] = input.question (questions[3]);
candidateAnswers[4] = input.question (questions[4]);*/
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

/*  if (candidateAnswer === correctAnswer){
  grade = "PASS";
  console.log ("YOU PASSED!")
} else {
  grade = "FAIL";
  console.log ("Sorry, You didn't pass.")
}*/
let status;
let correct = 0;

if(candidateAnswers[0].toUpperCase()===correctAnswers[0].toUpperCase()){
  correct = correct + 1;
}
if(candidateAnswers[1].toUpperCase()===correctAnswers[1].toUpperCase()){
  correct = correct + 1;
}
if(candidateAnswers[2].toUpperCase()===correctAnswers[2].toUpperCase()){
  correct = correct + 1;
}
if(candidateAnswers[3].toUpperCase()===correctAnswers[3].toUpperCase()){
  correct = correct + 1;
}
if(candidateAnswers[4].toUpperCase()===correctAnswers[4].toUpperCase()){
  correct = correct + 1;
}

  let grade=0;
    grade = (correct / 5)*100;
 //   console.log (correct);
 //   console.log(grade);
    
    if (grade >= 80){
      status = "PASSED";
    }
    else{
      status = "FAILED";
    }

  

console.log();
console.log("Candidate Name: " + candidateName);
console.log ("1) " + questions[0]);
console.log("Your Answer: " + candidateAnswers[0]);
console.log("Correct Answer: " + correctAnswers[0]);

console.log();
console.log ("2) "+ questions[1]);
console.log("Your Answer: " + candidateAnswers[1]);
console.log("Correct Answer: " + correctAnswers[1]);

console.log();
console.log ("3) "+ questions[2]);
console.log("Your Answer: " + candidateAnswers[2]);
console.log("Correct Answer: " + correctAnswers[2]);

console.log();
console.log("4) "+ questions[3]);
console.log("Your Answer: " + candidateAnswers[3]);
console.log("Correct Answer: " + correctAnswers[3]);

console.log();
console.log("5) "+ questions[4]);
console.log("Your Answer: " + candidateAnswers[4]);
console.log("Correct Answer: " + correctAnswers[4]);

console.log();
console.log(">>> Overall Grade: " + grade + "% (" + correct + " of 5 responses correct) <<<");
console.log(">>> Status: " + status + " <<<");

return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log();
  console.log ("Hello " + candidateName + "!");
  console.log();
  askQuestion();
  console.log();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
 // candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
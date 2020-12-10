const chalk = require('chalk');
var wrap = require('word-wrap');
console.log(chalk.yellow.bgWhite.bold("------------------- Build your Story ------------------"),'\n');
var readlineSync=require("readline-sync");
var userName=readlineSync.question("Hey there story creator! What do I call you - ");
console.log("\n","Hi " +userName +", help Cinderella to get her 'Happily Ever After'","\n");
console.log("-------------------------------------------------",'\n');
console.log(chalk.blue.bgWhite.bold("This is how her Story began..."),"\n");
console.log(wrap(chalk.blue.bgWhite.bold("ONCE UPON A TIME a girl named Cinderella lived with her stepmother and two stepsisters after losing her Parents. One day, big news came to town. The King invited all the young ladies to a ball to  find a bride for the Prince......")));
console.log("-------------------------------------------------",'\n');
var score=3;
var question_1 = {
  question: "What Should Step Mother do?",
  optionA: "Let Cinderella go to the ball",
  optionB: "No, don't let her go",
}
var question_2 = {
  question: "Poor Cinderella doesn't have a dress for the ball, What should she do?",
  optionA: "Request her Stepmother to lend a dress",
  optionB: "Make her own dress",
}
var question_3 = {
  question: "Cindrella's Step sisters saw her walking down the attic in her beautiful dress. What should they do?",
  optionA: "Become Jealous and spoil her dress",
  optionB: "Wish her Luck",
}
var question_4 = {
  question: "Her Dress is ruined!! What Should Cindrella do? ",
  optionA: "Ask her fairy God Mother's Help",
  optionB: "Go to ball in her ordinary dress",
}
var question_5 = {
  question: "Cinderella Reached the ball in a gorgeous gown but magic lasts only till last bell of midnight. what do you want her to do when clock strikes? ",
  optionA: "Run away from the prince & lose her glass shoe",
  optionB: "Stay & tell Prince her story and confess her love",
}
var question_6 = {
  question: "Oh no! Prince lost her. What should the Prince do? ",
  optionA: "Serach the whole kingdom for the feet that fits the shoe",
  optionB: "Check CCTV footage",
}
var question_7 = {
  question: "Cinderella Reached the ball in her ordinary country girl dress. What will happen?",
  optionA: "She is humiliated by the crowd",
  optionB: "Prince falls for her simple natural beauty",
}
var question_8 = {
  question: "Cinderella is Humiliated & Nervous. What should she do?",
  optionA: "Gather courage and Meet the Prince",
  optionB: "Request help from Fairy God Mother to have a Makeover",
}
var question_9 = {
  question: "Cinderella is Nervous. What should she do?",
  optionA: "Gather courage and dance with the Prince",
  optionB: "Request help from Fairy God Mother and get a pair of magical glass shoes",
}
var question_10 = {
  question: "Cinderella is dancing with the Prince, Should they fall in Love?",
  optionA: "Yes, she is perfect for him",
  optionB: "No, Let her go",
}
var question_11 = {
  question: "Our Prince is not happy With your choice. How to get her back?",
  optionA: "Ask help from fairy god mother to unite them",
  optionB: "Take her address from the ball registry & meet her & confess love",
}
var question_12 = {
  question: "Poor Cinderella's desires are shattered and is confused what to do now. Help her choose",
  optionA: "Become independent and move away from evil stepmother",
  optionB: "Request fairy God mother to help her go to the ball",
}
var question_13 = {
  question: "What career should Cinderella choose",
  optionA: "Manufacture Glass Shoes",
  optionB: "Interior Decorator",
}
var question_14 = {
  question: "Guess what! you were right, she is a successful entrepreneur and meets the Prince in an award function. What should she do?",
  optionA: "Introduce herself to the Prince",
  optionB: "Ignore him and let him come to you",
}
var question_15 = {
  question: "One Look at her, the prince is mesmerized.What should the prince do?",
  optionA: "Confess his love for her",
  optionB: "Ask fairy god mother to help him get her love",
}
var finalMessage="This Way they Found each other and got their Happily Ever After...!!!"

function choiceSelection(obj){
  console.log(chalk.cyan.bold(obj.question));
  choice = [obj.optionA, obj.optionB];
  userAnswer = readlineSync.keyInSelect(choice, chalk.yellowBright("Enter your choice: "), {cancel:false});
  console.log("---------------------------------");
}

choiceSelection(question_1);
if(userAnswer === 0){
  choiceSelection(question_2);
  choiceSelection(question_3);
  if(userAnswer === 0){
    choiceSelection(question_4);
    if(userAnswer === 0){
      score=4;
      choiceSelection(question_5);
      if(userAnswer === 0){
        choiceSelection(question_6);
        console.log(finalMessage);
      }
      else if(userAnswer === 1){
        console.log(finalMessage);
      }
    }
    else if (userAnswer === 1){
      score=5;
      choiceSelection(question_7);
      if(userAnswer === 0){
        choiceSelection(question_8);
        if(userAnswer === 1){
          choiceSelection(question_5);
          if(userAnswer === 0){
            choiceSelection(question_6);
            console.log(finalMessage);
          }
          else if(userAnswer === 1){
            console.log(finalMessage);
          }
        }
        else if (userAnswer === 0){
          choiceSelection(question_10);
          if(userAnswer === 0){
            score=3;
            console.log(finalMessage);
          }
          else{
            choiceSelection(question_11);
            console.log(finalMessage);
          }
        }
      }
      else if(userAnswer === 1){
        choiceSelection(question_9);
        choiceSelection(question_10);
        if(userAnswer === 0){
          console.log(finalMessage);
        }
        else{
          choiceSelection(question_11);
          console.log(finalMessage);
        }
      }
    }
  }
  else if (userAnswer === 1){
    choiceSelection(question_9);
    choiceSelection(question_10);
    if(userAnswer === 0){
      score=4;
      console.log(finalMessage);
    }
    else{
      score=5;
      choiceSelection(question_11);
      console.log(finalMessage);
    }
  }
}
else if (userAnswer === 1){
  choiceSelection(question_12);
  if (userAnswer === 0){
    score=5;
    choiceSelection(question_13);
    choiceSelection(question_14);
    choiceSelection(question_15);
    console.log(finalMessage);
  }
  else if(userAnswer === 1){
    score=3;
    choiceSelection(question_5);
      if(userAnswer === 0){
        choiceSelection(question_6);
        console.log(finalMessage);
      }
      else if(userAnswer === 1){
        console.log(finalMessage);
      }
  }
}
console.log("\n",chalk.white.bgBlue.bold("Our Story Master has rated your Story. Check it out"),"\n");
console.log(chalk.yellow.bold("Rating:"+score +" stars"));

console.log("\n",chalk.black.bgYellowBright.bold("Score Board"));

let table = require("table"); 
let data, config; 
data = [ 
[chalk.cyan.bold("Name"), chalk.cyan.bold("Rating")],
["Shanaya", 5], 
["Kiran", 5],
[""+userName, +score] 
] 
// Creating column width configuration 
config = { 
columns: { 
	0: { 
	width: 10 // Column 0 of width 1 
	}, 
	1: { 
	width: 6 // Column 1 of width 20 
	}
} 
}; 
let x = table.table(data, config); 
console.log(x) 

#! /usr/bin/env node

import inquirer from "inquirer";

// 1) Computer will be generate a random number
// 2) User input for guessing number
// 3) Compare user input with computer generated number

const randomNumber = Math.floor(Math.random()* 6 + 1);

const answer = await inquirer.prompt([
    {
    message:"Please guess a number between 1-6:",
    type:"number",
    name:"userInput",
},
]);

if(answer.userInput === randomNumber){
    console.log("Congratulation! You guessed a right number.");
}else{
    console.log("Opps! You guessed a wrong number.");
};
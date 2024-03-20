#! /usr/bin/env node

import inquirer from "inquirer";

const answer =  await inquirer.prompt([
    {message : "Enter first number",type:"number", name:"firstNumber"},
    {message : "Enter second number",type : "number" , name:"secondNumber"},
    {
    message:"Select one of the operators to perform operation", 
    type:"list",
    name:"operator",
    choices :["Addition","Subtraction","Multiplication","Divison"]
    },
]);
//conditiona; statment+
if (answer.operator === "Addition"){          //for addition
    console.log( answer.firstNumber + answer.secondNumber);
}else if (answer.operator === "Subtraction") {  //for subtraction
    console.log( answer.firstNumber - answer.secondNumber); 
}else if(answer.operator === "Multiplication") {   //for multiplication
    console.log( answer.firstNumber * answer.secondNumber);
}else if (answer.operator === "Divison"){            //for division
    console.log( answer.firstNumber / answer.secondNumber);
} else {
    console.log("Please select valid operator")

}
console.log("Thanks you so much for using my new program");
console.log("I am so Happy ");
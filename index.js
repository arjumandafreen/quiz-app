#!/usr/bin/env node
import inquirer from "inquirer";
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Q1.Which of the following is NOT a valid TypeScript data type?",
        choices: ["string", "boolean", "number", "char"]
    },
    {
        name: "question_2",
        type: "list",
        message: "Q2.What is the keyword used to declare a function in TypeScript?",
        choices: ["func", "function", "def", "fun"]
    },
    {
        name: "question_3",
        type: "list",
        message: "Q3.Which TypeScript type is used to represent a specific JavaScript object?",
        choices: ["object", "dict", "map", "hash"]
    },
    {
        name: "question_4",
        type: "list",
        message: "Q4.Which TypeScript type is used to represent a sequance of characters?",
        choices: ["string", "text", "sequance", "line"]
    },
    {
        name: "question_5",
        type: "list",
        message: "Q5.which typeScript is used to represent a collection of values of the same type",
        choices: ["array", "list", "collection", "set"]
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "char":
        console.log("1. Correct");
        ++score;
        break;
    default:
        console.log("1. Incorrect");
}
switch (quiz.question_2) {
    case "function":
        console.log("2. Correct");
        ++score;
        break;
    default:
        console.log("2. Incorrect");
}
switch (quiz.question_3) {
    case "object ":
        console.log("3. Correct");
        ++score;
        break;
    default:
        console.log("3. Incorrect");
}
switch (quiz.question_4) {
    case "string":
        console.log("4. Correct");
        ++score;
        break;
    default:
        console.log("4. Incorrect");
}
switch (quiz.question_5) {
    case "array":
        console.log("5. Correct");
        ++score;
        break;
    default:
        console.log("5. Incorrect");
}
console.log(`Score: ${score}`);

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const readmeTemplate = ({purpose, why, problem, challenges, lesson, original, future}) =>;

inquirer
.prompt ([
    {
        type: 'input',
        message: "What is the purpose of this project?",
        name: 'purpose',
    },
    {
        type: 'input',
        message: 'Why did you build this project?',
        name: 'why',
    },
    {
        type: 'input',
        message: 'What problem does this project solve?',
        name: 'problem',
    },
    {
        type: 'input',
        message: 'What challenges did you face with this project?',
        name: 'challenges'
    },
    {
        type: 'input',
        message: 'What did you learn in development?',
        name: 'lesson'
    },
    {
        type: 'input',
        message: 'What makes this project original',
        name: 'original'
    },
    {
        type: 'input',
        message: 'What features would you like to implement in the future?',
        name: 'future'
    },
])
.then(answers => {
    const readmeData = readmeTemplate(answers)
    fs.writeFile('README.md', readmeData, (err) =>
    err ? console.log(err) : console.log('new README file has been created!')
    );
});



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

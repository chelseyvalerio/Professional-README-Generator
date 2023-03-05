// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
const path = require('path');



// TODO: Create an array of questions for user input

   const questions = [
    {
        type: 'input',
        message: "What is the Project Title",
        name: 'title',
    },
    {
        type: 'input',
        message: "Write a description of the project",
        name: 'description',
    },
    {
        type: 'input',
        message: 'What command should be used to install necessary dependencies?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'What are the usage guidelines for this project?',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'What license does this project use?',
        name: 'license',
        choices: [
            'MIT',
            'Apache',
            'GPL3',
            'none',
        ]
    },
    {
        type: 'input',
        message: 'What command should be used to perform tests?',
        name: 'test'
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines for this project?',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'GitHub'
    },
]

function writeToFile(ReadMeFile, data) {
    return fs.writeFileSync(path.join(process.cwd(), ReadMeFile), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("generating README file");
    writeToFile("README_2.md", generateMarkdown({...responses}))
  }  )
}

// Function call to initialize app
init();

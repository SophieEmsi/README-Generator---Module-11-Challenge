const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    async function promptUser() {
        const questions = [
          {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
          },
          {
            type: 'input',
            name: 'description',
            message: 'Please provide a description for your project:',
          },
          {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation instructions for your project:',
          },
          {
            type: 'input',
            name: 'usage',
            message: 'Please provide usage information for your project:',
          },
          {
            type: 'list',
            name: 'license',
            message: 'Please choose a license for your project:',
            choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'ISC'],
          },
          {
            type: 'input',
            name: 'contributing',
            message: 'Please provide who contributed to this project:',
          },
          {
            type: 'input',
            name: 'tests',
            message: 'Please provide any test instructions for your project:',
          },
          {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
          },
          {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
          },
        ];
      
        const answers = await inquirer.prompt(questions);
      
        return answers;
      }

];

// function to write README file
function writeToFile(fileName, data) {
}


// function to initialize program
function init() {

}

// function call to initialize program
init();

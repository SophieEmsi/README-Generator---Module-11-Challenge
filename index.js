const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
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
    choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'ISC', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What are the contribution guidelines for this project:',
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

// function generateMarkdown(data) {
//     return `# ${data.title}
  
//   ## Description
  
//   ${data.description}
  
//   ## Table of Contents
  
//   * [Installation](#installation)
//   * [Usage](#usage)
//   * [License](#license)
//   * [Contributing](#contributing)
//   * [Tests](#tests)
//   * [Questions](#questions)
  
//   ## Installation
  
//   ${data.installation}
  
//   ## Usage
  
//   ${data.usage}
  
//   ## License
  
//   This project is licensed under the ${data.license} license.
  
//   ## Contributing
  
//   ${data.contributing}
  
//   ## Tests
  
//   ${data.tests}
  
//   ## Questions
  
//   GitHub profile: https://github.com/${data.github}
  
//   If you have any questions, please contact me at ${data.email}.
//   `;
//   }
  


// function to write README file
function writeToFile(fileName, data) {
    console.log('writing to file...'); // add this line to check if function is being called
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`README.md created successfully!`);
    });
  }
  


// function to initialize program
async function init() {
    try {
      const answers = await inquirer.prompt(questions);
      const markdown = generateMarkdown(answers);
      console.log(markdown); // add this line to check the markdown output
      writeToFile('README.md', markdown);
    } catch (error) {
      console.error(error);
    }
  }
  

// function call to initialize program
init();

// TODO: Include packages needed for this application
const fs = require ("fs");
const inquirer = require ("inquirer")
const generateMarkdown = require ('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: "title",
        message: "What's the name of your project?",
    },
    {
        type: 'input',
        name: "description",
        message: "Describe your project purpose and functionality",
    },
    {
        type: 'input',
        name: "Table of Contents",
        message: "Table of Contents",
    },
    {
        type: 'input',
        name: "installation",
        message: "What are the steps required to install your project? ",
    },
    {
        type: 'input',
        name: "usage",
        message: "Provide instructions for use",
    },
    {
        type: 'checkbox',
        name: "license",
        message: "Select any licenses that apply to your project",
        choices: ["Apache 2.0", "GNU GPLv3", "MIT", "ISC", "GNU GPLv2"]
    },
    {
        type: 'input',
        name: "contributions",
        message: "Contributors to the project",
    },
    {
        type: 'input',
        name: "test",
        message: "Tests for your application and how to run them here.",
    },
    {
        type: 'input',
        name: "questions",
        message: "Any questions?",
    },
    {
        type: 'input',
        name: "username",
        message: "What is your Github username? (Link to your profile)",
    },
    {
        type: 'input',
        name: "email",
        message: "What is your email address?",
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, function(err){
        if(err) {
            return console.log(err)
        }
        else {
            console.log("Success")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data)=> {
        console.log("You have sucessfully created a README file")
        writeToFile("ReadME", generateMarkdown(data));
    })
}

// Function call to initialize app
init();

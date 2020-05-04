var fs = require("fs")
var inquirer = require("inquirer");

inquirer
    .prompt([
    {
        type: "input",
        message: "What is your Github username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the title of your Project?",
        name: "projectTitle"
    },
    {
        type: "input",
        message: "Provide a short description:",
        name: "description"
    },
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "steps"
    },
    {
        type: "input",
        message: "What are instructions or examples for use?",
        name: "usage"
    },
    {
        type: "input",
        message: "List your collaborators. (if none, leave blank):",
        name: "credit"
    },
    {
        type: "input",
        message: "Provide any tests",
        name: "tests"
    },
    {
        type: "list",
        message: "Choose a License",
        name: "license",
        choices: [
            "MIT",
            "Apache",
            "GNU"
        ]
    }
])
.then(function(data) {

console.log(data)

let readmeInfo = 
// this is the readme result using user input
`# ${data.projectTitle}
## Description

This project is created by [${data.username}](http://github.com/${data.username})
for more information, contact at ${data.email} or follow at ![Github-social](https://img.shields.io/github/followers/${data.username}?label=Follow&style=social)
${data.description}


## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation

${data.steps}

## Usage

${data.usage}

## Credits

${data.credit}

## Tests

${data.tests}

## License

${data.license}`



fs.writeFile("README.md", readmeInfo, function(err){    
    if(err) {
        return console.log(err);
    }
    console.log("Success! You've created a README")
    })
})

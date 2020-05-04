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
        type: "checkbox",
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
`# ${data.projectTitle}
## Description

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

## License

${data.license}`





fs.writeFile("README.md", readmeInfo + '\n', function(err){    
    if(err) {
        return console.log(err);
    }
    console.log("Success! You've created a README")
    })
})

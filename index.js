var fs = require("fs")
var inquirer = require("inquirer");

inquirer
    .prompt([
    {
        type: "input",
        message: "This is a test",
        name: "projectTitle"
    },
    {
        type: "input",
        message: "This is a test",
        name: "description"
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
## ${data.description}`

       
        fs.writeFile("README.md", readmeInfo + '\n', function(err){    

        if(err) {
            return console.log(err);
        }
        console.log("Success! You've created a README")
    })
})

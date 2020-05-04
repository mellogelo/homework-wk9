var fs = require("fs")
var inquirer = require("inquirer");

inquirer
    .prompt([
    {
        type:"input",
        message: "This is a test",
        name: "question1"
    }
])
.then(function(data) {
    fs.appendFile("READ.md", "utf8", function(err){    

        if(err) {
            return console.log(err);
        }
    
        console.log("Success!")
    })
})
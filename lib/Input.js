/* Input: Handles the inquirer queries and stores the user's responses as members. */
const inquirer = require("inquirer");
const [ ask, askN, askE, cleanNum ] = require("../utils/validation");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

class Input {
    constructor() {
        this.manager;
        this.engineers = [];
        this.interns = [];
    }

    initPrompt() { // ask for manager information
        console.log("Welcome to the Development Team Profile Generator!");
    
        return inquirer.prompt([
            {
                type: "input", 
                name: "name", 
                message: "What is the team manager's name?", 
                validate: input => ask(input, "name") 
            },
            {
                type: "number",
                name: "id",
                message: "What is the team manager's employee id?", 
                validate: input => askN(input, "id"), 
                filter: input => cleanNum(input)
            },
            { 
                type: "input", 
                name: "email", 
                message: "What is the team manager's email address?", 
                validate: input => askE(input) 
            },
            { 
                type: "number", 
                name: "office", 
                message: "What is the team manager's office number?", 
                validate: input => askN(input, "office number") 
            }
        ])
        .then( ({name, id, email, office}) => {
            // create Manager from user submission
            this.manager = new Manager(name, id, email, office);
            
            // return the result of mainPrompt
            return this.mainPrompt();
        });
    }

    mainPrompt() { // determine which prompt to call next
        return inquirer.prompt({
            type: "list",
            name: "choice",
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "I don't want to add any more team members"]
        })
        .then( ({choice}) => {
            // call the next prompt function based on what the choice was
            switch (choice) {
                case "Engineer":
                    return this.engineerPrompt();
                case "Intern":
                    return this.internPrompt();
                default:
                    // if we're done, return the member variables.
                    return this.getData();
            }
        });
    }

    engineerPrompt() {
        return inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is this engineer's name?",
                validate: input => ask(input, "name") 
            },
            {
                type: "number", 
                name: "id", 
                message: "What is this engineer's employee id?", 
                validate: input => askN(input, "id"), 
                filter: input => cleanNum(input)
            },
            { 
                type: "input", 
                name: "email", 
                message: "What is this engineer's email address?", 
                validate: input => askE(input)
            },
            {
                type: "input",
                name: "github",
                message: "What is this engineer's GitHub username?",
                validate: input => ask(input, "GitHub username")
            }
        ])
        .then( ({name, id, email, github}) => {
            // create Manager from user submission
            this.engineers.push(new Engineer(name, id, email, github));
            
            // return to mainPrompt
            return this.mainPrompt();
        });
    }

    internPrompt() {
        return inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is this intern's name?",
                validate: input => ask(input, "name")
            },
            { 
                type: "number", 
                name: "id", 
                message: "What is this intern's employee id?", 
                validate: input => askN(input, "id"), 
                filter: input => cleanNum(input)
            },
            {
                type: "input",
                name: "email",
                message: "What is this intern's email address?",
                validate: input => askE(input) 
            },
            {
                type: "input",
                name: "school",
                message: "What is this intern's school?",
                validate: input => ask(input, "school")
            }
        ])
        .then( ({name, id, email, school}) => {
            // create Manager from user submission
            this.interns.push(new Intern(name, id, email, school));
            
            // return to mainPrompt
            return this.mainPrompt();
        });
    }

    getData() { // return object containing member variables
        return {
            manager: this.manager,
            engineers: this.engineers,
            interns: this.interns
        };
    }
}

module.exports = Input;

/* Akram Sabbah */
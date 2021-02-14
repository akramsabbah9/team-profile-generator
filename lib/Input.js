/* Input: Handles the inquirer queries and stores the user's responses as members. */
const inquirer = require("inquirer");
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
            { type: "input", name: "name", message: "What is the team manager's name?" },
            { type: "number", name: "id", message: "What is the team manager's id?" },
            { type: "input", name: "email", message: "What is the team manager's email address?" },
            { type: "number", name: "office", message: "What is the team manager's office number?" }
        ])
        .then(data => {
            // create Manager from user submission
            this.manager = new Manager(data.name, data.id, data.email, data.office);
            
            // return the result of mainPrompt
            return this.mainPrompt();
        });
    }

    mainPrompt() { // determine which prompt to call next
        return this.getData();
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
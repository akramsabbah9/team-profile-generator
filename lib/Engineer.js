/* Engineer: Employees with a GitHub username. */
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
}

module.exports = Engineer;

/* Akram Sabbah */
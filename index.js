/* MODULES */
const inquirer = require("inquirer");
const generateTeamPage = require("./src/page-template");
const { writeToFile, copyToFile } = require("./utils/generate-site");


/* GLOBALS */
const questions = [];


/* FUNCTIONS */
// initialize app: prompt user for team composition, then set up HTML and CSS.
const init = () => {
    inquirer.prompt(questions)
    .then(data => generateTeamPage(data))
    .then(html => writeToFile("./dist/team-profile.html", html))
    .then(copyToFile("./src/style.css", "./dist/style.css"))
    .catch(err => console.log(err));
};


/* MAIN */
init();

/* Akram Sabbah */
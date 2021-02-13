/* MODULES */
const inquirer = require("inquirer");
const generateTeamPage = require("./src/page-template");
const { writeTeamPage, copyCSS } = require("./utils/generate-site");


/* GLOBALS */
const questions = [];


/* FUNCTIONS */
// initialize app: prompt user for team composition, then set up HTML and CSS.
const init = () => {
    inquirer.prompt(questions)
    .then(data => generateTeamPage(data))
    .then(html => writeTeamPage(html))
    .then(copyCSS())
    .catch(err => console.log(err));
};


/* MAIN */
init();

/* Akram Sabbah */
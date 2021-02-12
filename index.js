const inquirer = require("inquirer");

/* GLOBALS */
const questions = [];


/* FUNCTIONS */
// generate a team's html page.
const generateTeamPage = data => {
    return `
<!DOCTYPE html> 
<html lang="en"> 
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Team</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
</body>
</html>
    `;
};

// write data to an HTML page and put it in dist.
const writeTeamPage = data => {
    return new Promise((resolve, reject) => {
        // make a readme string from the data
        const html = generateTeamPage(data);
        
        fs.writeFile("./dist/team-profile.html", html, err => {
            // if there's an error writing the file, reject the Promise.
            if (err) return reject(err);

            //otherwise, resolve as normal.
            resolve({
                ok: true,
                message: "File created!"
            });
        });
    });
};


// copy CSS file from src to dist.
const copyCSS = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile("./src/style.css", "./dist/style.css", err => {
            if (err) return reject(err);

            resolve({
                ok: true,
                message: "style.css successfully copied!"
            });
        });
    });
};


// initialize app: prompt user for team composition, then set up HTML and CSS.
const init = () => {
    inquirer.prompt(questions)
    .then(data => writeTeamPage(data))
    .then(copyCSS())
    .catch(err => console.log(err));
};


/* MAIN */
// initialize app
init();

/* Akram Sabbah */
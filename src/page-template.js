/* Functions to return page content */

// generate and return card for an Employee
const generateCard = employee => {
    // get role-specific attributes
    var roleAttr;
    switch(employee.getRole()) {
        case "Manager":
            roleAttr = { attr: "Office Number", val: employee.getOfficeNumber() }
            break;
        case "Engineer":
            roleAttr = { attr: "GitHub", val: employee.getGithub() }
            break;
        case "Intern":
            roleAttr = { attr: "School", val: employee.getSchool() }
            break;
        default:
            roleAttr = { attr: "Error", val: "" }
    }

    return `<div class="card mt-4 ml-3 mr-3">
    <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>`;
    
};

// make cards for every employee in data and append them
const generateTeam = data => {
    // make a card for the manager
    cardM = generateCard(data.manager);

    // map the card making function to the list of employees
    cardE = data.engineers.map(engr => generateCard(engr)).join("\n");

    // map the card making function to the list of interns
    cardI = data.interns.map(intr => generateCard(intr)).join("\n");

    // then join all the strings together
    return [ cardM, cardE, cardI ].join("\n");
};

// generate a team's html page.
const generateTeamPage = data => {
    return `<!DOCTYPE html> 
<html lang="en"> 
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" />
    <title>My Team</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header class="bg-danger text-white text-center p-3 mb-5">
        <h1>My Team<h1>
    </header>
    <div class="d-flex justify-content-center flex-wrap">
        ${generateTeam(data)}
    </div>
</body>
</html>`;
};

module.exports = generateTeamPage;

/* Akram Sabbah */
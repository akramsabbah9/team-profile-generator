/* Functions to return page content */

// generate and return card for an Employee
const generateCard = employee => {
    // get role-specific attributes
    var roleAttr;
    var icon;
    switch(employee.getRole()) {
        case "Manager":
            roleAttr = `<li class="list-group-item">Office Number: ${employee.getOfficeNumber()}</li>`;
            icon = `<i class="fas fa-mug-hot"></i>`;
            break;
        case "Engineer":
            roleAttr = `<li class="list-group-item">GitHub: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a></li>`;
            icon = `<i class="fas fa-glasses"></i>`;
            break;
        case "Intern":
            roleAttr = `<li class="list-group-item">School: ${employee.getSchool()}</li>`;
            icon = `<i class="fas fa-user-graduate"></i>`;
            break;
        default:
            roleAttr = ``;
            icon = ``;
    }

    return `        <div class="card mb-4 ml-3 mr-3">
            <div class="card-header bg-primary text-white">
                <h5 class="card-title">${employee.getName()}</h5>
                <h6 class="card-subtitle mb-2">${icon} ${employee.getRole()}</h6>
            </div>
            <div class="card-body bg-light">
                <ul class="list-group mt-3 mb-3">
                    <li class="list-group-item">ID: ${employee.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}" target="_blank">${employee.getEmail()}</a></li>
                    ${roleAttr}
                </ul>
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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
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
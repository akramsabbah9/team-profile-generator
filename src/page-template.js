/* Functions to return page content */

// generate a card for an Employee

// 

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
        <div class="card mt-4 ml-3 mr-3">
            <img class="card-img-top" src="..." alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
</body>
</html>`;
};

module.exports = generateTeamPage;

/* Akram Sabbah */
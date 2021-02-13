/* Functions to write html / css to the dist directory */
const fs = require("fs");

// write data to an HTML page and put it in dist.
const writeTeamPage = html => {
    return new Promise((resolve, reject) => {
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

module.exports = { writeTeamPage, copyCSS };

/* Akram Sabbah */
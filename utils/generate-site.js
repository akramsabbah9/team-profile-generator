/* Functions to write html / css to the dist directory */
const fs = require("fs");

// write data to an HTML page and put it in dist.
const writeToFile = (name, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(name, data, err => {
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
const copyToFile = (donor, target) => {
    return new Promise((resolve, reject) => {
        fs.copyFile(donor, target, err => {
            if (err) return reject(err);

            resolve({
                ok: true,
                message: "style.css successfully copied!"
            });
        });
    });
};

module.exports = { writeToFile, copyToFile };

/* Akram Sabbah */
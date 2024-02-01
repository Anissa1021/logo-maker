const inquirer = require('inquirer');
const fs = require('fs');
const {Square, Circle, Triangle} = require('./lib/shapes');

function writeToFile(fileName, answers) {
    let svgString = "";
    svgString = '<svg version="1.1." width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    svgString += "<g>";
    svgString += '${answers.shape)';

    let shapeChoice;
    if (answers.shape === "Triangle") {
        shapeChoice = new Triangle();
        svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
    } else if (answers.shape === "Cirlce") {
        shapeChoice = new Circle();
        svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
    } else {
        shapeChoice = new Square();
        svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
    }

    svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
    svgString += "</g>";
    svgString += "</svg>";

    // Genrating svg file.
    fs.writeFile(fileName, svgString, (err) => {
        err ? console.log(err) : console.log("Generated logo.svg");
    });
}

// This will be the questions that the user is asked to generate their own personal logo.
function promptUser() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What three letters would you like on your logo?",
                name: "text",
            },
            {
                type: "input",
                message: "What color would you like your text?",
                name: "textColor",
            },
            {
                type: "input",
                message: "What background color would you like?",
                name: "shapeBackgroundColor",
            },
            {
                type: "list",
                message: "What shape would you like your logo to be?",
                choices : ["Square", "Triangle", "Circle"],
                name: "shape",
            },
        ])
        .then((answers) => {
            if (answers.text.length > 3) {
                console.log("Must enter a value of no more than 3 characters");
                promptUser(); 
            } else {
                writeToFile('logo.svg', answers);
            }
        })
}

promptUser();

# SVG Logo Maker

## Description
For this assignment we have to build an application that will generate a logo, so you can avoid paying a graphic designer to make you one. The logo is limited by three shapes being a triangle, square, circle, and only allowed three letters only. The user will go through a series of questions and once all answered, will be rewarded with their very own custom logo.

## User Story
```
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```
## Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```
## Walkthrough
https://watch.screencastify.com/v/2nV2dfE9KJ8LBIEq0vZ3

## Technology used
- `Node.js`
- `Inquirer`
- `Jest`

## Usage
To use application first use `npm i` to install all dependencies. Once done, run the command `node index.js`. You will be prompted with a series of questions, and once all have been answered your logo will be generated in the SVG file.

## Questions
Reach me at my email Anissa1021@gmail.com or through my GitHub account at [Anissa1021](https://github.com/Anissa1021)

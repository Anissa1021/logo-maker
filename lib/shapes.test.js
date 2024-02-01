const { Triangle, Square, Circle } = require("./shapes.js");

// Testing all shapes with different background colors.
describe("Triangle test", () => {
    test("test for triangle with a red background", () => {
    const shape = new Triangle();
    shape.setColor("red");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="red" />');
    });
});

describe("Circle test", () => {
    test("test for circle with a #e6baa3 background", () => {
        const shape = new Circle();
        shape.setColor('#e6baa3');
        expect(shape.render()).toEqual('<circle cx="150" cy="115" r="80" fill="#e6baa3" />');
    });
});

describe("Square test", () => {
    test("test for square with blue background", () => {
        const shape = new Square();
        shape.setColor('blue');
        expect(shape.render()).toEqual('<rect x="73" y="40" width="160" height="160" fill="blue" />');
    });
});
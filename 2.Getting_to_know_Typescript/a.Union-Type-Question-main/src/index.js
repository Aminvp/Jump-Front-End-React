"use strict";
exports.__esModule = true;
function getArea(shape) {
    if (shape.data.kind === 'Circle') {
        var circle = shape.data;
        return Math.round(Math.PI * Math.pow(circle.radius, 2));
    }
    if (shape.data.kind === 'Rectangle') {
        var rectangle = shape.data;
        return (rectangle.width * rectangle.height);
    }
}
exports.getArea = getArea;

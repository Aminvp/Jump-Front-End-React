type Circle = {
    kind: 'circle';
    radius: number;
};

type Rectangle = {
    kind: 'rectangle';
    width: number;
    height: number;
};

type Shape = Circle | Rectangle;

function getArea(shape: Shape): number {
    switch (shape.kind) {
        case 'circle':
            return Math.round(Math.PI * Math.pow(shape.radius, 2));
        case 'rectangle':
            return shape.width * shape.height;
        default:
            return 0;
    }
}


// const shape: Shape = {
//     kind: "rectangle",
//     width: 3,
//     height: 4
// } 

// console.log(getArea(shape))

export { getArea }

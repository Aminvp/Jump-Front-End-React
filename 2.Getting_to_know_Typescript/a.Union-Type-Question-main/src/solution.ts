type Circle = { kind: 'circle'; radius: number };
type Rectangle = { kind: 'rectangle'; width: number; height: number };
type Shape = Circle | Rectangle;

function getArea(shape: Shape) {
  return shape.kind === 'circle' ?
    Math.round(Math.PI * shape.radius ** 2)
    : shape.width * shape.height;
}
export { getArea }
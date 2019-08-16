interface drawPoint{
    x: number,
    y: number
}

let draw = (point : drawPoint) => console.log(point.x);

draw({
    x:15,
    y:15
})
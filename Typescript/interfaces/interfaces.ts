interface drawPoint{
    x: number,
    y: number
}

let draw = (point : drawPoint) => console.log(point.x);

draw({
    x:15,
    y:15
})

//Here I create an interface which consists of two parameter of type number.
//And passing 
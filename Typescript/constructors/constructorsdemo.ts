class A{
    x: number;
    y: number;
    
    constructor (x: number,y?: number){
        this.x = x;
        this.y = y;
    }
    draw(){
        console.log("X:"+this.x+","+this.y)
    }
}
let obj = new A(1,3);
let obj1 = new A(3);
obj.draw();

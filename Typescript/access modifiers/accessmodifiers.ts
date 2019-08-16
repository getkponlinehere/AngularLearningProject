class Point {
//    private x: number;
  //  protected y: number;
    
    constructor(private x?: number, private y?: number){
        this.x = x;
        this.y = y;
    }
    draw(){
        console.log("x:"+this.x+",y:"+this.y);
    }
}
let obje= new Point(1,2);
obje.draw();

//The default access modifier is public.
//Private variables are only accessible within that block or class.
//The variable declarations can be given as constructor parameter along with access modifiers.
export class PointerClass{
    constructor(private _x?: number,private _y?: number){
        this._x = _x;
        this._y = _y;
    }
    draw()
    {
        console.log("x:"+this._x+",y:"+this._y);
    }
    get x(){
        return this._x
    }
    set x(value:number){
        if(value<0)
            console.log("The value of y cannot be less than zero");
        this._x=value;
    }
}
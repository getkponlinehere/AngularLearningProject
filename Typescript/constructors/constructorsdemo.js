var A = /** @class */ (function () {
    function A(x, y) {
        this.x = x;
        this.y = y;
    }
    A.prototype.draw = function () {
        console.log("X:" + this.x + "," + this.y);
    };
    return A;
}());
var obj = new A(1, 3);
var obj1 = new A();
obj.draw();

//Typescript doesn't support constructor overloading, but can be implement by using optional parameter declaration
//using ? symbol after parameter name.
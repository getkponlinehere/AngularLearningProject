var Pointer = /** @class */ (function () {
    function Pointer(_x, _y) {
        this._x = _x;
        this._y = _y;
        this._x = _x;
        this._y = _y;
    }
    Pointer.prototype.draw = function () {
        console.log("x:" + this._x + ",y:" + this._y);
    };
    Object.defineProperty(Pointer.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0)
                console.log("The value of y cannot be less than zero");
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    return Pointer;
}());
var point = new Pointer(1, 2);
console.log(point.x);
point.x = 12;
console.log(point.x);
point.draw();
//To access private variables outside the class we can make the use of getters,
//To initialize values of private varibles outside the class we can make the use of setters.
//setters and getters

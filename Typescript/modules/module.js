"use strict";
exports.__esModule = true;
var PointerClass = /** @class */ (function () {
    function PointerClass(_x, _y) {
        this._x = _x;
        this._y = _y;
        this._x = _x;
        this._y = _y;
    }
    PointerClass.prototype.draw = function () {
        console.log("x:" + this._x + ",y:" + this._y);
    };
    Object.defineProperty(PointerClass.prototype, "x", {
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
    return PointerClass;
}());
exports.PointerClass = PointerClass;

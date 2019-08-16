var drawPoint = /** @class */ (function () {
    function drawPoint() {
    }
    drawPoint.prototype.draw = function () {
        console.log("inside draw method");
    };
    drawPoint.prototype.getDistance = function () {
    };
    return drawPoint;
}());
var ob = new drawPoint();
ob.draw();

var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, 'akhil', 'c'];
var cars;
(function (cars) {
    cars[cars["bmw"] = 0] = "bmw";
    cars[cars["audi"] = 1] = "audi";
    cars[cars["ferrarri"] = 2] = "ferrarri";
})(cars || (cars = {}));
;
var carname = cars.audi;
console.log(carname);

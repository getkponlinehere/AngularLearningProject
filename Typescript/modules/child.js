"use strict";
exports.__esModule = true;
var module_1 = require("./module");
var point = new module_1.PointerClass(1, 2);
console.log(point.x);
point.x = 12;
console.log(point.x);
point.draw();

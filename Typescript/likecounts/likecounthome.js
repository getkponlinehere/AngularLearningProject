"use strict";
exports.__esModule = true;
var likecounts_1 = require("./likecounts");
var ob = new likecounts_1.likeCount(10, true);
ob.onClick();
console.log(ob.count);

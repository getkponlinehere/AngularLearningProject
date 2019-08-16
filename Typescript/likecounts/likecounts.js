"use strict";
exports.__esModule = true;
var likeCount = /** @class */ (function () {
    function likeCount(count, isSelected) {
        this.count = count;
        this.isSelected = isSelected;
        this.count = count;
        this.isSelected = isSelected;
    }
    likeCount.prototype.onClick = function () {
        this.count += (this.isSelected) ? +1 : -1;
        this.isSelected = !this.isSelected;
    };
    return likeCount;
}());
exports.likeCount = likeCount;

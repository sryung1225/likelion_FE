(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.카운터 = void 0;
    var 카운터 = /** @class */ (function () {
        function 카운터(값) {
            this.값 = 값;
        }
        카운터.prototype.더하기 = function () {
            this.값 += 1;
        };
        카운터.prototype.빼기 = function () {
            this.값 -= 1;
        };
        return 카운터;
    }());
    exports.카운터 = 카운터;
});

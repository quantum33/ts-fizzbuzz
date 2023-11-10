"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fizzBuzz = void 0;
function fizzBuzz(i) {
    var isFizz = new NamedFunc("fizz", function (i) { return i % 3 == 0; });
    var isBuzz = new NamedFunc("buzz", function (i) { return i % 5 == 0; });
    var isFizzBuzz = new NamedFunc("fizzbuzz", function (i) { return isFizz.execute(i) && isBuzz.execute(i); });
    var isSelf = new NamedFunc(i, function () { return true; });
    return new Runner([
        isFizzBuzz,
        isFizz,
        isBuzz,
        isSelf
    ]).execute(i);
}
exports.fizzBuzz = fizzBuzz;
var NamedFunc = /** @class */ (function () {
    function NamedFunc(value, execute) {
        this.value = value;
        this.execute = execute;
    }
    return NamedFunc;
}());
var Runner = /** @class */ (function () {
    function Runner(funcs) {
        this.funcs = funcs;
    }
    Runner.prototype.execute = function (i) {
        for (var a = 0; a < this.funcs.length; a++) {
            var func = this.funcs[a];
            if (func.execute(i)) {
                return func.value;
            }
        }
        console.log("unreachable");
        return "unreachable";
    };
    return Runner;
}());
module.exports = fizzBuzz;

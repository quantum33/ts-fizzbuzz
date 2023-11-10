"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fizzBuzz2 = void 0;
function fizzBuzz2(i) {
    console.log("Received input: ".concat(i));
    var isFizz = new NamedFunc("fizz", function (i) { return i % 3 == 0; });
    var isBuzz = new NamedFunc("buzz", function (i) { return i % 5 == 0; });
    var isFizzBuzz = new NamedFunc("fizzbuzz", function (i) { return isFizz.execute(i) && isBuzz.execute(i); });
    var isSelf = new NamedFunc(i, function () { return true; });
    // if (isFizzBuzz.execute(i)) {
    //   return isFizzBuzz.toDisplay
    // } else if (isFizz.execute(i)) {
    //   return isFizz.toDisplay
    // } else if (isBuzz.execute(i)) {
    //   return isBuzz.toDisplay
    // }
    // return isSelf.toDisplay
    return new Runner([
        isFizzBuzz,
        isFizz,
        isBuzz,
        isSelf
    ]).execute(i);
}
exports.fizzBuzz2 = fizzBuzz2;
var NamedFunc = /** @class */ (function () {
    function NamedFunc(toDisplay, execute) {
        this.toDisplay = toDisplay;
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
                console.log(func.toDisplay);
                return func.toDisplay;
            }
        }
        console.log("unreachable");
        return "unreachable";
    };
    return Runner;
}());
module.exports = fizzBuzz2;

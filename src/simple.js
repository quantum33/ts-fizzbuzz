"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fizzBuzz = void 0;
function fizzBuzz(i) {
    var isFizz = function (i) { return i % 3 == 0; };
    var isBuzz = function (i) { return i % 5 == 0; };
    var isFizzBuzz = function (i) { return isFizz(i) && isBuzz(i); };
    if (isFizzBuzz(i)) {
        return "fizzbuzz";
    }
    else if (isFizz(i)) {
        return "fizz";
    }
    else if (isBuzz(i)) {
        return "buzz";
    }
    else {
        return i;
    }
}
exports.fizzBuzz = fizzBuzz;
module.exports = fizzBuzz;

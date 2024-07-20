"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
function main() {
    var firststr = (0, readline_sync_1.question)("Enter first number:\n");
    var operator = (0, readline_sync_1.question)("Enter operator:\n");
    var secondstr = (0, readline_sync_1.question)("Enter second number:\n");
    var validInput = isNumber(firststr) && isOperator(operator) && isNumber(secondstr);
    if (validInput) {
        var firstnum = parseInt(firststr);
        var secondnum = parseInt(secondstr);
        var result = calculate(firstnum, operator, secondnum);
        console.log(result);
    }
    else {
        console.log("Invalid input!");
        main();
    }
}
function calculate(firstnum, operator, secondnum) {
    switch (operator) {
        case '+':
            return firstnum + secondnum;
        case '-':
            return firstnum - secondnum;
        case '*':
            return firstnum * secondnum;
        case '/':
            return firstnum / secondnum;
    }
}
function isOperator(op) {
    switch (op) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}
function isNumber(str) {
    var maybeNum = parseInt(str);
    var isNum = !isNaN(maybeNum);
    return isNum;
}
main();

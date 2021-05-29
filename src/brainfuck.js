"use strict";
exports.__esModule = true;
var Interpreter = /** @class */ (function () {
    function Interpreter(outputFunction) {
        if (outputFunction === void 0) { outputFunction = function (char) { return console.log(char); }; }
        this.memory = new Array(30000);
        for (var index = 0; index < this.memory.length; index++) {
            this.memory[index] = 0;
        }
        this.code = "";
        this.pointer = 15000;
        this.instruction_pointer = 0;
        this.loopStartIndex = 0;
        this.isLooping = false;
        this.bracketCounter = 0;
        this.outputFunction = outputFunction;
    }
    Interpreter.prototype.moveRight = function () {
        this.pointer += 1;
    };
    Interpreter.prototype.moveLeft = function () {
        this.pointer -= 1;
    };
    Interpreter.prototype.increment = function () {
        this.memory[this.pointer] += 1;
    };
    Interpreter.prototype.decrement = function () {
        this.memory[this.pointer] -= 1;
    };
    Interpreter.prototype.readChar = function () {
        var char = String.fromCharCode(this.memory[this.pointer]);
        this.outputFunction(char);
    };
    Interpreter.prototype.loopStart = function () {
        this.bracketCounter = 0;
        if (this.memory[this.pointer] == 0) {
            // eslint-disable-next-line no-constant-condition
            while (true) {
                this.instruction_pointer += 1;
                if (this.code.charAt(this.instruction_pointer) == "[")
                    this.bracketCounter += 1;
                else if (this.code.charAt(this.instruction_pointer) == "]")
                    this.bracketCounter -= 1;
                if (this.code.charAt(this.instruction_pointer) == "]" && this.bracketCounter == -1) {
                    break;
                }
            }
        }
        return;
    };
    Interpreter.prototype.loopEnd = function () {
        this.bracketCounter = 0;
        if (this.memory[this.pointer] != 0) {
            // eslint-disable-next-line no-constant-condition
            while (true) {
                this.instruction_pointer -= 1;
                if (this.code.charAt(this.instruction_pointer) == "]")
                    this.bracketCounter += 1;
                else if (this.code.charAt(this.instruction_pointer) == "[")
                    this.bracketCounter -= 1;
                if (this.code.charAt(this.instruction_pointer) == "[" && this.bracketCounter == -1) {
                    break;
                }
            }
        }
        return;
    };
    Interpreter.prototype.executeInstruction = function () {
        var instruction = this.code.charAt(this.instruction_pointer);
        switch (instruction) {
            case ">":
                this.moveRight();
                break;
            case "<":
                this.moveLeft();
                break;
            case "+":
                this.increment();
                break;
            case "-":
                this.decrement();
                break;
            case ".":
                this.readChar();
                break;
            case "[":
                this.loopStart();
                break;
            case "]":
                this.loopEnd();
                break;
        }
        this.instruction_pointer += 1;
        if (this.code.charAt(this.instruction_pointer) == "")
            return;
        this.executeInstruction();
    };
    Interpreter.prototype.loadCode = function (code) {
        this.code = code;
        this.instruction_pointer = 0;
        this.executeInstruction();
    };
    return Interpreter;
}());
exports["default"] = Interpreter;


class Interpreter {
    memory: number[];
    code: string;
    pointer: number;
    instruction_pointer: number;
    loopStartIndex: number;
    isLooping: boolean;
    bracketCounter: number;

    constructor() {
        this.memory = new Array(30000);
        for (let index = 0; index < this.memory.length; index++) {
            this.memory[index] = 0;
        }
        this.code = "";
        this.pointer = 15000;
        this.instruction_pointer = 0;

        this.loopStartIndex = 0;
        this.isLooping = false;
        this.bracketCounter = 0;
    }

    moveRight() {
        this.pointer += 1;
    }

    moveLeft() {
        this.pointer -= 1;
    }

    increment() {
        this.memory[this.pointer] += 1;
    }

    decrement() {
        this.memory[this.pointer] -= 1;
    }

    readChar() {
        let char = String.fromCharCode(this.memory[this.pointer]);
        console.log(char);
    }

    loopStart() {
        this.bracketCounter = 0;

        if(this.memory[this.pointer] == 0) {

            while(true) {
                this.instruction_pointer += 1;
                if(this.code.charAt(this.instruction_pointer) == "[") this.bracketCounter += 1;
                else if(this.code.charAt(this.instruction_pointer) == "]") this.bracketCounter -= 1;

                if(this.code.charAt(this.instruction_pointer) == "]" && this.bracketCounter == -1) {
                    break;
                }
            }

        }

        return;

    }

    loopEnd() {
        this.bracketCounter = 0;

        if(this.memory[this.pointer] != 0) {

            while(true) {
                this.instruction_pointer -= 1;
                if(this.code.charAt(this.instruction_pointer) == "]") this.bracketCounter += 1;
                else if(this.code.charAt(this.instruction_pointer) == "[") this.bracketCounter -= 1;

                if(this.code.charAt(this.instruction_pointer) == "[" && this.bracketCounter == -1) {
                    break;
                }
            }

        }

        return;

    }

    executeInstruction() {
        let instruction = this.code.charAt(this.instruction_pointer);

        switch(instruction) {
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

        if(this.code.charAt(this.instruction_pointer) == "") return

        this.executeInstruction();
    }

    loadCode(code: string) {
        this.code = code;
        this.instruction_pointer = 0;
        
        this.executeInstruction()
    }
}

let brain = new Interpreter();
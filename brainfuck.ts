
class Interpreter {
    memory: any[];
    code: string;
    pointer: number;
    instruction_pointer: number;

    constructor() {
        this.memory = new Array(30000).fill(0);
        this.code = "";
        this.pointer = 0;
        this.instruction_pointer = 0;
    }

    moveRight() {
        this.pointer += 1;
    }

    moveLeft() {
        if (this.pointer = 0) return;

        this.pointer += 1;
    }

    increment() {
        this.memory[this.pointer] += 1;
    }

    decrement() {
        this.memory[this.pointer] -= 1;
    }

    readChar() {
        let char = String.fromCharCode(this.memory[this.pointer]);
        this.pointer += 1;
        console.log(char);
    }

    loopStart() {
        if(this.memory[this.pointer] != 0) return this.pointer += 1;
        
        while(this.code.charAt(this.instruction_pointer) != "]") {
            this.instruction_pointer += 1;
            this.executeInstruction();
        }
    }

    loopEnd() {
        if(this.memory[this.pointer] == 0) return this.pointer += 1;

        while(this.code.charAt(this.instruction_pointer) != "[") {
            this.instruction_pointer -= 1;
        }
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
}

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
}
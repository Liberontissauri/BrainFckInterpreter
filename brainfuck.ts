
class Interpreter {
    memory: any[];
    pointer: number;
    code: string;

    constructor() {
        this.memory = new Array(30000).fill(0);
        this.pointer = 0;
        this.code = "";
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
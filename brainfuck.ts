
class Interpreter {
    memory: any[];
    pointer: number;

    constructor() {
        this.memory = [];
        this.pointer = 0;
    }

    moveRight() {
        this.pointer += 1;
    }

    moveLeft() {
        if (this.pointer = 0) return;

        this.pointer += 1;
    }
}
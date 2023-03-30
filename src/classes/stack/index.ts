import { StackOverflow, StackUnderflow, InvalidStackValue } from "./errors"
import { MAX_UINT256 } from "../../constants/index"
class Stack {
    private readonly maxDepth; // yellow paper 1024
    private stack: bigint[]; // for using 32bytes

    constructor(maxDepth = 1024){
        this.maxDepth = maxDepth;
        this.stack = []
    }

    public push(value:bigint): void {
        if (value < 0 || value > MAX_UINT256) throw new InvalidStackValue(value);

        if (this.stack.length + 1 > this.maxDepth) throw new StackOverflow();
        
    }

    public pop(): bigint {
        const value = this.stack.pop()

        if (value === undefined) throw new StackUnderflow();

        return value;
    }
}

export default Stack;
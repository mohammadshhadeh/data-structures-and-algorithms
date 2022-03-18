// using an array
// const myStack = [];

// myStack.push("a");
// myStack.push("b");
// console.log('myStack: ', myStack);
// myStack.pop();
// console.log('myStack: ', myStack);
// myStack.push("c");
// myStack.push("d");
// myStack.push("e");
// console.log('myStack: ', myStack);

// Maximally Efficient Stack: O(1) time for push/pop


class StackNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(val) {
        if (this.size === 0) {
            this.top = new StackNode(val);
        } else {
            const pushedNode = new StackNode(val);
            pushedNode.next = this.top;
            this.top = pushedNode;
        }

        this.size++;
    }

    pop() {
        if (this.size === 0) return null;
        const poppedNode = this.top;
        this.top = this.top.next;
        this.size--;

        return poppedNode.val;
    }

    getTop() {
        if (this.top !== null) {
            return this.top.val;
        }

        return null;
    }
}

const myStack = new Stack();
myStack.push('a')
myStack.push('b')
myStack.push('c')
myStack.push('d')
console.log('myStack: ', myStack.size);
console.log('myStack: ', myStack.getTop());
console.log('myStack: ', myStack.pop());
console.log('myStack: ', myStack.pop());
console.log('myStack: ', myStack.pop());
console.log('myStack: ', myStack.pop());
console.log('myStack: ', myStack.getTop());
console.log('myStack: ', myStack.size);

// const queue = [];

// queue.push('a');
// queue.push('b');
// queue.push('c');
// console.log('queue: ', queue);
// queue.shift();
// console.log('queue: ', queue);

// Maximally Efficient Queue should have O(1) runtime


class QueueNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


class Queue {
    constructor() {
        this.front = null;
        this.back = null;
        this.size = 0;
    }

    enqueue(val) {
        const newNode = new QueueNode(val);
        if (this.size === 0) {
            this.front = newNode;
            this.back = newNode;
        } else {
            this.back.next = newNode;
            this.back = newNode;
        }

        this.size++;
    }

    dequeue() {
        if (this.size === 0) return null;
        if (this.size === 1) this.back = null;

        const removedNode = this.front;
        this.front = this.front.next;

        this.size--;
        return removedNode.val;
    }
}

// a -> b -> c
// F         B

const myQueue = new Queue();

myQueue.enqueue('a');
myQueue.enqueue('b');
myQueue.enqueue('c');
console.log('myQueue: ', myQueue);
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
console.log('myQueue: ', myQueue);


class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        // this.tail = null;
        // this.size = 0;
    }

    append(value) {
        const newNode = new Node(value)
        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let curr = this.head
        while(curr.next !== null) {
            curr = curr.next;
        }

        curr.next = newNode;
    }

    print() {
        let str = '';
        let curr = this.head;
        while(curr !== null) {
            str += curr.val + (curr.next ? '->' : '');
            curr = curr.next;
        }

        console.log('str: ', str);
    }
}


const list = new LinkedList();

list.append('a');
list.append('b');
list.append('c');
list.print()
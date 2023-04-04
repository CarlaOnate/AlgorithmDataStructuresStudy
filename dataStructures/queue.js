// Queue - first in, last out;  [out - in]

export class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
}

export class Node {
    constructor(value) {
        this.next = null;
        this.data = value;
    }
}

class Queue {
    constructor() {
        this.queue = new LinkedList();
        this.length = 0;
    }

    addItem = (item) => {
        const newNode = new Node(item);
        if (this.length <= 0) {
            this.queue.head = newNode;
            this.queue.tail = newNode;
        } else {
            const lastNode = this.queue.tail;
            lastNode.next = newNode;
            this.queue.tail = newNode;
            newNode.next = null;
        }
        this.length += 1;
    }

    remove = () => {
        // remove first item of list - last item to enter the queue [last - ... - first]
        const nextNode = this.queue.head.next;
        delete this.queue.head;
        this.queue.head = nextNode;
        this.length -= 1;
    }

    peek = () => {
        // return top of the print
        return this.queue.head.data;
    }

    isEmpty = () => this.length <= 0;

    print = () => {
        let currentNode = this.queue.head;
        while(currentNode != null) {
            console.log(` ${currentNode.data}, `);
            currentNode = currentNode.next;
        }
    }
}

const newQueue = new Queue();
newQueue.addItem(1);
newQueue.addItem(2);
newQueue.addItem(3);
newQueue.addItem(4);
console.log("\n ADD ITEM:   ")
newQueue.print()
newQueue.remove();
console.log("\n REMOVE:   ")
newQueue.print()
console.log("\n PEEK:   ")
console.log(newQueue.peek());
console.log("\n IS EMPTY FULL:   ");
console.log(newQueue.isEmpty());
newQueue.remove();
newQueue.remove();
newQueue.remove();
console.log("\n IS EMPTY NOT FULL:   ");
console.log(newQueue.isEmpty());


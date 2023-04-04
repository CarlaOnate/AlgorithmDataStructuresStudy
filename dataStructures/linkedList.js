// Crear una linked list
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insertNode(value) {
        let newNode = new Node(value);
        if (this.tail) {
             this.tail.next = newNode;
             this.tail = newNode;
        } else {
            this.tail = newNode;
            this.head = newNode;
        }
        this.length += 1;
    }

    deleteNode(value) {
        let prevNode = null;
        let currentNode = this.head;
        while(currentNode != null) {
            if (currentNode.data === value) {
                prevNode.next = currentNode.next;
            }
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
    }

    print() {
        let currentNode = this.head;
        while (currentNode != null) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }
}

class Node {
    constructor(value) {
        this.next = null;
        this.data = value;
    }
}

const newLinkedList = new LinkedList();
newLinkedList.insertNode("webos");
newLinkedList.insertNode(1);
newLinkedList.insertNode("me voy a borrar");
newLinkedList.insertNode("hallooo");
newLinkedList.print();

newLinkedList.deleteNode("me voy a borrar");
newLinkedList.print();

export default LinkedList;
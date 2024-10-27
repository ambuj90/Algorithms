// Node class to represent a single element in the linked list
class Node {
    constructor(value) {
        this.value = value;  // Data of the node
        this.next = null;    // Pointer to the next node
    }
}

// LinkedList class with insert, insertAt, and print functionality
class LinkedList {
    constructor() {
        this.head = null;  // Head of the list (starting point)
    }

    // Insert a new element at the end of the linked list
    insert(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Insert a new element at a specific position (0-based index)
    insertAt(value, position) {
        const newNode = new Node(value);

        // If inserting at the head (position 0)
        if (position === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        // Traverse the list to find the correct position
        let current = this.head;
        let previous = null;
        let index = 0;

        while (current && index < position) {
            previous = current;
            current = current.next;
            index++;
        }

        if (index !== position) {
            console.log(`Position ${position} is out of bounds.`);
            return;
        }

        // Insert the new node at the desired position
        newNode.next = current;
        previous.next = newNode;
    }

    // Print the linked list
    printList() {
        let current = this.head;
        let result = '';
        while (current) {
            result += `${current.value} -> `;
            current = current.next;
        }
        console.log(result + 'null');
    }
}

// Example usage:
const list = new LinkedList();
list.insert(10);
list.insert(20);
list.insert(30);
list.insert(40);

console.log('Original List:');
list.printList();

// Insert 25 at the 2nd position (0-based index)
list.insertAt(25, 2);

console.log('\nAfter inserting 25 at position 2:');
list.printList();

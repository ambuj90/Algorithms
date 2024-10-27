// Node class to represent a single element in the linked list
class Node {
    constructor(value) {
        this.value = value;  // Data of the node
        this.next = null;    // Pointer to the next node
    }
}

// LinkedList class with insert and delete functionality
class LinkedList {
    constructor() {
        this.head = null;  // Head of the list (starting point)
    }

    // Insert a new element at the end of the linked list
    insert(value) {
        const newNode = new Node(value);

        if (!this.head) {
            // If the list is empty, set the new node as the head
            this.head = newNode;
        } else {
            // Traverse to the end of the list and insert the new node
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Delete a node by value from the linked list
    delete(value) {
        if (!this.head) {
            console.log('The list is empty.');
            return;
        }

        // If the node to be deleted is the head
        if (this.head.value === value) {
            this.head = this.head.next;  // Move the head to the next node
            return;
        }

        // Traverse the list to find the node to delete
        let current = this.head;
        let previous = null;

        while (current && current.value !== value) {
            previous = current;
            current = current.next;
        }

        if (!current) {
            console.log(`Value ${value} not found in the list.`);
            return;
        }

        // Bypass the current node to delete it
        previous.next = current.next;
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

// Delete an element by value
list.delete(20);
console.log('\nAfter deleting 20:');
list.printList();

// Try to delete an element that doesn’t exist
list.delete(50);
console.log('\nAfter trying to delete 50:');
list.printList();

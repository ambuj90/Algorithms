// Node class to represent a single element in the linked list
class Node {
    constructor(value) {
        this.value = value;  // Data of the node
        this.next = null;    // Pointer to the next node
    }
}

// LinkedList class with insert functionality
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
const linkedList = new LinkedList();
linkedList.insert(10);
linkedList.insert(20);
linkedList.insert(30);
linkedList.insert(40);

// Print the linked linkedList
linkedList.printList();

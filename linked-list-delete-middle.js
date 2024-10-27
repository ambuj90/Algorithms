class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Method to append nodes at the end of the list
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Function to delete the middle node
  deleteMiddle() {
    if (!this.head || !this.head.next) {
      // If the list has one or no nodes, return null
      this.head = null;
      return;
    }

    let slow = this.head;
    let fast = this.head;
    let prev = null;

    // Use slow and fast pointers to find the middle node
    while (fast !== null && fast.next !== null) {
      prev = slow;
      slow = slow.next;
      fast = fast.next.next;
    }

    // Delete the middle node (second middle if even nodes)
    prev.next = slow.next;
  }

  // Method to print the list
  printList() {
    let current = this.head;
    let result = '';
    while (current) {
      result += `${current.value} -> `;
      current = current.next;
    }
    console.log(result + 'NULL');
  }
}

// Example usage
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);

console.log('Original List:');
list.printList();

list.deleteMiddle();

console.log('After Deleting Middle Node:');
list.printList();

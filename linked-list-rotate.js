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

  // Method to rotate the list to the left by 'k' places
  rotateLeft(k) {
    if (!this.head || k === 0) return;

    // Find the length of the list
    let current = this.head;
    let length = 1;
    while (current.next) {
      current = current.next;
      length++;
    }

    // Connect the last node to the head to form a circular list
    current.next = this.head;

    // Calculate the new head position after k rotations
    k = k % length; // Handle cases where k > length
    let newTailPosition = length - k;
    let newTail = this.head;

    // Move to the new tail position
    for (let i = 1; i < newTailPosition; i++) {
      newTail = newTail.next;
    }

    // Set the new head and break the circular connection
    this.head = newTail.next;
    newTail.next = null;
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

list.rotateLeft(4);

console.log('Rotated List:');
list.printList();

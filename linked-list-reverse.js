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

  // Function to add a node at the end of the linked list
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

  // Function to reverse the linked list
  reverse() {
    let previous = null;
    let current = this.head;
    let next = null;

    while (current) {
      // Save next node
      next = current.next;

      // Reverse the current node's pointer
      current.next = previous;

      // Move pointers one position ahead
      previous = current;
      current = next;
    }

    this.head = previous;
  }

  // Function to print the linked list
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
list.append(1);
list.append(2);
list.append(3);
list.append(4);

console.log('Original List:');
list.printList();

list.reverse();

console.log('Reversed List:');
list.printList();

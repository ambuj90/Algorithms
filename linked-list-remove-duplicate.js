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

  // Method to add nodes at the end of the list
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

  // Function to remove duplicates from a sorted linked list
  removeDuplicates() {
    let current = this.head;

    // Traverse the list and remove duplicates
    while (current && current.next) {
      if (current.value === current.next.value) {
        current.next = current.next.next; // Skip duplicate node
      } else {
        current = current.next; // Move to the next unique node
      }
    }
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
list.append(2);
list.append(2);
list.append(4);
list.append(5);

console.log('Original List:');
list.printList();

list.removeDuplicates();

console.log('List After Removing Duplicates:');
list.printList();

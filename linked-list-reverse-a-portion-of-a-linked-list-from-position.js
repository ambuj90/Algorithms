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

  // Method to add a node at the end of the list
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

  // Method to reverse the list from position m to n
  reverseBetween(m, n) {
    if (!this.head || m === n) return;

    let dummy = new Node(0);  // Dummy node to handle edge cases
    dummy.next = this.head;
    let prev = dummy;

    // Move `prev` to the node before the `m`th position
    for (let i = 1; i < m; i++) {
      prev = prev.next;
    }

    let current = prev.next;  // Node at `m`th position

    // Reverse nodes between m and n
    for (let i = 0; i < n - m; i++) {
      let next = current.next;
      current.next = next.next;
      next.next = prev.next;
      prev.next = next;
    }

    // Update the head if m was 1
    this.head = dummy.next;
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
list.append(60);
list.append(70);

console.log('Original List:');
list.printList();

list.reverseBetween(3, 6);

console.log('List After Reversing from Position 3 to 6:');
list.printList();

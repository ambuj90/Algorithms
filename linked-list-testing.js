// Node class to represent a single element in the linked list
class Node {
    constructor(val) {
      this.val = val;  // Value of the node
      this.next = null;  // Pointer to the next node
    }
  }
  
  // SinglyLinkedList class to manage the linked list
  class SinglyLinkedList {
    constructor() {
      this.head = null;  // Head of the list (first node)
      this.tail = null;  // Tail of the list (last node)
      this.length = 0;  // Length of the list
    }
  
    // Method to add a new node at the end of the list
    push(val) {
      const newNode = new Node(val);  // Create a new node
  
      if (!this.head) {
        // If the list is empty, set the new node as both head and tail
        this.head = newNode;
        this.tail = newNode;
      } else {
        // Otherwise, add the new node to the end and update the tail
        this.tail.next = newNode;
        this.tail = newNode;
      }
  
      this.length++;  // Increase the length of the list
      return this;  // Return the list to allow chaining (optional)
    }
  
    // Method to print the linked list
    printList() {
      let current = this.head;
      let result = '';
      while (current) {
        result += `${current.val} -> `;
        current = current.next;
      }
      console.log(result + 'null');  // End of the list
    }
  }
  
  // Example usage
  const listPrint = new SinglyLinkedList();
  listPrint.push("hello");
  listPrint.push("world");
  
  // Print the list
  listPrint.printList();
  console.log('List Object:', listPrint);
  
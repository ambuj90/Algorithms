//Given two singly linked lists, The task is to insert nodes of the second list into the first list at alternate positions of the first list and leave the remaining nodes of
// the second list if it is longer.
//Input: head1: 1->2->3 , head2: 4->5->6->7->8
//Output: head1: 1->4->2->5->3->6 , head2: 7->8

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
  
    // Method to append a new node at the end of the list
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
  
    // Method to print the linked list
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
  
  // Function to merge second list into first at alternate positions
  function mergeAlternate(list1, list2) {
    let head1 = list1.head;
    let head2 = list2.head;
  
    while (head1 && head2) {
      // Store next pointers for both lists
      let next1 = head1.next;
      let next2 = head2.next;
  
      // Insert the node from list2 into list1
      head1.next = head2;
      head2.next = next1;
  
      // Move to the next nodes in both lists
      head1 = next1;
      head2 = next2;
    }
  
    list2.head = head2;  // Remaining nodes in list2 (if any)
  }
  
  // Example usage
  const list1 = new LinkedList();
  list1.append(1);
  list1.append(2);
  list1.append(3);
  
  const list2 = new LinkedList();
  list2.append(4);
  list2.append(5);
  list2.append(6);
  list2.append(7);
  list2.append(8);
  
  console.log('List 1:');
  list1.printList();
  
  console.log('List 2:');
  list2.printList();
  
  mergeAlternate(list1, list2);
  
  console.log('Merged List 1:');
  list1.printList();
  
  console.log('Remaining List 2 (if any):');
  list2.printList();

  // output
  // List 1:
// 1 -> 2 -> 3 -> NULL
// List 2:
// 4 -> 5 -> 6 -> 7 -> 8 -> NULL
// Merged List 1:
// 1 -> 4 -> 2 -> 5 -> 3 -> 6 -> NULL
// Remaining List 2 (if any):
// 7 -> 8 -> NULL

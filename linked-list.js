// Node class for the linked list
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Function to insert elements into a linked list
const insert = (head, value) => {
    let newNode = new Node(value);
    if (!head) return newNode;

    let current = head;
    while (current.next) {
        current = current.next;
    }
    current.next = newNode;
    return head;
};

// Example: Array of linked lists
let arrayOfLists = new Array(3).fill(null);

// Insert data into the first linked list at index 0
arrayOfLists[0] = insert(arrayOfLists[0], 'A');
arrayOfLists[0] = insert(arrayOfLists[0], 'A2');

// Insert data into the second linked list at index 1
arrayOfLists[1] = insert(arrayOfLists[1], 'B');
arrayOfLists[1] = insert(arrayOfLists[1], 'B2');

// Insert data into the third linked list at index 2
arrayOfLists[2] = insert(arrayOfLists[2], 'C');

// Function to print a linked list
const printList = (head) => {
    let current = head;
    let result = '';
    while (current) {
        result += current.value + ' -> ';
        current = current.next;
    }
    console.log(result + 'null');
};

// Print all linked lists in the array
arrayOfLists.forEach((list, index) => {
    console.log(`List at index ${index}:`);
    printList(list);
});

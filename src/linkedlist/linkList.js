/* eslint-disable no-console */
class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }
  find(item) {
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item
    while (currNode.value !== item) {
      /* Return null if it's the end of the list 
			and the item is not on the list */
      if (currNode.next === null) {
        return null;
      } else {
        // Otherwise, keep looking
        currNode = currNode.next;
      }
    }
    // Found it
    return currNode;
  }
  remove(item) {
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;
    while (currNode !== null && currNode.value !== item) {
      // Save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
  display() {
    const arr = [];
    let currentNode = this.head;
    do {
      arr.push(currentNode.value.id);
      currentNode = currentNode.next;
    } while (currentNode.next !== null);
    arr.push(currentNode.value.id);
    return arr;
  }
  move(ll, n) {
    let node = ll.head;
    while (node.next !== null && n > 0) {
      let tmp = node.value;
      node.value = node.next.value;
      node.next.value = tmp;
      node = node.next;
      n--;
    }
  }
}

module.exports = LinkedList;

// const test = new LinkedList();

// test.insertLast(1);
// test.insertLast(2);
// test.insertLast(3);
// test.insertLast(4);
// test.insertLast(5);
// test.insertLast(6);
// test.insertLast(7);
// test.insertLast(8);
// test.insertLast(9);
// test.insertLast(10);
// test.insertLast(11);
// console.log(test.display(test.head));
// test.move(test, 5);
// console.log(test.display(test.head));
// console.log(test);

// let node = ll.head;
// let tmp = node.next.next; // 2's pointer currently pointing at 3 stored as tmp
// node.next.next = node; // 2's next pointer now points at 1
// this.head = node.next;
// node.next = tmp; // 1 -> 3

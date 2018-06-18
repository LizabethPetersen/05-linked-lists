'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }
  // Time Complexity: O(1); Space Complexity: O(1)
  insertAtHead(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    return this;
  }
  // Time Complexity: O(n); Space Complexity: O(n)
  insertAtEnd(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }
  // Time Complexity: O(1); Space Complexity: O(1)
  find(value) {
    if (!this.head) {
      throw new Error('The linked list is empty');
    }
    if (this.head.value === value) {
      return this.head;
    }
    // Time Complexity: O(n); Space Complexity: O(n). 
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        return currentNode.next;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
  // Time Complexity: O(1); Space Complexity: O(1). 
  removeNode(value) {
    if (!value) {
      return null;
    }
    // Time Complexity: O(n); Space Complexity: O(n). 
    if (this.value >= 1) {
      LinkedList.pop();
    }
    return this;
  }
};

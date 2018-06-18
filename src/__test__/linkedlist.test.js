'use strict';

const LinkedList = require('../linked-list/ll');
const Node = require('../linked-list/node');
const inspect = require('./utils');

describe('testing linked list', () => {
  let testList;
  beforeEach(() => {
    testList = new LinkedList();
  });
  
  afterEach(() => {
    testList = null;
  });
  
  test('make sure we can instantiate a new instance', () => {
    expect(testList.head).toBeNull();
  });

  test('#insertAtHead', () => {
    testList.insertAtHead(7);
    expect(testList.head.value).toEqual(7);

    testList.insertAtHead(8);
    expect(testList.head.value).toEqual(8);
    expect(testList.head.next.value).toEqual(7);

    testList.insertAtHead(9);
    expect(testList.head.value).toEqual(9);
    expect(testList.head.next.value).toEqual(8);
    expect(testList.head.next.next.value).toEqual(7);

    inspect(testList, 'INSERT AT HEAD');
  });
  
  test('#find', () => {
    testList.insertAtHead(7);
    testList.insertAtHead(8);
    testList.insertAtHead(9);

    expect(testList.find(7)).toBeInstanceOf(Node);
    expect(testList.find(11)).toBeNull();
  });
});

// describe('testing nodes', () => {
// let testNode;
// test('make sure we can instantiate a new node', () => {
// expect(testNode.value).toBeNull();
// });
// });

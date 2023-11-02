const Node = require("./node");

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let oldTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }
    this.length--;
    return oldTail;
  }

  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(i) {
    if (i < 0 || i >= this.length) return null;
    let mid = Math.floor(this.length / 2);
    if (i <= mid) {
      let current = this.head;
      let count = 0;
      while (i !== count) {
        current = current.next;
        count++;
      }
      return current;
    } else {
      let current = this.tail;
      let count = this.length - 1;
      while (i !== count) {
        current = current.prev;
        count--;
      }
      return current;
    }
  }

  set(i, val) {
    let getNode = this.get(i);
    if (!getNode) return false;
    getNode.val = val;
    return true;
  }

  insert(i, val) {
    if (i < 0 || i > this.length) return false;
    if (i === this.length) return !!this.push(val);
    if (i === 0) return !!this.unshift(val);

    let newNode = new Node(val);
    let prevNode = this.get(i - 1);
    let nextNode = prevNode.next;

    newNode.next = nextNode;
    newNode.prev = prevNode;
    prevNode.next = newNode;
    nextNode.prev = newNode;
    this.length++;
    return true;
  }

  remove(i) {
    if (i < 0 || i >= this.length) return null;
    if (i === this.length - 1) return this.pop();
    if (i === 0) return this.shift();

    let removed = this.get(i);
    let nextN = removed.next;
    let prevN = removed.prev;

    prevN.next = nextN;
    nextN.prev = prevN;
    removed.next = null;
    removed.prev = null;
    this.length--;
    return removed;
  }

  reverse() {
    if (this.length === 0) return undefined;
    if (this.length === 1) return this;

    let next;
    let prev = null;
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    for (let i = 0; i < this.length; i++) {
      next = current.next;
      current.next = prev;
      current.prev = next;
      prev = current;
      current = next;
    }

    return this;
  }
}

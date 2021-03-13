class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(value) {
    const end = new ListNode(value);
    let currentNode = this.head;

    if (currentNode === null) {
      this.head = end;
      return;
    }

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    currentNode.next = end;
  }

  printList() {
    let currentNode = this.head;

    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  getLength() {
    let length = 0;
    let currentNode = this.head;

    while (currentNode !== null) {
      length++;
      currentNode = currentNode.next;
    }

    return length;
  }
}

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = LinkedList;

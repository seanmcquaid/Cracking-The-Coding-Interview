class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(value) {
    const end = new ListNode(value);
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = end;
  }
}

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

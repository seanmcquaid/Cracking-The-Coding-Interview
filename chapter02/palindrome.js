const LinkedList = require('./utils/LinkedList');

function isPalindrome(linkedList = new LinkedList()) {
  let listString = '';
  let currentNode = linkedList.head;

  while (currentNode !== null) {
    listString += currentNode.value;
    currentNode = currentNode.next;
  }

  return listString === listString.split('').reverse().join('');
}

const linkedList = new LinkedList();

linkedList.append('a');
linkedList.append('b');
linkedList.append('a');

console.log(isPalindrome(linkedList), true);

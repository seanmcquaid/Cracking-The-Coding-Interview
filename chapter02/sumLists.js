const LinkedList = require('./utils/LinkedList');

function reverseDigitsAndSumList(list = new LinkedList()) {
  let listValue = '';
  let currentNode = list.head;

  while (currentNode !== null) {
    listValue += currentNode.value;
    currentNode = currentNode.next;
  }

  return Number.parseInt(listValue.split('').reverse().join(''));
}

function sumLists(listOne = new LinkedList(), listTwo = new LinkedList()) {
  const sumList = new LinkedList();
  const listOneNumber = reverseDigitsAndSumList(listOne);
  const listTwoNumber = reverseDigitsAndSumList(listTwo);
  const sumString = `${listOneNumber + listTwoNumber}`;
  const reversedSumString = sumString.split('').reverse().join('');

  for (let i = 0; i < reversedSumString.length; i++) {
    sumList.append(Number.parseInt(reversedSumString[i]));
  }

  return sumList;
}

const listOne = new LinkedList();
listOne.append(7);
listOne.append(1);
listOne.append(6);

const listTwo = new LinkedList();
listTwo.append(5);
listTwo.append(9);
listTwo.append(2);

sumLists(listOne, listTwo);

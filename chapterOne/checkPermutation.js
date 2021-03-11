function checkPermutation(stringOne = '', stringTwo = '') {
  if (stringOne.length !== stringTwo.length) {
    return false;
  }
  return (
    stringOne.split('').sort().join('') === stringTwo.split('').sort().join('')
  );
}

console.log(checkPermutation('aba', 'aab'), true);

console.log(checkPermutation('aba', 'aaba'), false);

console.log(checkPermutation('aba', 'aa'), false);

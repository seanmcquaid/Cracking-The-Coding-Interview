function stringRotation(stringOne = '', stringTwo = '') {
  if (stringOne.length !== stringTwo.length) {
    return false;
  }

  return (stringTwo + stringTwo).includes(stringOne);
}

// Test
console.log(stringRotation('waterbottle', 'erbottlewat'), true);
console.log(stringRotation('waterbottle', 'erbotlewatt'), false);
console.log(stringRotation('aaata', 'aataa'), true);

const palindromePermutation = (string = '') => {
  const characters = {};
  let amountOfOneChars = 0;

  for (let char of string.toLowerCase()) {
    if (char !== ' ') {
      characters[char] = characters[char] ? characters[char] + 1 : 1;
    }
  }

  for (let char in characters) {
    if (characters[char] === 1) {
      amountOfOneChars++;
    }
  }

  return amountOfOneChars < 2;
};

console.log(palindromePermutation('Tact Coa'), true);
console.log(palindromePermutation('Tact boa'), false);

const stringCompression = (string = '') => {
  let compressedString = '';
  let currentChar = '';
  let charCount = 0;

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (char !== currentChar) {
      if (charCount !== 0) {
        compressedString += `${currentChar}${charCount}`;
      }
      currentChar = char;
      charCount = 1;
    } else {
      charCount++;
    }
  }

  compressedString += `${currentChar}${charCount}`;

  return compressedString;
};

console.log('aaaaaa', stringCompression('aaaaaa'), 'a6');
console.log('aabcccccaaa', stringCompression('aabcccccaaa'), 'a2b1c5a3');

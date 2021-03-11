function urlify(string = '', lengthWithoutSpaces) {
  const stringWithoutTrailingSpaces = string.slice(0, lengthWithoutSpaces);
  const urlString = stringWithoutTrailingSpaces.replaceAll(' ', '%20');
  return urlString;
}

console.log(urlify('Mr John Smith    ', 13), 'Mr%20John%20Smith');

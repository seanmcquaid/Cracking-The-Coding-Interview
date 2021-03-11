const oneAway = (stringOne = '', stringTwo = '') => {
  const longestString =
    stringOne.length >= stringTwo.length ? stringOne : stringTwo;
  const shortestString =
    stringTwo.length <= stringOne.length ? stringTwo : stringOne;
  let commonCharAmount = 0;

  for (let char of longestString) {
    if (shortestString.includes(char)) {
      commonCharAmount++;
    }
  }

  return longestString.length - commonCharAmount <= 1;
};

console.log(oneAway('pale', 'ple'), true);
console.log(oneAway('pales', 'pale'), true);
console.log(oneAway('pale', 'bale'), true);
console.log(oneAway('pale', 'bake'), false);

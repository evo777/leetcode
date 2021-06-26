var removeOuterParentheses = function (s) {
  let i = 0;
  let j = 0;
  let count = 0;
  const storage = [];

  while (j < s.length) {
    if (s[j] === '(') {
      count++;
    } else {
      count--;
    }

    // Found all the primitive decomposition parantheses
    if (count === 0) {
      storage.push(s.slice(i + 1, j));
      i = j + 1;
    }

    j++;
  }

  return storage.join('');
};
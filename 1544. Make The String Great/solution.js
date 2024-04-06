var makeGood = function (s) {
  const stack = [];

  for (let char of s) {
    // .at(-1) checks the last element of the array
    const last = stack.at(-1);
    if (last && char !== last && char.toLowerCase() === last.toLowerCase()) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
};

const removeDuplicates = (s) => {
  const stack = [];

  for (const letter of s) {
    if (stack.length === 0) {
      stack.push(letter);
    } else {
      const topOfStack = stack[stack.length - 1];
      if (letter === topOfStack) {
        stack.pop();
      } else {
        stack.push(letter);
      }
    }
  }

  return stack.join("");
};
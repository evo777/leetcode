var isValid = function(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    console.log("stack: ", stack);
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else if (s[i] === ")" && stack[stack.length - 1] === "(") {
      stack.pop();
    } else if (s[i] === "}" && stack[stack.length - 1] === "{") {
      stack.pop();
    } else if (s[i] === "]" && stack[stack.length - 1] === "[") {
      stack.pop();
    } else {
      // This case handles if the strings only include closings
      return false;
    }
  }

  return stack.length === 0;
};
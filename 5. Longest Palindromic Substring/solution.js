var expand = (s, start, end) => {
  while (0 <= start && end <= s.length -1 && s[start] === s[end]) {
    start--;
    end++;
  }
  return s.substring(start + 1, end);
};

var longestPalindrome = function(s) {
  if(!s || s.length <= 1) {
    return s
  }

  let result = s.substring(0, 1);
  for(let i = 0; i < s.length; i++) {
    let placeholder = expand(s, i, i);
    if (placeholder.length > result.length) {
      result = placeholder;
    }
    // Do a sceond expand because a palindrome could have two middles.
    placeholder = expand(s, i, i+1);
    if (placeholder.length > result.length) {
      result = placeholder;
    }
  }

  return result;
};
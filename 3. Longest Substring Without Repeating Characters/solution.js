var lengthOfLongestSubstring = function (s) {
  let left = 0
  let right = 0;
  const freq = {};
  let result = 0

  while (right < s.length) {
    const currChar = s[right];
    freq[currChar] = (freq[currChar] || 0) + 1;

    // Shrinking
    while (freq[currChar] > 1) {
      freq[s[left]]--;
      left++;
    }

    result = Math.max(result, right - left + 1);

    right++;
  }

  return result;
};
function lengthOfLongestSubstring(s: string): number {
  let left: number = 0;
  let right: number = 0;
  let result: number = 0;
  const seen: Record<string, number> = {};

  while (right < s.length) {
    const currChar: string = s[right];

    // shrink window
    if (seen[currChar]) {
      left = Math.max(left, seen[currChar]);
    }

    seen[currChar] = right + 1;
    result = Math.max(result, right - left + 1);
    right += 1;
  }

  return result;
}

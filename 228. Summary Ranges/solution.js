const summaryRanges = (nums) => {
  const result = [];
  let current = nums[0];
  for (let i = 0; i < nums.length; i++) {
    // Check to see if the next element is increased by 1.
    if (nums[i] + 1 !== nums[i + 1]) {
      // If not increased by 1, then push in either the number by itself or push in the consecutive numbers into the array;
      result.push(current === nums[i] ? '' + nums[i] : current + '->' + nums[i]);
      // Reassign current with the next number.
      current = nums[i + 1];
    }
  }
  return result;
}
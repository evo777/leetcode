var moveZeroes = function(nums) {
  let start = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // If element you are on is not a zero, swap it with the start index and increment start because you are not on a zero
      [nums[i], nums[start]] = [nums[start], nums[i]];
      start++;
    }
  }

  return nums;
};

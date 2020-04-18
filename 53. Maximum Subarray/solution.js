var maxSubArray = function (nums) {
  let result = nums[0];
  let current = 0;

  if (nums.length === 1) {
    return nums[0];
  }

  for (let i = 0; i < nums.length; i++) {
    current += nums[i];
    if (result < current) {
      result = current;
    }
    if (current < 0) {
      current = 0;
    }
  }

  return result;
};

var maxProduct = function (nums) {
  let max = nums[0];
  let min = nums[0];
  let result = nums[0] || 0;

  for (let i = 1; i < nums.length; i++) {
    let newMin = nums[i] * min;
    let newMax = nums[i] * max;
    max = Math.max(nums[i], newMin, newMax);
    min = Math.min(nums[i], newMin, newMax);
    result = Math.max(result, max);
  }

  return result;
};
var rob = function (nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  const result = [nums[0], Math.max(nums[0], nums[1])];

  for (let i = 2; i < nums.length; i++) {
    // Decide to rob the current house and add from result at current index minus 2. Or keep the previous index of result and not rob.
    const decision = Math.max(result[i - 1], nums[i] + result[i - 2]);
    result.push(decision);
  }

  return result[result.length - 1];
};

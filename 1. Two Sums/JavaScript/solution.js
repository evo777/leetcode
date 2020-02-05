var twoSum = function(nums, target) {
  const hash = {};

  for(let i = 0; i < nums.length; i++) {
    let found = target - nums[i];

    if (hash[found] !== undefined) {
      return [hash[found], i];
    } else {
      hash[nums[i]] = i;
    }
  }
};
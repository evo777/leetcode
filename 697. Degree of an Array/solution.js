var findShortestSubArray = function (nums) {
  const freq = {};
  let highest = 0;

  for (let i = 0; i < nums.length; i++) {
    if (freq[nums[i]] === undefined) {
      freq[nums[i]] = {
        occurrence: 0,
        start: i,
        end: i,
      };
    }

    freq[nums[i]].end = i;
    freq[nums[i]].occurrence++;
    highest = Math.max(highest, freq[nums[i]].occurrence);
  }

  let result = Infinity;

  for (let key in freq) {
    if (freq[key].occurrence === highest) {
      result = Math.min(result, freq[key].end - freq[key].start + 1);
    }
  }

  return result;
};

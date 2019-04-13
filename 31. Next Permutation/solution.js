var nextPermutation = function(nums) {
  // find the first descending element, nums[i-1] that satisfies nums[i-1] < nums[i] in the array from the right
  let i = nums.length - 1;
  while (i > 0) {
    if (nums[i-1] >= nums[i]) {
      i--;
    } else {
      break;
    }
  }
  // swap nums[i-1] with the smallest element between nums[i] and nums[length-1] that is larger than nums[i-1] (only do this step if the current array is not entirely descending like [4, 3, 2, 1])
  let j = nums.length - 1;
  while (j > i) {
    if (nums[j] <= nums[i-1]) {
      j--;
    } else {
      break;
    }
  }
  if (i !== 0) {
    swap(nums, i-1, j);
  }
  // reverse the part between nums[i] and nums[length-1] by using swap
  let mid = Math.floor((i+nums.length)/2);
  for (let k = i; k < mid; k++) {
    swap(nums, k, nums.length - k + i - 1);
  }
};

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

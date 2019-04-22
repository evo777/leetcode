var singleNonDuplicate = function(nums, start=0, end=nums.length-1) {
  if (nums[start] === nums[end]) {
    return nums[start];
  }

  if (start > end) {
    return;
  }

  let mid = Math.floor((start + end) / 2);

  if (mid % 2 === 0) {
    if (nums[mid] === nums[mid+1]) {
      return singleNonDuplicate(nums, mid+2, end);
    } else {
      return singleNonDuplicate(nums, start, mid);
    }
  }

  else {
    if (nums[mid] === nums[mid - 1]) {
      return singleNonDuplicate(nums, mid+1, end);
    } else {
      return singleNonDuplicate(nums, start, mid-1);
    }
  }
};
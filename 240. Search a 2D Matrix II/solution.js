const binarySearch = (array, target) => {
  let start = 0
  let end = array.length - 1;

  while (start <= end) {
    let midpoint = Math.floor((start + end) / 2);

    if (array[midpoint] === target) {
      return true;
    } else if (array[midpoint] > target) {
      end = midpoint - 1;
    } else {
      start = midpoint + 1;
    }
  }
};

var searchMatrix = function(matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    if (binarySearch(matrix[i], target)) {
      return true;
    }
  }

  return false;
};
var merge = function (intervals) {
  const sorted = intervals.sort((a, b) => {
    return a[0] - b[0];
  });
  // Initalize the result array
  const result = [sorted[0]];

  // Loop through the sorted array
  for (let i = 1; i < sorted.length; i++) {
    const test = sorted[i];
    // Compare last element in result second index with current array first index
    if (result[result.length - 1][1] >= sorted[i][0]) {
      // If it is second index is bigger than first index, then we take the max value between second index of both arrays
      result[result.length - 1][1] = Math.max(result[result.length - 1][1], sorted[i][1]);
    } else {
      // If not, then push in the result array,
      result.push(sorted[i]);
    }
  }

  return result;
};
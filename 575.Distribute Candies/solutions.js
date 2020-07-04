var distributeCandies = function (candies) {
  // Sort the array
  candies = candies.sort((a, b) => a - b);

  // Initialize count to be 1
  let count = 1;

  // Loop through the array and the breaking condition are i greater than array length or count reach half of array length
  // The half of the candies will be given away so that is part of the breaking condition
  for (let i = 0; i < candies.length && count < candies.length / 2; i++) {
    // If the current candy is greater than the adjacent candy (if they are unique)
    if (candies[i] > candies[i - 1]) {
      // Then increase count
      count++;
    }
  }

  return count;
};

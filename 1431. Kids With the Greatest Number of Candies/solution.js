var kidsWithCandies = function (candies, extraCandies) {
  const result = [];

  // Find the greatest value in candies array
  const maxNumCandy = Math.max(...candies);

  for (let i = 0; i < candies.length; i++) {
    // If current candy and extraCandies are greater or equal to the max value in candies array, push true. Else, push false
    if (candies[i] + extraCandies >= maxNumCandy) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
};

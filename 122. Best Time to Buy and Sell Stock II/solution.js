var maxProfit = (prices) => {
  let max = 0;
  let previous = Infinity;
  for (let i = 0; i < prices.length; i++) {
    if (previous < prices[i]) {
      max += prices[i] - previous;
    }

    previous = prices[i];
  }

  return max;
};

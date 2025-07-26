var coinChange = function(coins, amount) {
  const table = new Array(amount + 1);
  table[0] = 0;

  for (let i = 1; i <= amount; i++) {
    table[i] = Number.MAX_VALUE;
  }

  // Loop through the table
  for (let i = 1; i <= amount; i++) {
    // Loop through the coins array
    for (let j = 0; j < coins.length; j++) {
      // We are filling the array from 1 to amount. i represents the amount at that cell.
      // Minus current amount by current coin and see if that is greater than or equal to zero
      if (i - coins[j] >= 0) {
        // Each cell represent the minimal amount of coins needed to get to zero. The +1 is adding one extra coin to get to zero.
        table[i] = Math.min(table[i - coins[j]] + 1, table[i]);
      }
    }
  }

  return table[amount] === Number.MAX_VALUE ? -1 : table[amount];
};

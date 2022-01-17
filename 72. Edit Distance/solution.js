var minDistance = function (word1, word2) {
  const m = word1.length + 1;
  const n = word2.length + 1;
  // Initial table with row as word1 length and column as word2 length
  const table = new Array(n).fill(0).map(element => new Array(m).fill(0));

  // Initializing the first column
  for (let i = 0; i < n; i++) {
    table[i][0] = i;
  }

  // Initializing the first row
  for (let i = 0; i < m; i++) {
    table[0][i] = i;
  }

  // Filling out the table
  for (let y = 1; y < n; y++) {
    for (let x = 1; x < m; x++) {
      if (word1[x - 1] === word2[y - 1]) {
        table[y][x] = table[y - 1][x - 1];
      } else {
        table[y][x] = 1 + Math.min(table[y - 1][x], table[y][x - 1], table[y - 1][x - 1]);
      }
    }
  }

  return table[word2.length][word1.length];
};
const numIslands = (grid) => {
  let count = 0;
  let n;
  let m;

  const DFSMarking = (grid, i, j) => {
    if (i < 0 || j < 0 || i >= n || j >= m || grid[i][j] != '1') {
      return;
    }
    grid[i][j] = '0';
    DFSMarking(grid, i + 1, j);
    DFSMarking(grid, i - 1, j);
    DFSMarking(grid, i, j + 1);
    DFSMarking(grid, i, j - 1);
  };

  n = grid.length;
  if (n == 0) return 0;
  m = grid[0].length;
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {
      if (grid[i][j] === '1') {
        DFSMarking(grid, i, j);
        count++;
      }
    }
  }
  return count;
};
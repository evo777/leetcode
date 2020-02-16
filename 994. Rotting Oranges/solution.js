var orangesRotting = function(grid) {
  let queue = [];
  let numFresh = 0;
  let minutes = 0;

  // Add rotten oranges to queue and count number of fresh oranges
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 2) queue.push([i, j]);
      if (grid[i][j] === 1) numFresh++;
    }
  }

  while (queue.length && numFresh) {
    let newQueue = []; // queue for next minute
    while (queue.length) {
      let badOrange = queue.shift(); // Get first bad orange from the queue
      let newRottens = infectOthersHelper(
        grid,
        badOrange[0],
        badOrange[1],
        newQueue
      );
      numFresh -= newRottens;
    }

    minutes++;
    queue = newQueue;
  }

  if (numFresh !== 0) return -1;
  return minutes;
};

// Helper
var infectOthersHelper = function(grid, i, j, queue) {
  let infected = 0;

  if (i > 0 && grid[i - 1][j] === 1) {
    grid[i - 1][j]++; // turn 1 into 2
    infected++;
    queue.push([i - 1, j]);
  }

  if (j > 0 && grid[i][j - 1] === 1) {
    grid[i][j - 1]++; // turn 1 into 2
    infected++;
    queue.push([i, j - 1]);
  }

  if (i < grid.length - 1 && grid[i + 1][j] === 1) {
    grid[i + 1][j]++; // turn 1 into 2
    infected++;
    queue.push([i + 1, j]);
  }

  if (j < grid[0].length - 1 && grid[i][j + 1] === 1) {
    grid[i][j + 1]++; // turn 1 into 2
    infected++;
    queue.push([i, j + 1]);
  }

  return infected;
};

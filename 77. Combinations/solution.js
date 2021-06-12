var combine = function (n, k) {
  const result = [];

  function helper(num, build) {
    // base case
    if (build.length === k) {
      result.push(build);
      return;
    }

    // If current num passes the given n range
    if (num > n) {
      return;
    }

    // Recurse
    for (let i = num; i <= n; i++) {
      helper(i + 1, build.concat([i]));
    }
  }

  helper(1, []);
  return result;
};
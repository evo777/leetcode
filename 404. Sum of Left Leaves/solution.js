var sumOfLeftLeaves = function (root) {
  let sum = 0;

  function dfsTraversal(node) {
    // If we reach the bottom, break out of recursion
    if (!node) return;

    // If we are on the left and the left node has no right or left children, add to sum
    if (node.left && !node.left.left && !node.left.right) {
      sum += node.left.val;
    }

    // Recurse
    dfsTraversal(node.left);
    dfsTraversal(node.right);
  }

  dfsTraversal(root);

  return sum;
};
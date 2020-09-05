var sumOfLeftLeaves = function (root) {
  let sum = 0;

  function dfsTraversal(node) {
    if (!node) return;

    if (node.left && !node.left.left && !node.left.right) {
      sum += node.left.val;
    }

    dfsTraversal(node.left);
    dfsTraversal(node.right);
  }

  dfsTraversal(root);

  return sum;
};
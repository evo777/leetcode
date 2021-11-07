var rangeSumBST = function (root, low, high) {
  let result = 0;

  const dfsHelper = (node) => {
    if (!node) {
      return;
    }

    if (node.val >= low && node.val <= high) {
      result += node.val;
    }

    dfsHelper(node.left);
    dfsHelper(node.right);
  };

  dfsHelper(root);
  return result;
};
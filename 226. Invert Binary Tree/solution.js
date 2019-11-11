var invertTree = function(root) {
  function helper(root) {
    // If we hit the end of the tree, return out
    if (!root) {
      return;
    }

    // Swap the tree with left and right
    [root.left, root.right] = [root.right, root.left];

    // Continue to traverse
    helper(root.left);
    helper(root.right);
  }

  helper(root);
  return root;
};

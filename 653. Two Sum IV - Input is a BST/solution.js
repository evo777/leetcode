var findTarget = function(root, k) {
  let hash = {};

  function traverseTree(root) {
    // At the end of tree and no match founded, return false
    if (!root) {
      return false;
    }

    const found = k - root.val;

    // If found is in the hash table, return true
    if (found in hash) return true;

    // If found is not in hash table, add it to hash table
    hash[root.val] = root.val;

    // Recurse
    return traverseTree(root.left) || traverseTree(root.right);
  }

  return traverseTree(root);
};

module.exports = findTarget;
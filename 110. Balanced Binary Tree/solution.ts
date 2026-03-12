function isBalanced(root: TreeNode | null): boolean {
  let res = true;

  function dfs(node: TreeNode): number {
    if (!node) return 0;

    let left = dfs(node.left);
    let right = dfs(node.right);

    if (Math.abs(left - right) > 1) {
      res = false;
    }

    return Math.max(left, right) + 1;
  }

  dfs(root);

  return res;
}

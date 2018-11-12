const rangeSumBST = (root, L, R) => {
  let answer = 0;

  const dfs = (node, leftValue, rightValue) => {
    if (node != null) {
      if (leftValue <= node.val && node.val <= rightValue) {
        answer += node.val;
      }

      if (leftValue < node.val) {
        dfs(node.left, leftValue, rightValue);
      }

      if (node.val < rightValue) {
        dfs(node.right, leftValue, rightValue);
      }
    }
  };

  dfs(root, L, R);
  return answer;
};
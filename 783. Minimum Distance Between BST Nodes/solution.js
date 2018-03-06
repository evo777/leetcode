const minDiffInBST = function (root) {
  let status = { minDiff: Number.POSITIVE_INFINITY, lastValue: Number.NEGATIVE_INFINITY };
  traverse(root, status);
  return status.minDiff;
};
const traverse = (node, status) => {
  if (!node) {
    return;
  }
  traverse(node.left, status);
  let diff = node.val - status.lastValue;
  if (diff < status.minDiff) {
    status.minDiff = diff;
  }
  status.lastValue = node.val;
  traverse(node.right, status);
}
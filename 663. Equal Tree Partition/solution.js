/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

let result = false;

const total = (root, sum) => {
  if (root == null) return 0;
  if (root.left == null && root.right == null) return root.val;
  let left = total(root.left, sum);
  let right = total(root.right, sum);
  if ((root.left != null && left == sum/2) || (root.right != null && right == sum/2)) {
    result = true;
  }
  return root.val + left + right;
};

const checkEqualTree = root => {
  let sum = total(root, 0);
  if (sum % 2 != 0) return false;

  result = false;
  total(root, sum);
  return result;
};
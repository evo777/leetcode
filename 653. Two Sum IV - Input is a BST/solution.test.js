const findTarget = require("./solution");

class BSTNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

describe("Two Sum IV - Input is a BST", () => {
  test("should return true", () => {
    const tree = new BSTNode(5);
    tree.left = new BSTNode(3);
    tree.right = new BSTNode(6);
    tree.left.left = new BSTNode(2);
    tree.left.right = new BSTNode(4);
    tree.right.right = new BSTNode(7);

    expect(findTarget(tree, 9)).toEqual(true);
  });

  test("should return false", () => {
    const tree = new BSTNode(5);
    tree.left = new BSTNode(3);
    tree.right = new BSTNode(6);
    tree.left.left = new BSTNode(2);
    tree.left.right = new BSTNode(4);
    tree.right.right = new BSTNode(7);

    expect(findTarget(tree, 28)).toEqual(false);
  });
});

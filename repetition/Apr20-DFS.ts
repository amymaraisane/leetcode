// pre-order DFS for a tree
// Root, then left subtree, then right subtree
// often used to create a copy of a tree

function dfs(root: DFSNode, target: number): DFSNode {
  if (root === null) return;
  if (root.val === target) {
    console.log('found target: ', root);
    return root;
  }
  let left = dfs(root.left, target);
  let right = dfs(root.right, target);
  return null;
}

class DFSNode{
  public val: number;
  public left: DFSNode;
  public right: DFSNode;

  constructor(val: number, left: DFSNode, right: DFSNode) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}



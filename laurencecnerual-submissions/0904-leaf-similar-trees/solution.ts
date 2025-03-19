/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function findLeaves(root: TreeNode | null, leaves: number[] = []): number[] {
    if (!root) {
        return;
    }

    if (!root.left && !root.right) {
        leaves.push(root.val);
    } else {
        if (root.left) {
            findLeaves(root.left, leaves);
        }

        if (root.right) {
            findLeaves(root.right, leaves);
        }
    }

    return leaves;
}

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    let root1Leaves = findLeaves(root1);
    let root2Leaves = findLeaves(root2);

    if (root1Leaves.length !== root2Leaves.length) {
        return false;
    }

    for (let i = 0; i < root1Leaves.length; i++) {
        if (root1Leaves[i] !== root2Leaves[i]) {
            return false;
        }
    }
    
    return true;
};

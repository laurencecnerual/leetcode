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

function maxDepth(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }

    if (!root.left && !root.right) {
        return 1;
    }

    let leftLen = 0

    if (root.left) {
        leftLen = 1 + maxDepth(root.left);
    }

    let rightLen = 0
    
    if (root.right) {
        rightLen = 1 + maxDepth(root.right);
    }

    if (leftLen > rightLen) {
        return leftLen;
    } else {
        return rightLen;
    }

};

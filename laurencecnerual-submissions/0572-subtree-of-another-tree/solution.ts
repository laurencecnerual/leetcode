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

function isIdentical(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (!root && !subRoot) {
        return true;
    } else if (!root || !subRoot) {
        return false;
    } else {
        return (root.val === subRoot.val) && isIdentical(root.left, subRoot.left) && isIdentical(root.right, subRoot.right);
    }
}

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (!root || !subRoot) {
        return false;
    } else if (isIdentical(root, subRoot)) {
        return true;
    } else {
        return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
    }
};

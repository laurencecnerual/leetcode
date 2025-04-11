# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def traverse(self, root: Optional[TreeNode], values: List) -> List:
        if root is None:
            return

        self.traverse(root.left, values)
        values.append(root.val)
        self.traverse(root.right, values)
        return values

    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        sortedValues = self.traverse(root, [])
        return sortedValues[k-1]

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode], traversal = None) -> List[int]:
        if traversal is None:
            traversal = []

        if not root:
            return []
        
        self.inorderTraversal(root.left, traversal)
        traversal.append(root.val)
        self.inorderTraversal(root.right, traversal)

        return traversal

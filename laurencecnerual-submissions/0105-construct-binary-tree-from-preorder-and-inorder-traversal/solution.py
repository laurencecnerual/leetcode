# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        if len(preorder) == 0:
            return None

        root = TreeNode(preorder[0])
        rootIndex = inorder.index(root.val)
        leftSubtreeInOrder = inorder[0:rootIndex]
        rightSubtreeInOrder = inorder[rootIndex + 1:]

        root.left = self.buildTree(preorder[1:1 + len(leftSubtreeInOrder)], leftSubtreeInOrder)
        root.right = self.buildTree(preorder[1 + len(leftSubtreeInOrder):], rightSubtreeInOrder)

        return root
        

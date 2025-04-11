# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def buildTree(self, inorder: List[int], postorder: List[int]) -> Optional[TreeNode]:
        if len(postorder) == 0:
            return None

        mapping = {value: index for index, value in enumerate(inorder)}
        root = TreeNode(postorder[len(postorder) - 1])
        rootIndex = mapping[root.val]
        leftSubtreeInOrder = inorder[0:rootIndex]
        rightSubtreeInOrder = inorder[rootIndex + 1:]
        
        root.left = self.buildTree(leftSubtreeInOrder, postorder[0:len(leftSubtreeInOrder)])
        root.right = self.buildTree(rightSubtreeInOrder, postorder[len(leftSubtreeInOrder):len(postorder) - 1])

        return root

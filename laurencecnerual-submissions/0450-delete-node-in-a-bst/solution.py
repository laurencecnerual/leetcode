# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def carry(self, replacementNode: Optional[TreeNode], deletedNode: Optional[TreeNode]) -> Optional[TreeNode]:
        if replacementNode.left:
            replacementNode.left = self.carry(replacementNode.left, deletedNode)
            return replacementNode
        else:
            deletedNode.val = replacementNode.val
            return replacementNode.right

    def deleteNode(self, root: Optional[TreeNode], key: int) -> Optional[TreeNode]:
        if root is None:
            return root

        if key == root.val:
            if root.left is None and root.right is None:
                return None
            elif root.left is not None and root.right is not None:
                root.right = self.carry(root.right, root)
                return root
            else:
                return root.left if root.right is None else root.right
        elif key < root.val:
            root.left = self.deleteNode(root.left, key)
            return root
        else:
            root.right = self.deleteNode(root.right, key)
            return root

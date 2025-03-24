# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        def doesAllPass(action: str, val: int, node: Optional[TreeNode]) -> bool:
            if not node:
                return True

            if action == "less":
                if node.val >= val:
                    return False

                if node.left and node.right:
                    return node.left.val < val and doesAllPass("less", val, node.left) and node.right.val < val and doesAllPass("less", val, node.right)
                elif node.left:
                    return node.left.val < val and doesAllPass("less", val, node.left)
                elif node.right:
                    return node.right.val < val and doesAllPass("less", val, node.right)
                else:
                    return True

            elif action == "more":
                if node.val <= val:
                    return False

                if node.left and node.right:
                    return node.left.val > val and doesAllPass("more", val, node.left) and node.right.val > val and doesAllPass("more", val, node.right)
                elif node.left:
                    return node.left.val > val and doesAllPass("more", val, node.left)
                elif node.right:
                    return node.right.val > val and doesAllPass("more", val, node.right)
                else:
                    return True

        if not root.left and not root.right:
            return True
        elif root.left and not root.right:
            return self.isValidBST(root.left) and doesAllPass("less", root.val, root.left)
        elif root.right and not root.left:
            return self.isValidBST(root.right) and doesAllPass("more", root.val, root.right)
        else:
            return self.isValidBST(root.left) and doesAllPass("less", root.val, root.left) and self.isValidBST(root.right) and doesAllPass("more", root.val, root.right)


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class BSTIterator:

    def __init__(self, root: Optional[TreeNode]):
        self.values = self.traverse(root, [])
        self.index = 0

    def next(self) -> int:
        self.index += 1
        return self.values[self.index - 1]

    def hasNext(self) -> bool:
        return self.index < len(self.values)
        
    def traverse(self, root: Optional[TreeNode], values: List) -> List:
        if root is None:
            return []

        self.traverse(root.left, values)
        values.append(root.val)
        self.traverse(root.right, values)
        return values

# Your BSTIterator object will be instantiated and called as such:
# obj = BSTIterator(root)
# param_1 = obj.next()
# param_2 = obj.hasNext()

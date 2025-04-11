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

    def getMinimumDifference(self, root: Optional[TreeNode]) -> int:
        sortedValues = self.traverse(root, [])
        minDifference = float('inf')

        for i in range(0, len(sortedValues) - 1):
            difference = sortedValues[i+1] - sortedValues[i]

            if (difference < minDifference):
                if difference == 1:
                    return difference

                minDifference = difference

        return minDifference
        

"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""

from typing import Optional
class Solution:
    def cloneGraph(self, node: Optional['Node']) -> Optional['Node']:
        if not node:
            return None

        clonedNodes = {}
        clonedNodes[node] = Node(node.val)
        q = [node]

        while q:
            current = q.pop(0)

            for n in current.neighbors:
                if n not in clonedNodes:
                    clonedNodes[n] = Node(n.val)
                    q.append(n)

                clonedNodes[current].neighbors.append(clonedNodes[n])

        return clonedNodes[node]

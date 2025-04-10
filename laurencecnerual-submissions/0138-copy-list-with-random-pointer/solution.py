"""
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
"""

class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        if not head:
            return None

        current = head
        newHead = Node(head.val)
        newCurrent = newHead

        nodeLookup = {}
        nodeLookup[id(head)] = newHead

        while current.next:
            current = current.next
            newCurrent.next = Node(current.val)
            newCurrent = newCurrent.next
            nodeLookup[id(current)] = newCurrent

        current = head
        newCurrent = newHead

        while current:
            if current.random:
                newCurrent.random = nodeLookup[id(current.random)]

            current = current.next
            newCurrent = newCurrent.next

        return newHead
        

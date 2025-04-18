# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        current = head
        myStr = ""

        while current:
            myStr += str(current.val)
            current = current.next

        return myStr == myStr[::-1]

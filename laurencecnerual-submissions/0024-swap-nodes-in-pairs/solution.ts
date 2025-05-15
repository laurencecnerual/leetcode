/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function swapPairs(head: ListNode | null): ListNode | null { 
    if (!head || !head.next) return head;

    let zeroth = null; // for tracking the second node from the previous pair of nodes
    let first = head;
    let second = first.next;
    let third = second.next; // for tracking the first node in the next pair of nodes

    let newHead = second;

    while (second) {
        second.next = first;
        first.next = third;
        if (zeroth) zeroth.next = second;

        zeroth = first;
        first = third;
        second = first ? first.next : null;
        third = second ? second.next : null;
    }

    return newHead;
};

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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let current = head;
    let arr = [];

    while (current) {
        arr.push(current);
        current = current.next;
    }

    let deletionIndex = arr.length - n;

    if (arr[deletionIndex - 1]) {
        arr[deletionIndex - 1].next = arr[deletionIndex].next;
        return head;
    } else if (arr[deletionIndex + 1]) {
        return arr[deletionIndex + 1];
    } else {
        return null;
    }
};

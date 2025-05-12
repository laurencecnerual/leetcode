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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let dict = {}
    let current = headA;

    while (current) {
        if (!dict[current.val]) {
            dict[current.val] = [current]
        } else {
            dict[current.val].push(current)
        }
        
        current = current.next;
    }

    current = headB;

    while (current) {
        if (dict[current.val]) {
            for (let node of dict[current.val]) {
                if (current === node) {
                    return current;
                }
            }
        }

        current = current.next;
    }

    return null;
};

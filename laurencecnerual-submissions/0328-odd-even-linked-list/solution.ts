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

function oddEvenList(head: ListNode | null): ListNode | null {
    if (!head || !head.next || !head.next.next) {
        return head;
    }
    
    let odd = head;
    let even = head.next;
    let evenHead = head.next;

    while (odd) {
        if (even && even.next) {
            odd.next = even.next
            odd = even.next;

            if (odd.next) {
                even.next = odd.next;
                even = odd.next;
            } else {
                even.next = null;
                even = null;
            }
        } else {
            odd.next = evenHead;
            odd = null;
        }
    }

    return head;
};

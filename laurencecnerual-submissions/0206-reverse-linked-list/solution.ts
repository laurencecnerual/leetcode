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

function reverseList(head: ListNode | null): ListNode | null {
    let current = head;
    let arr = [];

    if (!head) {
        return null;
    }

    while (current) {
        let payload = {...current};
        payload.next = null;
        arr.push(payload)
        current = current.next;
    }

    let last = arr.length - 1;


    for (let i = last; i > 0; i--) {
        arr[i].next = arr[i - 1];
    }

    return arr[last];
};

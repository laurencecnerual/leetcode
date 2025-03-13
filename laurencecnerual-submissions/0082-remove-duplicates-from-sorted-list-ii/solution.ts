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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head;
    }

    let prev = head;
    let dict = {};
    dict[prev.val] = 1;

    let current = head.next;

    while (current) {
        if (dict[current.val]) {
            dict[current.val] += 1;
            prev.next = current.next;
            
        } else {
            dict[current.val] = 1;
            prev = current;
        }
        
        current = current.next;
    }

    current = head;

    while (current && current === head) {
        if (dict[current.val] > 1) {
            head = current.next;
            current = head;
        } else {
            current = current.next
        }
    }

    prev = head;

    while (current) {
        if (dict[current.val] > 1) {
            prev.next = current.next;
        } else {
            prev = current;
        }

        current = current.next;
    }

    return head;
};

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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    if (!head.next || left === right) {
        return head;
    }

    let currentPosition = 1;
    let current = head;
    let lastLeft = null;
    let firstRight = null;
    let nodes = [];

    while (current) {
        if (currentPosition + 1 === left) {
            lastLeft = current;
        } else if (currentPosition - 1 === right) {
            firstRight = current;
        } else if (currentPosition >= left && currentPosition <= right) {
            nodes.push(current);
        }

        current = current.next;
        currentPosition++;
    }

    for (let i = nodes.length - 1; i > 0; i--) {
        nodes[i].next = nodes[i - 1];
    }

    if (lastLeft) {
        lastLeft.next = nodes[nodes.length - 1];
    } else {
        head = nodes[nodes.length - 1];
    }
    
    nodes[0].next = firstRight;

    return head;
};

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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head || !head.next || k === 0) {
        return head;
    }

    let nodes = [];
    let current = head;

    while (current) {
        nodes.push(current);
        current = current.next;
    }

    k = k % nodes.length; // to prevent unnecessary rotations (i.e. rotating a 3-element array 4 times is the same as rotating it once)

    if (k === 0) { // because the result of the rotation is no different from the original linked list
        return head;
    }

    nodes = nodes.slice(nodes.length - (k + 1));
    let newHead = nodes[0].next;
    nodes[0].next = null;
    nodes[nodes.length - 1].next = head;
    head = newHead;

    return head;
};

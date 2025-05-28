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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    if (k === 1) return head;

    let current = head;
    let nodeArr = [];

    while (current) {
        nodeArr.push(current);
        current = current.next
    }

    let nodeCount = nodeArr.length;
    let iterations = Math.floor(nodeCount / k);

    for (let i = iterations * k - 1; i >= 0; i--) {
        if (i % k === 0) {
            if (nodeArr[i + 2 * k - 1]) { 
                nodeArr[i].next = nodeArr[i + 2 * k - 1] // point to new head of the next sublist of k elements
            } else if (nodeArr[iterations * k]) {
                nodeArr[i].next = nodeArr[iterations * k]; // point to the head of the sublist that is less than k elements (the remainder nodes at the end of the list)
            } else {
                nodeArr[i].next = null; // because there are no nodes left to point to
            }
        } else {
            nodeArr[i].next = nodeArr[i - 1]
        }
    }

    return nodeArr[k - 1];
};

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

function deleteMiddle(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return null;
    }

    let current = head;
    let nodeArray = [];

    while (current) {
        nodeArray.push(current);
        current = current.next;
    }

    if (nodeArray.length === 2) {
        head.next = null;
        return head;
    }

    let middleIndex = nodeArray.length % 2 === 1 ? Math.floor(nodeArray.length / 2) : Math.ceil(nodeArray.length / 2);

    nodeArray[middleIndex - 1].next = nodeArray[middleIndex + 1];
    return head;
};

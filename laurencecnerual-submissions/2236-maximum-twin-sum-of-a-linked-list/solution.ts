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

function pairSum(head: ListNode | null): number {
    let current = head;
    let values = [];

    while (current) {
        values.push(current.val);
        current = current.next;
    }

    let maxSum = 0;
    let right = values.length - 1;

    for (let left = 0; left < values.length; left++) {
        let sum = values[left] + values[right];

        if (sum > maxSum) {
            maxSum = sum;
        }
        
        right--;
    }

    return maxSum;
};

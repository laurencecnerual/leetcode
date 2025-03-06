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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let l1Values = [];
    let l2Values = [];

    let l1Current = l1;
    let l2Current = l2;

    while (l1Current) {
        l1Values.push(l1Current.val);
        l1Current = l1Current.next;
    }

    while (l2Current) {
        l2Values.push(l2Current.val);
        l2Current = l2Current.next;
    }

    l1Values.reverse();
    let l1Num = BigInt(l1Values.join(""));

    l2Values.reverse();
    let l2Num = BigInt(l2Values.join(""));

    let sum = l1Num + l2Num;
    let sumStr = "" + sum;
    let sumValues = sumStr.split("");
    sumValues.reverse();

    let nodes = [];

    for (let value of sumValues) {
        nodes.push(new ListNode(Number(value)));
    }

    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].next = nodes[i+1];
    }

    return nodes[0];
};

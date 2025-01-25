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

function cacheNodes(head: ListNode): ListNode[] {
    let current = head; 
    let arr: ListNode[] = [];

        while (current) {
        arr.push({...current});
        current = current.next
    }

    return arr;
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {

    let nodesList1 = cacheNodes(list1);
    let nodesList2 = cacheNodes(list2);
    let completeNodesList = nodesList1.concat(nodesList2);

    if (completeNodesList.length === 0) {
        return null;
    }

    completeNodesList.sort((a: ListNode, b: ListNode) => a.val - b.val);
    
    let current = completeNodesList[0];
    let index = 0;
    let remainingNodes = completeNodesList.length - 1;

    while (current && remainingNodes > 0) {
        current.next = completeNodesList[++index];
        current = current.next;
        remainingNodes--;
    }

    return completeNodesList[0]
};

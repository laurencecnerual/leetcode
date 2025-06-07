/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

func addTwoBigNumbers(str1 string, str2 string) string {
    num1 := new(big.Int)
    num1.SetString(str1, 10)

    num2 := new(big.Int)
    num2.SetString(str2, 10)

    num3 := new(big.Int).Add(num1, num2)
    str3 := num3.String()

    return str3
}

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
    current := l1
    str1 := ""

    for current != nil {
        str1 += strconv.Itoa(current.Val)
        current = current.Next
    }

    current = l2
    str2 := ""

    for current != nil {
        str2 += strconv.Itoa(current.Val)
        current = current.Next
    }

    num1, _ := strconv.Atoi(str1)
    num2, _ := strconv.Atoi(str2)

    num3 := num1 + num2
    str3 := strconv.Itoa(num3)

    if (len(str1) > 18 || len(str2) > 18) { // recompute using big ints to avoid overflow issues
        str3 = addTwoBigNumbers(str1, str2)
    }

    first_digit, _ := strconv.Atoi(string(str3[0]))
    head := &ListNode{Val: first_digit}
    current = head

    for index, digit_rune := range str3 {
        if index > 0 {
            digit, _ := strconv.Atoi(string(digit_rune))
            current.Next = &ListNode{Val: digit}
            current = current.Next
        }
    }

    return head
}

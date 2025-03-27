import sys
sys.set_int_max_str_digits(100000)

class Solution:
    def trailingZeroes(self, n: int) -> int:
        factorial = 1

        for i in range(2, n + 1):
            factorial *= i

        strFactorial = str(factorial)

        trailingZeroCount = 0

        for digit in reversed(strFactorial):
            if int(digit) == 0:
                trailingZeroCount += 1
            else:
                break

        return trailingZeroCount

class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        arrLength = len(temperatures)
        waitPerDay = [0] * arrLength
        stack = []

        for i in range(arrLength - 1, -1, -1):
            while stack and temperatures[i] >= temperatures[stack[-1]]:
                stack.pop()

            if stack:
                waitPerDay[i] = stack[-1] - i

            stack.append(i)
                    
        return waitPerDay

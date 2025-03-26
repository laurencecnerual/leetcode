class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        firstIndex = -1
        secondIndex = -1

        for i in range (len(numbers) - 1, 0, -1):
            firstNum = target - numbers[i]

            try:
                index = numbers.index(firstNum)
                
                if index != i:
                    firstIndex = index
                    secondIndex = i
                    break
            except ValueError:
                pass

        return [firstIndex + 1, secondIndex + 1]

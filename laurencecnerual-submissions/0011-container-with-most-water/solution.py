class Solution:
    def maxArea(self, height: List[int]) -> int:
        maxWater = 0
        left = 0
        right = len(height) - 1

        while left < right:
            maxWater = max(maxWater, (right - left) * min(height[left], height[right]))

            if height[left] < height[right]:
                left += 1
            elif height[left] > height[right]:
                right -= 1
            else:
                if height[left + 1] >= height[right - 1]:
                    left += 1
                else:
                    right -=1

        return maxWater
        

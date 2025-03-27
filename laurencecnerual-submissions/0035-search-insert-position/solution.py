class Solution:
    def binarySearch(self, nums: List[int], target: int, left: int, right: int) -> int:
        while left <= right:
            mid = (left + right) // 2

            if target == nums[mid]:
                return mid
            elif target > nums[mid]:
                left = mid + 1
            else:
                right = mid - 1

        return left

    def searchInsert(self, nums: List[int], target: int) -> int:
        return self.binarySearch(nums, target, 0, len(nums) - 1)
        



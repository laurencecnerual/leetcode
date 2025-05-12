import bisect

class Solution:
    def maxScore(self, nums1: List[int], nums2: List[int], k: int) -> int:
        nums = list(zip(nums1, nums2))
        nums.sort(key=lambda pair: pair[1], reverse=True)
        nums1_sorted, nums2_sorted = zip(*nums)
        nums1_sorted = list(nums1_sorted)
        nums2_sorted = list(nums2_sorted)

        current_nums_in_total = sorted(nums1_sorted[:k])
        current_total = sum(current_nums_in_total)
        current_minimum = nums2_sorted[k - 1]
        max_score = current_total * current_minimum

        for i in range(k, len(nums2_sorted)):
            new_joiner = nums1_sorted[i]
            current_minimum = nums2_sorted[i]
            weakest_link = current_nums_in_total.pop(0)
            current_total -= weakest_link
            current_total += new_joiner
            bisect.insort_right(current_nums_in_total, new_joiner)
            current_score = current_total * current_minimum

            if current_score > max_score:
                max_score = current_score

        return max_score

class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort(key=lambda interval: (interval[0], interval[1]))
        i = 1
        intervalCount = len(intervals)
        
        while i < intervalCount:
            prevStart = intervals[i - 1][0]
            prevEnd = intervals[i - 1][1]
            currStart = intervals[i][0]
            currEnd = intervals[i][1]

            if currStart > prevEnd: # no overlap
                i += 1
            else:
                if currStart <= prevEnd and currStart >= prevStart: # staggering overlap
                    intervals[i-1][1] = max(currEnd, prevEnd)
                    
                intervals.remove(intervals[i]) # for intervals fully duplicating another
                intervalCount -=1

        return intervals

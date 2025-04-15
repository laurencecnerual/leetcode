class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        if len(intervals) == 0:
            return [newInterval]
        elif newInterval[1] < intervals[0][0]: #newInterval is before all
            intervals.insert(0, newInterval)
            return intervals
        elif newInterval[0] > intervals[len(intervals) - 1][1]: #newInterval is after all
            intervals.append(newInterval)
            return intervals

        affected_intervals = []
        insertion_index = -1

        for i in range(len(intervals)):
            start = intervals[i][0]
            end = intervals[i][1]

            if start <= newInterval[0] and end >= newInterval[1]: #newInterval fits within an existing interval
                return intervals
            
            if (newInterval[0] >= start and newInterval[0] <= end) or (newInterval[0] < start and newInterval[1] > end) or (newInterval[1] >= start and newInterval[1] <= end):
                affected_intervals.append(intervals[i])

                if (insertion_index == -1):
                    insertion_index = i

        if len(affected_intervals) == 0: #newInterval does not overlap with any existing intervals
            for i in range(len(intervals) - 1, -1, -1):
                if newInterval[0] > intervals[i][1]:
                    intervals.insert(i + 1, newInterval)
                    return intervals

        merged_interval = [affected_intervals[0][0], affected_intervals[len(affected_intervals) - 1][1]] # all affected_intervals combined into one

        if newInterval[1] > merged_interval[1]: # extend the end to integrate newInterval
            merged_interval[1] = newInterval[1]

        if newInterval[0] < merged_interval[0]: # extend the start to integrate newInterval
            merged_interval[0] = newInterval[0]

        for interval in affected_intervals:
            intervals.remove(interval)
    
        intervals.insert(insertion_index, merged_interval)

        return intervals
        

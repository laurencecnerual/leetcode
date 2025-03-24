class Solution:
    def hIndex(self, citations: List[int]) -> int:
        hIndex = 0
        citations.sort(reverse=True)
        
        for index, citation in enumerate(citations):
            if citation >= index + 1:
                hIndex += 1
            else:
                return hIndex

        return hIndex
        

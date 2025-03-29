class Solution:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        gasSum = 0
        costSum = 0
        gasInTank = 0
        startingIndex = 0

        for i in range(0, len(gas)):
            gasSum += gas[i]
            costSum += cost[i]
            gasInTank += gas[i] - cost[i]
            
            if gasInTank < 0:
                gasInTank = 0
                startingIndex = i + 1

        if costSum > gasSum:
            return -1

        return startingIndex
        

function minCostClimbingStairs(cost: number[]): number {
    let minCost = new Array(cost.length);
    minCost[0] = cost[0];
    minCost[1] = cost[1];

    for (let i = 2; i < minCost.length; i++) {
        minCost[i] = Math.min(minCost[i-1], minCost[i-2]) + cost[i];
    }

    let minTotal = Math.min(minCost[minCost.length-1], minCost[minCost.length-2]);

    return minTotal;
};

function lastStoneWeight(stones: number[]): number {
    stones.sort((a, b) => b - a);

    while (stones && stones.length > 1) {
        if (stones[0] === stones[1]) {
            stones.shift();
            stones.shift();
        } else {
            let newWeight = stones[0] - stones[1];
            stones.shift();
            stones[0] = newWeight;
            stones.sort((a, b) => b - a);
        }
    }

    if (stones.length === 1) {
        return stones[0];
    } else {
        return 0;
    }
};

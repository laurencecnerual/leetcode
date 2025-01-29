function climbStairs(n: number): number {
    let ways = Array(n + 1).fill(0);
    ways[1] = 1;
    ways[2] = 2;

    for (let i = 3; i < n + 1; i++) {
        ways[i] = ways[i - 1] + ways[i - 2];
    }

    return ways[n];
};

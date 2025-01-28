function coinChange(coins: number[], amount: number): number {
    let arr = new Array(amount + 1).fill(amount + 1);
    arr[0] = 0;

    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            arr[i] = Math.min(arr[i], arr[i - coin] + 1);
        }
    }

    return arr[amount] === amount + 1 ? -1 : arr[amount];
};

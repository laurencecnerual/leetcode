let cache = {};

function tribonacci(n: number): number {
    if (n === 0) {
        return 0;
    } else if (n === 1 || n === 2) {
        return 1;
    } else if (cache[n]) {
        return cache[n];
    } else {
        let result = tribonacci(n - 3) + tribonacci(n - 2) + tribonacci(n - 1);
        cache[n] = result;
        return result;
    }
};

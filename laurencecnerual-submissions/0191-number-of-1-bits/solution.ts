function hammingWeight(n: number): number {
    let oneCount = 0
    while (n > 0) {
        if (n % 2 === 1) {
            oneCount++
        }
        n = Math.floor(n / 2);
    }

    return oneCount;
};

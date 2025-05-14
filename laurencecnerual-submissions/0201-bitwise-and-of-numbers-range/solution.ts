function rangeBitwiseAnd(left: number, right: number): number {
    if (left === 0) return 0;

    let shifts = 0

    while (left < right) {
        left >>= 1;
        right >>= 1;
        shifts++;
    }

    let corrected = left << shifts;
    return corrected;
};

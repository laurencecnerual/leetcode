function hammingWeight(n: number): number {
    let oneCount = 0
    while (n > 0) {
        oneCount += n % 2;
        n = Math.floor(n / 2);
    }

    return oneCount;
};

function countBits(n: number): number[] {
    let answer = [];

    for (let i = 0; i <= n; i++){
        answer.push(hammingWeight(i));
    }

    return answer;
};

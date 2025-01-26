function isHappy(n: number): boolean {
    let remainingTries = 10;

    while (remainingTries > 0) {
        let str = "" + n;
        let arr = str.split("")

        if ((arr.filter((e) => e === "1")).length === 1 && (arr.filter((e) => e === "0")).length === arr.length - 1) {
            return true;
        }

        let sumOfSquares = 0;

        for (let i = 0; i < arr.length; i++) {
            sumOfSquares += Math.pow(Number(arr[i]), 2);
        }

        n = sumOfSquares;
        remainingTries--;
    }

    return false;
};

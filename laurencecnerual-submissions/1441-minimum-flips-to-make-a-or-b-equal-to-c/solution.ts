function minFlips(a: number, b: number, c: number): number {
    let flips = 0;
    let binaryA = a.toString(2);
    let binaryB = b.toString(2);
    let binaryC = c.toString(2);

    let maxLength = Math.max(binaryA.length, binaryB.length, binaryC.length);
    binaryA = binaryA.padStart(maxLength, "0");
    binaryB = binaryB.padStart(maxLength, "0");
    binaryC = binaryC.padStart(maxLength, "0");

    for (let i = 0; i < binaryC.length; i++) {
        if (binaryC[i] === "1" && binaryB[i] !== "1" && binaryA[i] !== "1") {
            flips++;
        } else if (binaryC[i] === "0" && (binaryB[i] !== "0" || binaryA[i] !== "0")) {
            if (binaryA[i] !== "0") flips++;
            if (binaryB[i] !== "0") flips++;
        }
    }

    return flips;
};

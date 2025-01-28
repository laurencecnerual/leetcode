function reverseBits(n: number): number {
	let nStr = n.toString(2).padStart(32, "0");
    let rStr = nStr.split("").reverse().join("");
    return parseInt(rStr, 2);
};

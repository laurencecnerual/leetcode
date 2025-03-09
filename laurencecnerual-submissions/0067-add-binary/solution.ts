function addBinary(a: string, b: string): string {
    let decA = BigInt("0b"+ a);
    let decB = BigInt("0b"+ b);
    let decC = decA + decB;
    return decC.toString(2);
};

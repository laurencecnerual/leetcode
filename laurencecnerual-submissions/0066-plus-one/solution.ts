function plusOne(digits: number[]): number[] {
    if (digits.length <= 16) {
        let newNum = Number(digits.join("")) + 1
        return Array.from(newNum.toString()).map(Number);
    } else {
        let newNum = BigInt(digits.join("")) + 1n;
        let newStr = newNum.toString();
        let newArr = [];

        for (let i = 0; i < newStr.length; i++) {
            newArr.push(Number(newStr[i]));
        }

        return newArr;
    }

};

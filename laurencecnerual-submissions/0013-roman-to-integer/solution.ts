function romanToInt(s: string): number {
    let sum = 0;

    let dict = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    for (let i = 0; i < s.length; i++) {
        let [first, second, third] = s.slice(i, i + 3);

        if (first === second){
            if (first === third) {
                sum += dict[first] * 3;
                i += 2;
            } else {
            sum += dict[first] * 2;
                i += 1;
            }
        } else if (["IV", "IX", "XL", "XC", "CD", "CM"].includes(first + second)) {
            sum += dict[second] - dict[first];
            i += 1;
        } else {
            sum += dict[first];
        }
    }
    
    return sum;
};

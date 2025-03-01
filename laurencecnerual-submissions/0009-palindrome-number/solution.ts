function isPalindrome(x: number): boolean {
    let str = "" +  x;
    let left: string, right: string;
    let middleIndex = str.length / 2;

    if (str.length % 2 === 1) {
        middleIndex = Math.floor(middleIndex);
        left = str.substring(0, middleIndex + 1);
    } else {
        middleIndex = Math.ceil(middleIndex);
        left = str.substring(0, middleIndex);
    }

    right = str.substring(middleIndex).split("").reverse().join("");

    return left === right;
};

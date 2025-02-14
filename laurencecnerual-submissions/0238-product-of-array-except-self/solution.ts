function productExceptSelf(nums: number[]): number[] {
    let answerArr = [];

    let leftProduct = 1

    for (let i = 0; i < nums.length; i++) {
        answerArr.push(leftProduct);
        leftProduct *= nums[i];
    }

    let rightProduct = 1;

    for (let j = nums.length-1; j >= 0; j--) {
        answerArr[j] *= rightProduct;
        rightProduct *= nums[j];
    }

    return answerArr;
};

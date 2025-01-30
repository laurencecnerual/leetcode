function topKFrequent(nums: number[], k: number): number[] {
    let countDict = {}

    for (let num of nums) {
       countDict[num] = countDict[num] ? countDict[num] + 1 : 1; 
    }

    let countArr = Object.entries(countDict);
    countArr.sort(([,a],[,b]) => Number(b) - Number(a));

    let answer = [];

    for (let [num, count] of countArr) {
        if (k > 0) {
            answer.push(Number(num));
            k--;
        } else {
            break;
        }
    }

    return answer;
};

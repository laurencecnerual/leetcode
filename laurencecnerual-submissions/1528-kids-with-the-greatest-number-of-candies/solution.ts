function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let answer = Array(candies.length).fill(false);
    let maxValue = [...candies].sort((a,b) => b - a)[0];
    
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= maxValue) {
            answer[i] = true;
        }
    }

    return answer;
};

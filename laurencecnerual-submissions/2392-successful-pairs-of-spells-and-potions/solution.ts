function binarySearch(nums: number[], target: number): number {
    let start = 0;
    let end = nums.length;
    let middle: number;

    while (start < end) {
        middle = Math.floor((start + end) / 2);

        if (nums[middle] >= target) {
            end = middle;
        } else {
            start = middle + 1;
        }
    }

    return start;
};

function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    let theChosenOnes = []
    let minimumSuccessfulPotionPerSpell = {};

    potions.sort((a,b) => a - b);

    for (let spell of spells) {
        if (isNaN(minimumSuccessfulPotionPerSpell[spell])) {
            minimumSuccessfulPotionPerSpell[spell] = Math.ceil(success / spell);
        }

        let firstPassingPotionIndex = binarySearch(potions, minimumSuccessfulPotionPerSpell[spell]);
        let potionsLength = potions.length;

        if (firstPassingPotionIndex !== -1) {
            theChosenOnes.push(potionsLength - firstPassingPotionIndex);
        }
    }

    return theChosenOnes;
};

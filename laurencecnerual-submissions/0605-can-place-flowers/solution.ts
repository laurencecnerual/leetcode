function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let canPlaceCount = 0
    
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0 && (i === 0 || flowerbed[i - 1] === 0) && (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
            canPlaceCount++;

            if (canPlaceCount >= n) {
                return true;
            }

            i++;
        }
    }

    return canPlaceCount >= n;
};

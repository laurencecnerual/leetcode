function asteroidCollision(asteroids: number[]): number[] {
    let battleFound = false;

    for (let i = 0; i < asteroids.length - 1; i++) {
        if (asteroids[i] > 0 && asteroids[i+1] < 0) {
            battleFound = true;

            if (asteroids[i] === Math.abs(asteroids[i+1])) {
                asteroids[i] = 0;
                asteroids[i+1] = 0;
            } else if  (asteroids[i] > Math.abs(asteroids[i+1])) {
                asteroids[i+1] = 0;
            } else {
                asteroids[i] = 0;
            }
        }
    }

    return battleFound ? asteroidCollision(asteroids.filter(a => a !== 0)) : asteroids;
};

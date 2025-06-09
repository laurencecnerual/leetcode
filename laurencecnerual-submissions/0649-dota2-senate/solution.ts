function predictPartyVictory(senate: string): string {
    const radiant: number[] = [];
    const dire: number[] = [];
    const senateLen = senate.length;

    for (let i = 0; i < senateLen; i++) {
        if (senate[i] === 'R') {
            radiant.push(i);
        }
        else {
            dire.push(i);
        } 
    }

    while (radiant.length && dire.length) {
        const rIndex = radiant.shift();
        const dIndex = dire.shift();

        if (rIndex < dIndex) {
            radiant.push(rIndex + senateLen);
        } else {
            dire.push(dIndex + senateLen);
        }
    }

    return radiant.length > 0 ? "Radiant" : "Dire";
};

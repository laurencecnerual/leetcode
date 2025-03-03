function compress(chars: string[]): number {
    let s = "";

    let letter = "";
    let count = 0;

    for (let i = 0; i < chars.length; i++) {
        if (letter !== chars[i]) {
            s += letter;
            
            if (count > 1) {
                s += count;
            }

            letter = chars[i];
            count = 1;
        } else {
            count++;
        }

        if (i === chars.length - 1) {
            s += letter;
            
            if (count > 1) {
                s += count;
            }
        }
    }

    for (let i = 0; i < s.length; i++) {
        chars[i] = s[i];
    }

    while (chars.length !== s.length) {
        chars.pop();
    }

    return chars.length;
};

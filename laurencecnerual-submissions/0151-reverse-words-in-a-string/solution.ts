function reverseWords(s: string): string {
    s = s.trim();
    let reversedS = s.split(" ").filter(word => word !== "").reverse().join(" ");
    return reversedS;
};

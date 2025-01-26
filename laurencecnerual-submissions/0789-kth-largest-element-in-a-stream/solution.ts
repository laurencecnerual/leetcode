class KthLargest {
    k: number;
    nums: number[];
    kthLargest: number;

    constructor(k: number, nums: number[]) {
        this.k = k;
        this.nums = nums.sort((a: number, b: number) => b - a);;
    }

    add(val: number): number {
        if (val >= this.kthLargest) {
            let index = 0;
            for (let i = 0; i < this.nums.length; i++) {
                if (val > this.nums[i]) {
                    this.nums.splice(index, 0, val);
                    console.log(this.nums)
                    break;
                } else {
                    index++;
                }
            }
        } else {
            this.nums.push(val);
            this.nums.sort((a: number, b: number) => b - a);
        }
        
        this.kthLargest = this.nums[this.k - 1];
        return this.kthLargest;
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

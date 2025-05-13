class LRUCache {
    capacity: number;
    dict: Record<number, number>;
    arr: number[];

    constructor(capacity: number) {
        this.capacity = capacity;
        this.dict = {};
        this.arr = [];
    }

    moveToEndofArray(key: number): void {
        let currentIndex = this.arr.indexOf(key);
        this.arr.splice(currentIndex, 1);
        this.arr.push(key);
    }

    get(key: number): number {
        if (key in this.dict) {
            this.moveToEndofArray(key)
            return this.dict[key]
        }

        return -1;
    }

    put(key: number, value: number): void {
        if (!(key in this.dict)) {
            if (this.arr.length >= this.capacity) {
                let oldKey = this.arr.shift();
                delete this.dict[oldKey];
            }

            this.arr.push(key);
        } else {
            this.moveToEndofArray(key)
        }

        this.dict[key] = value;
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

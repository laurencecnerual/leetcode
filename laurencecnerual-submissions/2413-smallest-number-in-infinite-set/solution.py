class SmallestInfiniteSet:

    def __init__(self):
        self.my_set = list(range(1, 1001))

    def popSmallest(self) -> int:
        smallest = -1

        for num in self.my_set:
            if num != -1:
                smallest = num
                self.my_set[num - 1] = -1
                break

        return smallest

    def addBack(self, num: int) -> None:
        if self.my_set[num - 1] == -1:
            self.my_set[num - 1] = num



# Your SmallestInfiniteSet object will be instantiated and called as such:
# obj = SmallestInfiniteSet()
# param_1 = obj.popSmallest()
# obj.addBack(num)

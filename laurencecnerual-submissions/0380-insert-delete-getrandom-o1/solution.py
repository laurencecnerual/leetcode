import random

class RandomizedSet:

    def __init__(self):
        self.my_set = {}

    def insert(self, val: int) -> bool:
        if not val in self.my_set:
            self.my_set[val] = True
            return True
        
        return False

    def remove(self, val: int) -> bool:
        if val in self.my_set:
            del self.my_set[val]
            return True
    
        return False

    def getRandom(self) -> int:
        my_keys = list(self.my_set.keys())
        return random.choice(my_keys)


# Your RandomizedSet object will be instantiated and called as such:
# obj = RandomizedSet()
# param_1 = obj.insert(val)
# param_2 = obj.remove(val)
# param_3 = obj.getRandom()

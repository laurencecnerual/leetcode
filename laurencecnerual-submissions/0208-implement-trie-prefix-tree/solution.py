class Trie:

    def __init__(self):
        self.children = {}

    def insert(self, word: str) -> None:
        if not word:
            self.children["*"] = None
        else:
            if word[0] not in self.children:
                self.children[word[0]] = Trie()

            self.children[word[0]].insert(word[1:])
            
    def search(self, word: str) -> bool:
        return self.startsWith(word + "*")

    def startsWith(self, prefix: str) -> bool:
        if not prefix:
            return True

        if prefix[0] not in self.children:
            return False

        if prefix[0] == "*":
            return True

        return self.children[prefix[0]].startsWith(prefix[1:])



# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)

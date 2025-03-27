class Solution:
    def simplifyPath(self, path: str) -> str:
        fragments = path.split("/")
        validated_fragments = []
        print(fragments)

        current = 1

        while current < len(fragments):
            if not fragments[current] in ["", "/", ".", ".."]:
                validated_fragments.append(fragments[current])
            elif fragments[current] == ".." and len(validated_fragments) > 0:
                validated_fragments.pop()

            current += 1
        
        return "/" + "/".join(validated_fragments)

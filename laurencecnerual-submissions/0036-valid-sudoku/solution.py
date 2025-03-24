class Solution:
    def isUnique(self, boardSlice: List[str]) -> bool:
        cleanedBoardSlice = [s for s in boardSlice if s != "."]
        numberCount = len(cleanedBoardSlice)
        uniqueNumbers = list(set(cleanedBoardSlice))

        return numberCount == len(uniqueNumbers)

    def isValidSudoku(self, board: List[List[str]]) -> bool:
        for row in board:
            if (not self.isUnique(row)):
                return False

        columns = [[board[i][j] for i in range(9)] for j in range(9)]
        for column in columns:
            if (not self.isUnique(column)):
                return False

        for r in range(0, 9, 3):
            for c in range(0, 9, 3):
                square = [board[r+i][c:c+3] for i in range(3)]
                flatSquare = [element for row in square for element in row]

                if (not self.isUnique(flatSquare)):
                    return False

        return True

import numpy as np
class Solution:
    def equalPairs(self, grid: List[List[int]]) -> int:
        gridnp = np.array(grid)
        trans = np.transpose(gridnp)
        row_data = []
        col_data = []
        for row in gridnp:
            row_data.append(",".join(map(str, row)))
        for col in trans:
            col_data.append(",".join(map(str, col)))
        count = 0
        for i in row_data:
            for j in col_data:
                if i == j:
                    count+=1
        return count

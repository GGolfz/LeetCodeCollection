class Solution:
    def imageSmoother(self, img: List[List[int]]) -> List[List[int]]:
        if not img: return img
        new = [[0 for _ in range(len(img[0]))] for _ in range(len(img))]
        directions = ((0, 0), (0, 1), (0, -1), (1, 0), (-1, 0), (1, 1), (-1, -1), (-1, 1), (1, -1))
        for i in range(len(new)):
            for j in range(len(new[0])):
                total = 0
                count = 0
                for r, c in directions:
                    if i + r < 0 or j + c < 0 or i + r >= len(img) or j + c >= len(img[0]):
                        continue
                    total += img[i + r][j + c]
                    count += 1
                new[i][j] = math.floor(total/count)
        return new

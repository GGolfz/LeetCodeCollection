class Solution:
    def distributeCandies(self, candyType: List[int]) -> int:
        sc = set(candyType)
        max = len(candyType)/2
        if len(sc) < max:
            return len(sc)
        else:
            return int(max)

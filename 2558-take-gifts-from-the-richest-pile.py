import math
import bisect
class Solution:
    def pickGifts(self, gifts: List[int], k: int) -> int:
        for i in range(k):
            gifts = sorted(gifts)
            maxV = gifts.pop(-1)
            newV = math.floor(math.sqrt(maxV))
            bisect.insort(gifts,newV)
        return sum(gifts)

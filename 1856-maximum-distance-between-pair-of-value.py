class Solution:
    def maxDistance(self, nums1: List[int], nums2: List[int]) -> int:
        maxv = 0
        curj = 0
        for i in range(len(nums1)):
            min1 = max(i,curj)
            for j in range(min1,len(nums2)):
                if i <= j:
                    if nums1[i] <= nums2[j]:
                        if j-i >= maxv:
                            maxv = j-i
                        curj+=1
                    else:
                        break
        return maxv
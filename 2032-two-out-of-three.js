var twoOutOfThree = function(nums1, nums2, nums3) {
    let s1 = new Set(nums1)
    let s2 = new Set(nums2)
    let s3 = new Set(nums3)
    let all = new Set([...nums1, ...nums2, ...nums3])
    let ans = []
    for(let i of all) {
        let has1 = s1.has(i)
        let has2 = s2.has(i)
        let has3 = s3.has(i)
        let bool = has1 + has2 + has3
        if(bool >= 2) ans.push(i)
    }
    return ans
};

var intersection = function(nums1, nums2) {
    let res = new Set();
    for(let i of nums1) {
        if(nums2.indexOf(i) != -1) {
            res.add(i)
        }
    }
    return Array.from(res);
};

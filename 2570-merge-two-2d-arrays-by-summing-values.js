var mergeArrays = function(nums1, nums2) {
    let idsMap = {};
    ([...nums1, ...nums2]).forEach(([key, value]) => idsMap[key] = (idsMap[key] ?? 0) + value)
    return Object.keys(idsMap).map(k => [k,idsMap[k]])
};

var merge = function(nums1, m, nums2, n) {
    let ind = 0
    nums1.splice(m,nums1.length - m)
    for(let i = 0 ; i<nums2.length;i++){
        while(nums1[ind+1] < nums2[i]) {
            ind+=1
        }
        if(nums2[i] < nums1[ind]) {
            nums1.splice(ind,0,nums2[i])
        } else {
        nums1.splice(ind+1,0,nums2[i])
        }
        ind+=1
    }
};

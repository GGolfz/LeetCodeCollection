var intersect = function(nums1, nums2) {
    let map = {};
    for(let i of nums1){
        if(map[i]) {
            map[i][0] += 1
        } else {
            map[i] = [1,0]
        }
    }
    for(let i of nums2){
        if(map[i]) {
            map[i][1] += 1
        } else {
            map[i] = [0,1]
        }
    }
    let ans = []
    for(let i in map){
        if(map[i][0] > 0 && map[i][1] > 0){
            for(let j = 0 ; j< Math.min(map[i][0],map[i][1]) ; j++){
                ans.push(i)
            }
        }
    }
    return ans;
};

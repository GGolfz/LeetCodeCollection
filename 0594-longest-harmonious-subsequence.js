var findLHS = function(nums) {
    let sorted = nums.sort((a,b) => a-b);
    let count = {}
    for(let i of sorted){
        if(i in count) {
            count[i] += 1
        } else {
            count[i] = 1
        }
    }
    let cur = -Infinity
    let arr = []
    for(let i in count) {
        if(cur == -Infinity) {
            cur = i;
            arr.push([count[i]])
        } else {
            if(Math.abs(parseInt(i) - cur) == 1) {
                arr[arr.length - 1].push(count[i])
            }
            arr.push([count[i]])
            cur = i
        }
    }
    let ans = []
    for(let i of arr) {
        if(i.length == 2) {
            ans.push(i[0] + i[1])
        }
    }
    return ans.length == 0 ? 0 : Math.max(...ans)
};

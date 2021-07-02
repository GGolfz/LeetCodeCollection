var findClosestElements = function(arr, k, x) {
    let ans = []
    while(ans.length < k) {
        var closest = arr.reduce(function(prev, curr) {
          return (Math.abs(curr - x) < Math.abs(prev - x) ? curr : prev);
        })
        ans.push(closest)
        arr.splice(arr.indexOf(closest),1)
    }
    return ans.sort((a,b) => a-b)
};

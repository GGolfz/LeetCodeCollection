var relativeSortArray = function(arr1, arr2) {
    let ans = []
    for(let i of arr2){
        while(arr1.indexOf(i) != -1){
            ans.push(arr1[arr1.indexOf(i)]);
            arr1.splice(arr1.indexOf(i),1)
        }
    }
    arr1.sort((a,b)=>a-b)
    for(let i of arr1){
        ans.push(i)
    }
    return ans;
};

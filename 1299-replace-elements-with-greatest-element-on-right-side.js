var replaceElements = function(arr) {
    for(let i = 0 ; i < arr.length ; i++){
        arr[i] = Math.max(...arr.slice(i+1),-1)
    }
    return arr;
};

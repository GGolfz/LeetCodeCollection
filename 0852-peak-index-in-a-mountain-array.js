var peakIndexInMountainArray = function(arr) {
    return arr.findIndex(s=> s == Math.max(...arr))
};

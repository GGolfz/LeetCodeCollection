var validMountainArray = function(arr) {
    if(arr.length < 3){
        return false;
    }
    let index = 0;
    while(index < arr.length - 1 && arr[index] < arr[index + 1]){
        index+=1;
    }
    if(index == 0 || index == arr.length-1){
        return false
    }
    while(index < arr.length - 1 && arr[index] > arr[index + 1]) {
        index+=1;
    }
    return index == arr.length - 1
};

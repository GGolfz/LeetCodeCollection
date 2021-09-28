var trap = function(height) {
    let start = 0;
    let space = 0;
    let left = 0;
    for(let i = 0 ; i<height.length;i++){
        if(height[i] >= height[left]){
            left = i;
        } else {
            space += height[left] - height[i];
        }
    }
    let right = height.length - 1;
    for(let i = right;i>left;i--){
        if(height[i] > height[right]){
            right = i;
        }
        space -= height[left] - height[i];
        space += height[right] - height[i];
    }
    return space;
};

var flipAndInvertImage = function(image) {
    let arr = []
    for(let i = 0 ; i < image.length;i++){
        let tmp = []
        for(let j = 0 ; j<image[i].length;j++){
            tmp = [image[i][j] == 0 ? 1 : 0,...tmp]
        }
        arr.push(tmp)
    }    
    return arr;
};


var canPlaceFlowers = function(flowerbed, n) {
    if(n == 0) return true
    for(let i = 0 ; i < flowerbed.length ; i++) {
        if(flowerbed[i] == 0) {
            if(i > 0 && flowerbed[i - 1] != 0){
                continue
            } 
            if(i < flowerbed.length - 1 && flowerbed[i + 1] != 0) {
                continue
            }
            flowerbed[i] = 1
            n -= 1
            if(n == 0) break
        }
    }
    return n == 0
};

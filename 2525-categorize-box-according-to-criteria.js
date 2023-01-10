var categorizeBox = function(length, width, height, mass) {
    let isBulky = length >= 1e4 || width >= 1e4 || height >= 1e4 || length*width*height >= 1e9
    let isHeavy = mass >= 100
    if(isHeavy && isBulky) return "Both"
    if(isHeavy) return "Heavy"
    if(isBulky) return "Bulky"
    return "Neither"
};

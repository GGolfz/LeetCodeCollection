var hammingDistance = function(x, y) {
    let xStr = "";
    let yStr = "";
    while(x>0) {
        xStr = ("" + x%2) + xStr;
        x = parseInt(x/2);
    }
    while(y>0) {
        yStr = ("" + y%2) + yStr;
        y = parseInt(y/2);
    }
    if(xStr.length < yStr.length) {
        for(let i = xStr.length; i < yStr.length;i++) xStr = "0"+xStr;
    } else if(xStr.length > yStr.length) {
        for(let i = yStr.length; i < xStr.length;i++) yStr = "0"+yStr;
    }
    let count = 0;
    for(let i = 0 ;i<xStr.length;i++) {
        count +=xStr.charAt(i) != yStr.charAt(i)
    }
    return count;
};

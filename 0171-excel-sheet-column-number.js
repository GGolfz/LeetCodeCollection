var titleToNumber = function(columnTitle) {
    let number = 0;
    for(let i = 0 ; i < columnTitle.length;i++) {
        number += (columnTitle.charCodeAt(columnTitle.length-1-i) - 64) * Math.pow(26,i)
    }
    return number
};

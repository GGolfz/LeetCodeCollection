var licenseKeyFormatting = function(s, k) {
    let str = s.split('-').join("")
    let result = [];
    if(str.length % k != 0) {
        result.push(str.substring(0,str.length % k))
        str = str.substring(str.length % k)
    } 
    for(let i = 0 ; i < str.length ;i+= k) {
        result.push(str.substring(i,i+k));
    }
    return result.join("-").toUpperCase()
};

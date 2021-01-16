var toLowerCase = function(str) {
    let temp = ''
    for(let i of str){
        if(i.charCodeAt(0) >= 65 && i.charCodeAt(0) <= 90){
            temp += String.fromCharCode(i.charCodeAt(0) +32)
        } else {
            temp += i
        }
    }
    return temp
};

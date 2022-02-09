var thousandSeparator = function(n) {
    return n.toString().split('').reverse().reduce((prev,cur) => cur + (prev.length == 3 || prev.indexOf(".") == 3 ? '.' : '') + prev,'');
};

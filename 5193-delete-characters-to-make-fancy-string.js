var makeFancyString = function(s) {
    result = s.replace(/(.)\1+/g, '$1$1')
    return result
};

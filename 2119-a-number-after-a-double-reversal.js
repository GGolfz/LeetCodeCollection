var isSameAfterReversals = function(num) {
    return parseInt((""+parseInt((""+num).split("").reverse().join("")) ).split("").reverse().join("")) == num
};

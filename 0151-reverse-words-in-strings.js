var reverseWords = function(s) {
    return s.split(" ").reduce((prev, curr) => curr.length > 0 ? [curr, ...prev] : prev, []).join(" ")
};

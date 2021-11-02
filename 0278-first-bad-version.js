var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    
    return function(n) {
        let start = 1, end = n;
        while(start < end) {
            let x = parseInt(start + (end - start)/2);
            if(isBadVersion(x)) {
                end = x;
            } else {
                start = x+1
            }
        }
        return start
    };
};

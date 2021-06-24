var convert = function(s, numRows) {
    if(numRows == 1){
        return s
    } else {
        let result = ''
        for (let row = 0; row < numRows; row++){
            let i = row;
            while (i < s.length){
                result += s[i];
                i += (numRows - i % (numRows - 1) - 1) * 2;
            }
        }
        return result
    }
};

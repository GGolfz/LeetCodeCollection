var convertToTitle = function(columnNumber) {
    let colName = ''
    while(columnNumber > 0) {
        if(columnNumber % 26 == 0) {
            colName = String.fromCharCode(90) + colName
            columnNumber = parseInt(Math.floor((columnNumber-1) / 26))
        } else {
            colName = String.fromCharCode((columnNumber % 26) + 64) + colName
            columnNumber = parseInt(Math.floor(columnNumber / 26))
        }
    }
    return colName
};

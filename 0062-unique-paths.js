var uniquePaths = function(m, n) {
    let num = Array(m).fill(0).map(row => Array(n).fill(1));
    for (let row = 1; row < m; row++) {
        for (let col = 1; col < n; col++) {
            num[row][col] = num[row - 1][col] + num[row][col - 1];
        }
    }
        
    return num[m - 1][n - 1];
};

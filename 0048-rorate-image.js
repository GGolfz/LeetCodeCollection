var rotate = function(matrix) {
    n = matrix.length
    for(i = 0 ; i < (Math.floor(n/2) + n % 2); i++) {
        for (j = 0 ; j < (Math.floor(n/2)); j++) {
            tmp = matrix[n - 1 - j][i]
            matrix[n - 1 - j][i] = matrix[n - 1 - i][n - j - 1]
            matrix[n - 1 - i][n - j - 1] = matrix[j][n - 1 -i]
            matrix[j][n - 1 - i] = matrix[i][j]
            matrix[i][j] = tmp
        }
    }
};

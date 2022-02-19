class Solution {
    public int oddCells(int m, int n, int[][] indices) {
        int[][] board = new int[m][n];
        for(int i = 0 ; i<indices.length;i++){
            for(int j = 0; j < m ; j++) {
                board[j][indices[i][1]] ++ ;
            }
            for(int j = 0; j < n ; j++) {
                board[indices[i][0]][j] ++ ;
            }
        }
        int count = 0;
        for(int i = 0 ; i < m ;i++){
            for(int j = 0 ; j<n ;j++){
                if(board[i][j] % 2 != 0) {
                    count ++;
                }
            }
        }
        return count;
    }
}

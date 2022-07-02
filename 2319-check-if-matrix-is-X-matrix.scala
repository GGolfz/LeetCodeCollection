object Solution {
    def checkXMatrix(grid: Array[Array[Int]]): Boolean = {
        var check = true
        var i = 0
        var j = 0
        for( i <- 1 to grid.size) {
            for( j <- 1 to grid.size) {
                if (i==j || i+j==grid.size+1) {
                    if(grid(i - 1)(j - 1) == 0) {
                        check = false
                    }
                } else {
                    if(grid(i - 1)(j - 1) != 0) {
                        check = false
                    }
                }
            }
        }
        check
    }
}

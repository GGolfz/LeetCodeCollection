var sumEvenGrandparent = function(root) {
    if(root == null) {
        return 0;
    }
    if(root.val % 2 == 0){
        let sum = 0;
        if(root.left != null){
            if(root.left.left != null){
                sum += root.left.left.val
            }
            if(root.left.right != null){
                sum += root.left.right.val
            }
        }
        if(root.right != null){
            if(root.right.left != null){
                sum += root.right.left.val
            }
            if(root.right.right != null){
                sum += root.right.right.val
            }
        }
        return sum + sumEvenGrandparent(root.left) + sumEvenGrandparent(root.right)
    } 
    return sumEvenGrandparent(root.left) + sumEvenGrandparent(root.right)
};

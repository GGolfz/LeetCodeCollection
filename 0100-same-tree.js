var isSameTree = function(p, q) {
    if(p!=null && q!=null){
        if(p.val == q.val) {
            console.log(p.val)
            return isSameTree(p.left,q.left) && isSameTree(p.right, q.right);
        }
        return false;
    } else if (p == null && q == null) {
        return true;
    }
    return false;
};

var isSymmetric = function(root) {
    return compare(root.left, root.right)
};

var compare = (left, right) => {
    if(left == undefined && right == undefined) return true;
    if(left == undefined || right == undefined) return false;
    if(left.val != right.val) return false;
    return true && compare(left.left, right.right) && compare(left.right, right.left)
}

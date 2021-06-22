var pruneTree = function(root) {
    if(!hasOne(root)){
        root = null
    } else {
        if(!hasOne(root.left)) {
            root.left = null
        } else {
            pruneTree(root.left)   
        }
        if(!hasOne(root.right)) {
            root.right = null
        } else {
            pruneTree(root.right)
        }
    }
    return root;
};

var hasOne = (root) => {
    if(root == null) return false
    if(root.val == 1) return true;
    return hasOne(root.left) || hasOne(root.right);
}

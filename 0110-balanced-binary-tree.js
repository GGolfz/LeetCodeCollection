var isBalanced = function(root) {
    if(root == null) return true
    return compareHeight(root.left, root.right)
};

const compareHeight = (left, right) => {
    if(Math.abs(getTreeHeight(left) - getTreeHeight(right)) > 1) return false;
    return (left == null || (left != null && compareHeight(left.left, left.right))) && 
        (right == null || (right != null && compareHeight(right.left, right.right)))
}

const getTreeHeight = (root) => {
    if(root == undefined) return 0;
    return 1 + Math.max(getTreeHeight(root.left), getTreeHeight(root.right)) 
}

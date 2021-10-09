var minDepth = function(root) {
    return findMinDepth(root,0)
};
const findMinDepth = (root,depth) => {
    if(root == null) return depth;
    if(root.left == null) {
        return findMinDepth(root.right,depth+1)
    }
    if(root.right == null) {
        return findMinDepth(root.left,depth+1)
    }
    return Math.min(findMinDepth(root.left,depth+1),findMinDepth(root.right,depth+1))
}

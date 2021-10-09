var maxDepth = function(root) {
    return findMaxDepth(root,0)
};
const findMaxDepth = (root,depth) => {
    if(root == null) return depth;
    if(root.left == null) {
        return findMaxDepth(root.right,depth+1)
    }
    if(root.right == null) {
        return findMaxDepth(root.left,depth+1)
    }
    return Math.max(findMaxDepth(root.left,depth+1),findMaxDepth(root.right,depth+1))
}

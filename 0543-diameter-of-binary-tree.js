let max = 0 
var diameterOfBinaryTree = function(root) {
    var maxDepth = (root) => {
        if(root == null) return 0;
        let left = maxDepth(root.left);
        let right = maxDepth(root.right)
        max = Math.max(max,left+right)
        return 1 + Math.max(left,right)
    };
    maxDepth(root);
    return max;
}

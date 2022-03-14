var hasPathSum = function(root, targetSum) {
    if(root == undefined) {
        return false
    }
    if(targetSum == root.val && root.left == undefined && root.right == undefined){
        return true;
    }
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right,targetSum - root.val)
};

var deepestLeavesSum = (root) => {
    let tar = getHeightDepth(root);
    return getDeepestSum(root,1,tar);
};
var getDeepestSum = (root,lvl,tar) => {
    if(root == null) {
        return 0
    }
    if(lvl == tar && root.left == null && root.right == null) {
        return root.val
    }
    return getDeepestSum(root.left,lvl+1,tar) + getDeepestSum(root.right,lvl+1,tar)
}
var getHeightDepth = (root) => {
    if(root == null) {
        return 0
    }
    return 1+Math.max(getHeightDepth(root.left),getHeightDepth(root.right))
}

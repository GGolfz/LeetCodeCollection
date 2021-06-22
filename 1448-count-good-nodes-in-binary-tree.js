var goodNodes = function(root) {
    return countGoodNode(root,root.val)
};

var countGoodNode = (root,max) => {
    if(root == null) return 0;
    if(root.val > max) {
        max = root.val
    }
    return (checkGood(root,max) ? 1 : 0) + countGoodNode(root.left,max) + countGoodNode(root.right,max);
}
var checkGood = (root,max) => {
    if(root == null) return false
    if(root.val >= max) {
        return true;
    }
    return false
}

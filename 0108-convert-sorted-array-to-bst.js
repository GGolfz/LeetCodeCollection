var sortedArrayToBST = function(nums) {
    return getTreeNode(0, nums.length - 1, nums)
};

const getTreeNode = (start, end, nums) => {
    if(start > end) return null
    let middle = start + Math.floor((end - start) / 2)
    return new TreeNode(nums[middle], getTreeNode(start, middle - 1, nums), getTreeNode(middle + 1, end, nums))
}

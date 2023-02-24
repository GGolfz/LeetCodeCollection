/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.arr = nums;
    let s = [0]
    for(let i of nums) {
        s.push(s[s.length - 1] + i)
    }
    this.sum = s
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.sum[right + 1] - this.sum[left]
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

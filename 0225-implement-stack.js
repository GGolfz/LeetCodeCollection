var MyStack = function() {
    this.arr = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.arr.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let last = this.top()
    this.arr = this.arr.slice(0, this.arr.length - 1)
    return last
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let last = this.arr[this.arr.length - 1]
    return last
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.arr.length == 0 
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

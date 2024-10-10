var createCounter = function(n) {
    this.counter = n;
    return function() {
        return this.counter++;
    };
};

var finalValueAfterOperations = function(operations) {
    return operations.map(o=> o.includes("+") ? 1 : -1).reduce((p,c)=>p+c,0)
};

var getDecimalValue = function(head) {
    return getValue(head,Math.pow(2,getSize(head)-1))
};

var getSize = (head) => {
    if(head == null) return 0;
    return 1+getSize(head.next);
}
var getValue = (head,cur) => {
    if(head == null) return 0;
    return getValue(head.next,cur/2) + cur*head.val
}

var maxDiff = function (num) {
  let s = num.toString();
  if (s.length > 1) {
    let first = s;
    let second = s;
    for (let i = 0; i < s.length; i++) {
      if (s.charAt(i) != "9") {
        first = s.split(s.charAt(i)).join("9");
        break;
      }
    }
    for (let i = 0; i < s.length; i++) {
      if (!(i == 0 && s.charAt(i) == 1) || (i > 0 && s.charAt(i) != 0)) {
        if (s.substring(0, 1) == s.charAt(i)) {
          if (s.substring(0, 1) == "1" && i != s.length - 1) {
          } else {
            second = s.split(s.charAt(i)).join("1");
            break;
          }
        } else {
          if (s.charAt(i) == "0") {
          } else {
            second = s.split(s.charAt(i)).join("0");
            break;
          }
        }
      }
    }
    return parseInt(first) - parseInt(second);
  } else {
    return 8;
  }
};
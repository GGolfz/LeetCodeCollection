const validPalindrome = (s) => {
    for (let i = 0, stop = s.length / 2; i < stop; i++) {
        let j = s.length - i - 1
        if (s[i] !== s[j]) {
            return isPalindrome(removeAt(s, i)) || isPalindrome(removeAt(s, j))
        }
    }
    return true
};

const removeAt = (s, i) => s.substr(0, i) + s.substr(i + 1);

const isPalindrome = (s) => s === s.split('').reverse().join('');

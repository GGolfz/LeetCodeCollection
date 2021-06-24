class Solution:
    def checkPalindrome(self, s: str) -> bool:
        return s == s[::-1]
    def longestPalindrome(self, s: str) -> str:
        m =''
        for i in range(len(s)):
            for j in range(i+len(m),len(s)):
                ts = s[i:j+1]
                if self.checkPalindrome(ts):
                    if len(ts) > len(m):
                        m = ts
        return m

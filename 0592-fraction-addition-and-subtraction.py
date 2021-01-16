from fractions import Fraction
class Solution:
    def fractionAddition(self, expression: str) -> str:
        s = expression.replace('+', ' +').replace('-', ' -').split()
        ans = 0
        for i in s:
            ans += Fraction(i)
        return f'{ans.numerator}/{ans.denominator}'

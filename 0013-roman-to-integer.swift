class Solution {
    func romanToInt(_ str: String) -> Int {
        let dict:[Character:Int] = ["M":1000, "D":500, "C":100, "L":50, "X":10, "V":5,"I":1]
        var ans = 0
        var s = 0
        for el in str{
            if s < dict[el]!{
                ans -= 2*s
            }
            s = dict[el]!
            ans += s
        }
        return ans
    }
}

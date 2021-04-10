class Solution {
    func intToRoman(_ num: Int) -> String {
        var tr = ["","M","MM","MMM"];
        var hd = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
        var te = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
        var on = ["","I","II","III","IV","V","VI","VII","VIII","IX"];
        return tr[num/1000] + hd[(num%1000)/100] + te[(num%100)/10] + on[num%10];
    }
}

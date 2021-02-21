def reverse(x)
    v = x.to_s.reverse.to_i
    return x < 0 ? (-v<= -2**31 ? 0 : -v) : (v>= 2**31 -1 ? 0 :v)
end

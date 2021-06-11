def sum_base(n, k)
    sum = 0
    n.to_s(k).split('').each{ |s| sum += s.to_i }
    return sum
end

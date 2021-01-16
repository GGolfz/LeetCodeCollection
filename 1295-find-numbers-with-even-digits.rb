def find_numbers(nums)
    nums.count{|n|n.to_s.size%2 ==0}
end

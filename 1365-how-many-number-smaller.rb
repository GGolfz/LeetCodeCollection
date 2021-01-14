def smaller_numbers_than_current(nums)
    ans = []
    nums.map{|n| ans.push(nums.count{|x| x<n})}
    return ans
end

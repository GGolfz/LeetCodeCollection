def missing_number(nums)
    n = nums.size
    return n*(n+1)/2 - nums.sum
end

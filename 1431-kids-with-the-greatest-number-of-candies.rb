def kids_with_candies(candies, extra_candies)
    return candies.map{|candy| candy+extra_candies >= candies.max}
end

def count_bits(num)
   return Array.new(num+1).each_with_index.map{|i,index| i = (index).to_s(2).count("1")} 
end

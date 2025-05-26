# @param {Integer[]} nums
# @return {Integer}
def first_missing_positive(nums)
    hash = {}

    nums.each do |num|
        if num > 0 && !hash.key?(num)
            hash[num] = true
        end
    end

    return 1 if hash == {}

    expected_num = 1
    unique_positive_nums_in_order = hash.keys.sort

    unique_positive_nums_in_order.each do |num, index|
        if num != expected_num
            return expected_num
        end
        
        expected_num += 1
    end

    return unique_positive_nums_in_order.last + 1
end

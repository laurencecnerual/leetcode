# @param {Integer[]} nums
# @return {Integer}
def max_sub_array(nums)
    max_sum = -Float::INFINITY
    current_sum = 0

    nums.each_with_index do |num, index|
        current_sum += num
        max_sum = current_sum if current_sum > max_sum
        current_sum = 0 if current_sum < 0
    end

    max_sum
end

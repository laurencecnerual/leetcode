# @param {Integer[]} nums
# @return {Void} Do not return anything, modify nums in-place instead.
def sort_colors(nums)
    numCount = {}

    nums.each do |num|
        if numCount.key?(num)
            numCount[num] += 1
        else
            numCount[num] = 1
        end
    end

    nums.each_with_index do |num, index|
        [0, 1, 2].each do |key|
            if numCount[key] && numCount[key] > 0
                nums[index] = key
                numCount[key] -= 1
                break
            end
        end
    end
end

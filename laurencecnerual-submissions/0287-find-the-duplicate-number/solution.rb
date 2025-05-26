# @param {Integer[]} nums
# @return {Integer}
def find_duplicate(nums)
    numCount = {}

    nums.each do |num|
        if numCount.key?(num)
            return num
        else
            numCount[num] = true
        end
    end
end

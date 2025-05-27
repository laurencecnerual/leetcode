# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @return {Float}
def get_median(arr, position, need_avg)
    if need_avg
        return (arr[position] + arr[position - 1]) / 2.0
    else
        return arr[position]
    end
end

def find_median_sorted_arrays(nums1, nums2)
    num_count = nums1.length + nums2.length
    median_position = num_count / 2
    need_to_avg = num_count % 2 != 1

    return get_median(nums2, median_position, need_to_avg) if nums1.empty?
    return get_median(nums1, median_position, need_to_avg) if nums2.empty?

    nums1_index = 0
    nums2_index = 0
    nums3 = []

    while nums1_index < nums1.length || nums2_index < nums2.length
        min_num = [nums1[nums1_index], nums2[nums2_index]].compact.min;
        nums3 << min_num
        
        if min_num == nums1[nums1_index]
            nums1_index += 1
        else
            nums2_index += 1
        end
    end

    return get_median(nums3, median_position, need_to_avg)
end

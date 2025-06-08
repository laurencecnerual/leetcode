/** 
 * Forward declaration of isBadVersion API.
 * @param   version   your guess about first bad version
 * @return 	 	      true if current version is bad 
 *			          false if current version is good
 * func isBadVersion(version int) bool;
 */

func firstBadVersion(n int) int {
    high := n
    low := 1
    mid := (low + high) / 2
    lowest_found := n + 1

    for high >= low {
        if isBadVersion(mid) {
            high = mid - 1
            lowest_found = mid
        } else {
            low = mid + 1
        }

        mid = (low + high) / 2
    }

    return lowest_found
}

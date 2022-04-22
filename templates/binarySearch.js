function binarySearch(nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    // 找到了目标值
    if (target === nums[mid]) return mid;
    // 目标值在解空间的左侧 [left, mid -1]
    if (target < nums[mid]) {
      right = mid - 1;
    }
    // 目标值在解空间的右侧 [mid + 1, right]
    if (target > nums[mid]) {
      left = mid + 1;
    }
  }

  return -1;
}
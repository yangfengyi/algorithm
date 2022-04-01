/*
  给你一个非空数组，返回此数组中 第三大的数 。如果不存在，则返回数组中最大的数。

  示例 1：
  
  输入：[3, 2, 1]
  输出：1
  解释：第三大的数是 1 。
  示例 2：
  
  输入：[1, 2]
  输出：2
  解释：第三大的数不存在, 所以返回最大的数 2 。
  示例 3：
  
  输入：[2, 2, 3, 1]
  输出：1
  解释：注意，要求返回第三大的数，是指在所有不同数字中排第三大的数。
  此例中存在两个值为 2 的数，它们都排第二。在所有不同数字中排第三大的数为 1 。
  
  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/third-maximum-number
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/*
  方案一: 排序，找到第三大的值，如果没有的话，就把数组中最大的值返回出去
  时间复杂度: O(nlogn + n) 排序的时间复杂度
  空间复杂大: O(logn) 排序要的栈空间

  耗时操作: 排序
*/
function thirdMax1(nums) {
  // 从大到小排序
  const sortNums = nums.sort((a, b) => b - a);  // O(nlogn)

  // 标记顺序
  let index = 0;

  // 找到第三大的值，也就是不重复的第三个
  for (let i = 0; i < sortNums.length; i++) {  // O(n)
    // 只有在当前值和上一个值不一样的时候，才给index标记下一个
    if (sortNums[i] !== sortNums[i - 1]) {
      index ++;
    }

    // 找到第三个
    if (index === 3) {
      return sortNums[i]
    }
  }

  // 没有找到，返回第一个数（倒序数组当中的最大值）
  return sortNums[0]
}

/*
  方案二: 是有一个模拟的有序数组
  时间复杂度：O(n)
  空间复杂度：O(1)
*/
function thridMax2(nums) {
  // a, b, c 模拟一个有序的数组
  let a = -Number.MAX_VALUE,
      b = -Number.MAX_VALUE,
      c = -Number.MAX_VALUE
  
  for (const num of nums) {
    if (num > a) {  // 如果num大于a，依次往后移位
      c = b
      b = a
      a = num
    } else if (num < a && num > b) { // 如果num大于b小于a，依次往后移位
      c = b
      b = num
    } else if (num < b && num > c) { // 如果num大于c小于b，c = num
      c = num
    }
  }

  // 如果c是初始值，证明有序列表里面数不够3，直接返回a （最大值）
  // 否则，则返回第三大的值 c
  return c === -Number.MAX_VALUE ? a : c
}
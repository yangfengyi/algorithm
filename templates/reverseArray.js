/**
 * 反转数组
 */

function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const temp = arr[left]
    arr[left ++] = arr[right]
    arr[right --] = temp
  }

  return arr
}

// test code
const arr = [1, 2, 3, 4]
const result = reverseArray(arr)
console.log(result) // [4, 3, 2, 1]

// 时间复杂度 O(logn)
// 空间复杂度 O(1)
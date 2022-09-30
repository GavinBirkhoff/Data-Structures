/**
 * 二分查找的前提，有序数组 O(logN)
 * @param Arr
 * @param K
 */
function binarySearch(arr, K){
    const NoFound = -1
    let left=0, right=arr.length-1,mid
    while (left <= right){
        mid = Math.floor((left+right)/2)
        if (arr[mid] > K){
            right = mid - 1
        }else if(arr[mid] < K){
            left = mid + 1
        }else {
            return mid
        }
    }
    return NoFound
}
const list = []
for (let i = 0; i < 999999; i++) {
    list.push(i)
}
console.time('binarySearch')
const i = binarySearch(list,999997)
console.log(i)
console.timeEnd('binarySearch')

console.time('indexOf')
const ii = list.indexOf(999997)
console.log(ii)
console.timeEnd('indexOf')

// indexOf 时间要大一些
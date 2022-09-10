const arr = [6, -2, 11, -4, 13, -5, -2]
// 方法1 O(N3)
function maxSubseqSum1(){
    let currentSum = 0
    let maxSum =0
    // i子列左值 j子列右值
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            for (let k = i; k <=j ; k++) {
                currentSum+=arr[k]
            }
            if(currentSum>maxSum){
                maxSum = currentSum
            }
            currentSum = 0
        }
    }
    return maxSum
}
// 方法1 O(N2)
function maxSubseqSum2(){
    let currentSum = 0
    let maxSum =0
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            currentSum+=arr[j]
            if(currentSum>maxSum){
                maxSum = currentSum
            }
        }
        currentSum = 0
    }
    return maxSum
}
function max(a,b,c){
    return a>b?a>c?a:c:b>c?b:c
}

function divideAndConquer(arr,left,right){
    let maxLeftSum = 0
    let maxRightSum = 0

    let maxLeftBorderSum = 0
    let leftBorderSum = 0
    let maxRightBorderSum = 0
    let rightBorderSum = 0

    // 递归出口
    if(left === right){
        if (arr[left]>0){
            return arr[left]
        } else {
            return 0
        }
    }
    let center = Math.floor((left+right)/2)
    maxLeftSum = divideAndConquer(arr, left,center)
    maxRightSum = divideAndConquer(arr, center+1,right)

    // 扫描左边
    for (let i = center; i >=left; i--) {
        leftBorderSum += arr[i]
        if (leftBorderSum>maxLeftBorderSum){
            maxLeftBorderSum = leftBorderSum
        }
    }

    // 扫描右边
    for (let i = center+1; i <=right; i++) {
        rightBorderSum += arr[i]
        if (rightBorderSum>maxRightBorderSum){
            maxRightBorderSum = rightBorderSum
        }
    }
    return max(maxLeftSum,maxRightSum,maxLeftBorderSum+maxRightBorderSum)
}
function maxSubseqSum3(){
   return divideAndConquer(arr,0,arr.length-1)
}
// 在线处理 O(N)
function maxSubseqSum4(){
    let currentSum = 0
    let maxSum =0
    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i]
        if (currentSum>maxSum){
            maxSum = currentSum
        }
        if (currentSum<0){
            currentSum = 0
        }
    }
    return maxSum
}

function run(fn,n){
    console.time(n)
    console.log(fn())
    console.timeEnd(n)
}


run(maxSubseqSum1,'maxSubseqSum1')
run(maxSubseqSum2,'maxSubseqSum2')
run(maxSubseqSum3,'maxSubseqSum3')
run(maxSubseqSum4,'maxSubseqSum4')
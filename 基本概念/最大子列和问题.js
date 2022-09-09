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
run(maxSubseqSum4,'maxSubseqSum4')
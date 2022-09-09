function printN(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i)
    }
}

function printRecursion(n) {
    if (n - 1 > 0) {
        printRecursion(n - 1)
    }
    console.log(n)
    return
}
console.time('print')
// printN(1000000) // 23.179s
printRecursion(1000000) // Maximum call stack size exceeded

console.timeEnd('print')
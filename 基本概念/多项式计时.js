
function f1(n,a,x){
    let p = a[0]
    for (let i = 1; i <= n; i++) {
        p += a[i]*Math.pow(x,i)
    }
    return p
}

function f2(n,a,x){
    let p = a[n]
    for (let i = n; i >0; i--) {
        p = a[i-1] + x*p
    }
    return p
}

function run(fn,a,fnName){
    // console.time(fnName)
    let start, end;
    start = new Date().getTime()
    for (let i = 0; i < MAXK; i++) {
        fn(MAXN-1,a,1.1)
    }
    end = new Date().getTime()
    // console.timeEnd(fnName)
    console.log(((end-start)/MAXK).toExponential(),fnName)
}

const MAXN = 10 // 多项式的最大项数
const MAXK = 1e7
const a = []
for (let i = 0; i < MAXN; i++) {
    a[i] = i
}
run(f1,a,'duration1')
run(f2,a,'duration2')
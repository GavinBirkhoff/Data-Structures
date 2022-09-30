interface Tree {
    data: string
    left: number
    right: number
}

const str1 = `
A 1 2
B 3 4
C 5 -
D - -
E 6 -
G 7 -
F - -
H - -
`
const str2 = `
G - 4
B 7 6
F - -
A 5 1
H - -
C 0 -
D - -
E 2 -
`
function create(str: string): string[][]{
    const arr = str.split('\n').filter(i=>i!=='').map(item=>item.split(' ').map(sub=>{
        if (sub === '-'){
            return '-1'
        }
        return sub
    }))
    return arr
}
const scanf1 = create(str1)
const scanf2 = create(str2)
console.log(scanf1,'scanf1')
console.log(scanf2,'scanf2')

const T1 = [] as Tree[]
const T2 = [] as Tree[]


function isomorphic(r1: number, r2: number): boolean{
    // 都为空
    if (r1===-1 && r2 === -1){
        return true
    }
    // 一个为空 一个不为空
    if ((r1===-1&&r2===-1)||(r1!==-1&&r2===-1)) {
        return false
    }
    // 值不等
    if (T1[r1].data !== T2[r2].data){
        return false
    }
    // 左儿子不为空且值相等
    if(((T1[r1].left!==-1)&&(T2[r2].left!==-1)) && (T1[T1[r1].left].data === T2[T2[r2].left].data)){
        return isomorphic(T1[r1].left, T2[r2].left) && isomorphic(T1[r1].right, T2[r2].right)
    } else {
        return isomorphic(T1[r1].left, T2[r2].right) && isomorphic(T1[r1].right, T2[r2].left)
    }
}

// 返回跟节点对应的数据下标
function buildTree( scanf: string[][],t: Tree[]):number{
    const check: number[] = []
    scanf.forEach((item,index)=>{
        check[index] = 1
    })
    scanf.forEach((item,index)=>{
        t[index] = {
            data:item[0],
            left:parseInt(item[1]),
            right:parseInt(item[2]),
        }
        item.slice(1).forEach(item=>{
            if(item !== '-1'){
                check[parseInt(item)]=-1
            }
        })
    })
    // console.log(check,'check')
    return check.indexOf(1)
}

const R1: number = buildTree(scanf1, T1)
const R2: number = buildTree(scanf2, T2)
console.log(R1,R2)
console.log('是否同构')
console.log(isomorphic(R1, R2))

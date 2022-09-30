type NodeDate = number

interface TreeNode {
    data: NodeDate
    left?: TreeNode
    right?: TreeNode
}

// 插入一个节点
function insert(data: NodeDate): TreeNode{
    const bt = {
        data,
        left: undefined,
        right: undefined
    }
    return bt
}

// 初始化一个二叉树
function createBinTree(): TreeNode {
    const bt: TreeNode = {
        data: 1,
        left: insert(2),
        right: insert(3)
    }
    bt.left!.left = insert(4)
    bt.left!.right = insert(5)
    bt.right!.left = insert(6)
    bt.right!.right = insert(7)
    return bt
}

const BT: TreeNode = createBinTree()

// 先序递归遍历
function preOrderTraversal(bt?: TreeNode){
    if (!bt) return
    console.log(bt.data)
    preOrderTraversal(bt.left)
    preOrderTraversal(bt.right)
}
// 先序非递归遍历
function preOrderNotTraversal(bt?: TreeNode){
    if (!bt) return
    let pointer: TreeNode | undefined = bt
    const stack: TreeNode[] = []
    while (pointer || stack.length > 0 ) {
        while (pointer){
            stack.push(pointer)
            console.log(pointer.data)
            pointer = pointer.left
        }
        if (!pointer) {
            const node = stack.pop() as TreeNode
            pointer = node.right
        }
    }
}

// 中序递归遍历
function inOrderTraversal(bt?: TreeNode){
    if (!bt) return
    inOrderTraversal(bt.left)
    console.log(bt.data)
    inOrderTraversal(bt.right)
}

// 中序非递归遍历
function inOrderNotTraversal(bt?: TreeNode){
    if (!bt) return
    let pointer: TreeNode | undefined = bt
    const stack: TreeNode[] = []
    while ( pointer || stack.length > 0){
        while (pointer){
            stack.push(pointer)
            pointer = pointer.left
        }
        if(!pointer){
            const node = stack.pop() as TreeNode
            console.log(node.data)
            pointer = node.right
        }
    }
}

// 后序递归遍历
function postOrderTraversal(bt?: TreeNode){
    if (!bt) return
    postOrderTraversal(bt.left)
    postOrderTraversal(bt.right)
    console.log(bt.data)
}

// 后序非递归遍历
function postOrderNotTraversal(bt?: TreeNode){
    if (!bt) return
    let pointer:TreeNode
    const stack: TreeNode[] = []
    const list: TreeNode[] = []
    stack.push(bt)
    while ( stack.length > 0){
       const node = stack.pop() as TreeNode
        list.push(node)
        if (node.left) {
            stack.push(node.left)
        }
        if (node.right) {
            stack.push(node.right)
        }
    }
    list.reverse().forEach((item)=>console.log(item.data))
}

// 层次遍历
function levelOrderTraversal(bt?: TreeNode) {
    if (!bt) return
    const queue: TreeNode[] = []
    queue.push(bt)
    while ( queue.length > 0 ) {
        const node = queue.shift() as TreeNode
        console.log(node.data)
        if (node.left) {
            queue.push(node.left)
        }
        if (node.right) {
            queue.push(node.right)
        }
    }
}

// 获取叶子节点
function findLeaves(bt?: TreeNode){
    if (!bt) return
    findLeaves(bt.left)
    findLeaves(bt.right)
    if(!bt.left && !bt.right) {
        console.log(bt.data)
    }
}

// 求树的高度
function getHeight(bt?: TreeNode):number{
    if (!bt) return 0
    const lH = getHeight(bt.left)
    const rH = getHeight(bt.right)
    const xH = Math.max(lH, rH) + 1
    return xH
}

console.log(`****先序递归遍历*****`)
preOrderTraversal(BT)
console.log(`****先序非递归遍历*****`)
preOrderNotTraversal(BT)
console.log(`****中序递归遍历*****`)
inOrderTraversal(BT)
console.log(`****中序非递归遍历*****`)
inOrderNotTraversal(BT)
console.log(`****后序递归遍历*****`)
postOrderTraversal(BT)
console.log(`****后序非递归遍历*****`)
postOrderNotTraversal(BT)
console.log(`****层次遍历*****`)
levelOrderTraversal(BT)
console.log(`****找到叶子节点*****`)
findLeaves(BT)
console.log(`****获取树的高度*****`)
console.log(getHeight(BT))

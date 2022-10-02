type ElementType = number
type BinTree = TreeNode | null
interface TreeNode {
    data: ElementType
    left: BinTree
    right: BinTree
}

// 查找递归实现
function find(x: ElementType,bst: BinTree): BinTree{
    if (bst === null) {
        return null
    }
    if (x < bst.data) {
        return find(x, bst.left)
    } else if (x > bst.data) {
        return find(x, bst.right)
    } else {
        return bst
    }
}

// 非递归查找
function iterFind(x: ElementType,bst: BinTree){
    while (bst){
        if (x < bst.data){
            bst = bst.left
        } else if (x > bst.data) {
            bst = bst.right
        } else {
            return bst
        }
    }
    return null
}

// 查找最小值的递归实现
function findMin(bst: BinTree): BinTree{
    if (bst === null) {
        return null
    } else if (bst.left) {
        return findMin(bst.left)
    } else {
        return bst
    }
}

// 查找最大值的非递归实现
function findMax(bst: BinTree){
    while (bst){
        if (bst.right) {
            bst= bst.right
        }else {
            return bst
        }
    }
    return null
}

// 中序遍历
function inOrderTraversal(bst: BinTree){
    if (!bst) return
    inOrderTraversal(bst.left)
    console.log(bst.data)
    inOrderTraversal(bst.right)
}

// 插入
function insert(x: ElementType, bst: BinTree){
    if (!bst) {
        bst = {
            data: x,
            left: null,
            right: null
        }
    } else {
        if (x < bst.data) {
            bst.left = insert(x, bst.left)
        } else if(x > bst.data){
            bst.right = insert(x, bst.right)
        }
    }
    return bst
}

// 删除 delete cann`t be used
function Delete(x: ElementType, bst: BinTree): BinTree{
    if (!bst){
        console.log('没有数据可以删除')
    } else if(x < bst.data){
        bst.left = Delete(x, bst.left)
    } else if (x > bst.data){
        bst.right = Delete(x, bst.right)
    } else { // 找到要删除的元素
        if(bst.left && bst.right){ // 被删除的节点有俩个孩子节点
            const tmp = findMin(bst.right) as TreeNode
            bst.data = tmp.data
            bst.right = Delete(tmp.data, bst.right)

        } else { // 要删除的节点最多只有一个节点
            if(!bst!.left) {
                bst = bst!.right
                return bst
            }
            if (!bst!.right){
                bst = bst!.left
            }
        }
    }
    return bst
}

let bst: BinTree = null
bst = insert(5,bst);
bst = insert(7,bst);
bst = insert(3,bst);
bst = insert(1,bst);
bst = insert(2,bst);
bst = insert(4,bst);
bst = insert(6,bst);
bst = insert(8,bst);
bst = insert(9,bst);
/*
            5
           /\
          3  7
         /\	 /\
        1 4 6  8
        \      \
         2      9
*/
// 中序遍历的结果是
console.log('中序遍历的结果是:')
inOrderTraversal(bst)
// 查找最小值是
console.log('查找最小值是:', findMin(bst)?.data)
// 查找最大值是
console.log('查找最大值是:', findMax(bst)?.data)
// 查找值为3的结点左子树结点值为
console.log('查找值为3的结点左子树结点值为:', find(3, bst)?.left?.data)
// 查找值为7的结点右子树结点值为
console.log('查找值为7的结点右子树结点值为:', iterFind(7, bst)?.right?.data)
// 删除值为5的结点
Delete(5, bst)
/*
            6
           /\
          3  7
         /\	  \
        1 4    8
        \      \
         2      9
*/
console.log('中序遍历删除后的结果是:')
inOrderTraversal(bst)
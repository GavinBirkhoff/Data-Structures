//
// Created by Gavin on 2021/8/15.
//

#include <stdio.h>
#include<stdlib.h>

#define MAXSIZE 10
#define NotFound -1
typedef int ElementType;

typedef int Position;
typedef struct LNode *List;
struct LNode {
    ElementType Data[MAXSIZE];
    Position Last;/* 保存线性表中最后一个元素的位置 */
};

List CreatList();//初始化链表
Position BinarySearch(List L, ElementType X);

List CreatList() {
    List L;
    L = (List) malloc(sizeof(struct LNode));
    L->Last = NULL;
    return L;
}

Position BinarySearch( List L, ElementType X ){
    Position left = 1;
    Position right = L->Last;
    while(left<=right){  // 考虑一下这为什么要取等？
        Position center = (left+right)/2;  //先找中间值
        if(L->Data[center] < X){     //比中间值大，X 在右半边
            left = center+1;
        }else if(X < L->Data[center]){   //比中间值小，X 在左半边
            right = center-1;
        }else  //找到了，直接返回
        return center;
    }
    return NotFound;
}
// 每次缩减一半范围，所以其复杂度为 O ( l g n ) O(lgn)O(lgn)
int main() {
    List L;
    ElementType X;
    Position P;

    L = CreatList();
    for (int i = 0; i < 4; i++)
        L->Data[i] = 2 * i;
    L->Last = 3;
    scanf("%d", &X);
    P = BinarySearch(L, X);
    printf("%d\n", P);

    return 0;
}
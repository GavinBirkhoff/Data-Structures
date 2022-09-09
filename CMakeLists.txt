cmake_minimum_required(VERSION 3.20)
#project(Data_Structures C)

set(CMAKE_C_STANDARD 11)

add_executable(PrintN 基本概念/PrintN.c)
add_executable(time-clock 基本概念/多项式计时.c)
add_executable(MaxSubseqSum 基本概念/MaxSubseqSum.cpp)

add_executable(MaximumSubsequenceSum "基本概念/MaximumSubsequenceSum.cpp")

add_executable(BinarySearch 基本概念/二分查找.cpp)

add_executable(LinearList 线性结构/线性表及实现/链表存储的线性表.c)
add_executable(LinearListByArr 线性结构/线性表及实现/数组存储的线性表.c)
add_executable(stack 线性结构/堆栈/栈的链表存储实现.c)
add_executable(stackList 线性结构/堆栈/栈的顺序存储实现.c)
add_executable(queue 线性结构/队列/循环队列的顺序存储实现.c)
add_executable(queue2 线性结构/队列/队列的链式存储实现.c)
add_executable(tree 树/树的链表存储实现.cpp)
add_executable(tree2 树/二叉搜索树的操作.cpp)
add_executable(Isomorphismoftrees 树/树的同构.cpp)
add_executable(heap 树/堆的操作.cpp)
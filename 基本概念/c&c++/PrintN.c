//
// Created by Gavin on 2021/8/14.
//
#include "stdio.h"
#include "time.h"

// clock_t是clock()函数返回的变量类型
clock_t start, stop;
// 记录被测函数运行时间，以秒为单位
double duration;

void PrintN(int N) {
    int i;
    for (i = 1; i <= N; i++) {
        printf("%d\n", i);
    }
    return;
}

void PrintNRecursion(int N) {
    if (N) {
        PrintN(N - 1);
        printf("%d\n", N);
    }
    return;
}

int main() {
    start = clock();
//    PrintN(1000000);
    PrintNRecursion(1000000);
    stop = clock();
    duration = ((double) (stop - start)) / CLOCKS_PER_SEC;
    printf("花费%f ms",duration);
    return 0;
}
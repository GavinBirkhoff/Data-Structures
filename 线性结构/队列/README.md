# 队列(Queue)
队列(Queue)：具有一定操作约束的线性表
插入和删除操作：只能在一端插入，而在另一端删除。

# 队列的抽象数据类型描述
类型名称：队列(Queue)
数据对象集：一个有0个或多个元素的有穷线性表。
操作集：长度为MaxSize的队列Q  Queue，队列元素item  ElementType
1. Queue CreatQueue( int MaxSize )：生成长度为MaxSize的空队列；
2. int IsFullQ( Queue Q, int MaxSize )：判断队列Q是否已满；
3. void AddQ( Queue Q, ElementType item )： 将数据元素item插入队列Q中；
4. int IsEmptyQ( Queue Q )： 判断队列Q是否为空；
5. ElementType DeleteQ( Queue Q )：将队头数据元素从队列中删除并返回。
# 线性表(Linear List)
由同类型数据元素构成有序序列的线性结构
1. 表中元素个数称为线性表的长度
2. 线性表没有元素时，称为空表
3. 表起始位置称表头，表结束位置称表尾

# 线性表的抽象数据类型描述
类型名称：线性表（List）
数据对象集：线性表是 n (≥0)个元素构成的有序序列( a1, a2, ...,an )
操作集：线性表L List，整数i表示位置，元素X  ElementType

线性表基本操作主要有：
1. List MakeEmpty()：初始化一个空线性表L； 
2. ElementType FindKth( int K, List L )：根据位序K，返回相应元素 ； 
3. int Find( ElementType X, List L )：在线性表L中查找X的第一次出现位置；
4. void Insert( ElementType X, int i, List L)：在位序i前插入一个新元素X； 
5. void Delete( int i, List L )：删除指定位序i的元素；
6. int Length( List L )：返回线性表L的长度n。
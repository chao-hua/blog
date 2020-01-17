# 队列

## FIFO(First Input First Output) 先进先出

### 循环列表

我们可以使用固定大小的数组和两个指针来指示起始位置和结束位置。 目的是重用我们之前提到的被浪费的存储。

```javascript
class Queue {
    constructor(size = 5) {
        this.head = -1;
        this.tail = -1;
        this.size = size;
        this.list = new Array(this.size);
    }

    isEmpty() {
        return this.head === -1;
    }

    isFull() {
        return ((this.tail + 1) % this.size) === this.head;
    }

    enQueue(item) {
        if (this.isFull()) return false;
        if (this.isEmpty()) this.head = 0;
        this.tail = (this.tail + 1) % this.size;
        this.list[this.tail] = item;
        return true;
    }

    deQueue() {
        if (this.isEmpty()) return false;
        if (this.head === this.tail) { // 在第一位
            this.head = -1;
            this.tail = -1;
            return true;
        }
        this.head = (this.head + 1) % this.size;
        return true;
    }

    front() {
        if (this.isEmpty()) return -1;
        return this.list[this.head];
    }

    rear() {
        if (this.isEmpty()) return -1;
        return this.list[this.tail];
    }
}
```

## BFS(Breadth First Search) 广度优先搜索

从起点开始发散寻找，直到遇到终点。

- 常见应用：
    + 遍历
    + 找出最短路径
- 执行关键：
    + 确定结点：结点将是实际结点或是状态
    + 确定边缘：边缘将是实际边缘或可能的转换
    + 不会访问一个结点两次

https://leetcode-cn.com/problems/number-of-islands/solution/200-dao-yu-shu-liang-by-alexer-660/

## DFS(Depth First Search) 深度优先算法
# 动态规划


### 网格路径总数

```js
function uniquePaths(m, n) {
    if (m <= 0 || n <= 0) {
        return 0;
    }

    // 初始化 dp[m-1][n-1] 数组，初始值 dp[0][1~n-1] dp[1~m-1][0]
    let dp = new Array(m);
    for (let i = 0; i < m; i++) {
        dp[i] = new Array(n);
        dp[i][0] = 1;
    }
    for (let i = 0; i < n; i++) {
        dp[0][i] = 1;
    }
    // 推导出 dp[m-1][n-1]
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
}
```

### 带有数字网格，到达终点最小值

```js
function uniquePaths(arr) {
    // 根据输入数组、获取二维数组的 m、n
    let m = arr.length;
    let n = arr[0].length;
    if (m <= 0 || n <= 0) {
        return 0;
    }

    // 初始化数据
    let dp = new Array(m);
    dp[0] = new Array(n)
    dp[0][0] = arr[0][0];
    for (let i = 1; i < m; i++) {
        dp[i] = new Array(n);
        dp[i][0] = dp[i - 1][0] + arr[i][0]
    }
    for (let i = 1; i < n; i++) {
        dp[0][i] = dp[0][i - 1] + arr[0][i]
    }

    // 推导出 dp[m-1][n-1]
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + arr[i][j]
        }
    }
    return dp[m - 1][n - 1]
}
```

### 修改连个字符，最少步骤数

```js
function minDistance(word1, word2) {
    // 根据输入字符串、获取二维数组的 l1,l2
    let l1 = word1.length;
    let l2 = word2.length;

    // 初始化
    let dp = new Array(l1 + 1); // 0->l1步操作=l1+1
    for (let i = 0; i < l1 + 1; i++) {
        dp[i] = new Array(l2 + 1) // 0->l2步操作=l2+1
        if (i === 0) {
            dp[i][0] = 0;
        } else {
            dp[i][0] = dp[i - 1][0] + 1;
        }
    }
    for (let j = 1; j < l2 + 1; j++) {
        dp[0][j] = dp[0][j - 1] + 1;
    }

    // 推导出 dp[l1][l2]
    for (let i = 1; i < l1 + 1; i++) {
        for (let j = 1; j < l2 + 1; j++) {
            // 当前字符一致
            if (word1.charAt(i - 1) === word2.charAt(j - 1)) {
                dp[i][j] = dp[i - 1][j - 1]
            } else {
                dp[i][j] = Math.min(Math.min(dp[i - 1][j - 1], dp[i - 1][j]), dp[i][j - 1]) + 1;
            }

        }
    }
    return dp[l1][l2];
}
```

***

[告别动态规划，连刷 40 道题，我总结了这些套路，看不懂你打我](https://zhuanlan.zhihu.com/p/91582909)  
[leetcode 动态规划专题](https://leetcode-cn.com/tag/dynamic-programming/)
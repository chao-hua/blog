# axios 常用方式总结

## 循环调用

一些场景中，需要前端对同一个接口进行循环调用，从而模拟批量处理的效果。

```js

// 递归调用接口 list:循环列表；that:this对象，可在函数内操作所有数据；index:其实位置，默认0；
executeLoop(list, that, index = 0) {
  // 初始化 flag 标志，用于标识是否请求报错
  if (this.flag == null) {
    this.flag = true;
  }
  if (this.flag && index < list.length) {
    let data = {
      id: list[index].id
    }
    doAxios(data).then(res => {
      if (res.code === 0) {
        index++;
        this.executeLoop(list, that, index);
      } else {
        this.flag = false;
      }
    }).catch(error => {
      this.flag = false;
      that.loading = false;
    });
  } else {
    that.loading = false;
  }
},
handleSubmit(){
    this.loading = true;
    this.executeLoop(this.list, this);
},
```

## 依赖调用

一些场景中，一个异步请求的数据依赖另一个异步请求的数据。

```js
// table2 的数据依赖 table1 的数据进行过滤而来
queryTable1() {
  let data = {
    id: '',
    conditions: [],
  };
  return queryTable1(data)
},
queryTable2() {
  let data = {
    id: '',
    conditions: [],
  };
  return queryTable2(data)
},
handleTable1a2Search() {
  this.loading12 = true;
  return Promise.all([this.queryTable1(), this.queryTable2()])
    .then(resArray => {
      // table1
      if (resArray[0].code === 0) {
        this.table1 = resArray[0].data;
      }
      // table2
      let tab2 = [],
        result = [];
      if (resArray[1].code === 0) {
        tab2 = resArray[1].data;
      }
      // 依赖 table1 进行数据处理
      this.table1.forEach(item => {
        let temp = {
          id: item.id,
          num: 0,
        }
        let match = tab2.find(m => {
          return m.id === item.id;
        })
        if (match) {
          temp.num = match.num;
        }
        result.push(temp);
      })
      this.table2 = result;
      this.loading12 = false;
    }).catch(error => {
      this.loading12 = false;
    });
},
```


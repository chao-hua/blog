# `@hook`

监听子组件（包含第三方组件）生命周期钩子函数，使用 `@hook:` 前缀指定监听的回调函数

```html
<child-template @hook:created="hookCreated" @hook:mounted="hookMounted"></child-template>

<script>
hookCreated() {
  console.log('hook created callback')
},
hookMounted() {
  console.log('hook mounted callback')
}
</script>

<script>
created(){
    console.log('child created')
},
mounted(){
    console.log('child mounted')
}
</script>
```

控制台输出：  
child created  
hook created callback  
child mounted  
hook mounted callback  

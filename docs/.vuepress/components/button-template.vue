<template>
    <div style="padding-top: 16px;">
        <h2>简单用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>
        <!-- <highlight-code lang="vue">
            <template>
                <e-button>测试</e-button>
                <js-button @click="test">默认按钮</js-button>
        <js-button icon="settings">默认按钮</js-button>
        <js-button :loading="true">默认按钮</js-button>
        <js-button disabled>默认按钮</js-button>
            </template>
        </highlight-code>
        <highlight-code lang="javascript">
            let str = 'Hello, World!';
            console.log(str);
        </highlight-code> -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            content: `
              <js-button>默认按钮</js-button>
              <js-button icon="settings">默认按钮</js-button>
              <js-button :loading="true">默认按钮</js-button>
              <js-button disabled>默认按钮</g-button>
            `.replace(/^ {8}/gm, '').trim()
        }
    },
    methods: {
        test() {
            alert('回调函数');
        }
    }
}
</script>
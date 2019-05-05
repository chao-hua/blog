<template>
    <section class="demo">
        <div class="demo__header">
            <h2>{{title}}</h2>
            <small>{{description}}</small>
        </div>
        <div class="demo__body">
            <div class="part">
                <slot name="html"></slot>
            </div>
            <div class="part">
                <slot></slot>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'Demo',
    props: ['title', 'description'],
    data() {
        return {
            isShow: false,
            codeTextBtn: '显示代码'
        }
    },
    methods: {
        handleToggleShow() {
            this.isShow = !this.isShow
            this.codeTextBtn = this.isShow ? '隐藏代码' : '显示代码'
        }
    }
}
</script>
<style lang="scss" scoped>
.demo {
    .demo__header {
        h2 {
            padding: 0;
            margin: 0;
            border-bottom: none;
            font-size: 16px;
        }

        small {
            font-size: 14px;
            display: inline-block;
            margin: 5px 0;
            color: #5e6d82;
        }
    }

    .demo__body {
        border: 1px solid #ebebeb;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        padding: 10px;

        .part {
            width: 50%;

            pre {
                padding: 20px 10px;
            }
            &+.part{
              margin-left: 10px;
            }
        }
    }

    &+.demo {
        margin-top: 20px;
    }

    &:not(:first-child) {
        margin-top: 20px;
    }
}
</style>
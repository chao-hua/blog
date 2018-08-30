# 节流函数

```js
function throttle(func, wait) {
    var previous = 0;
    var throttled = function() {
        var context = this;
        var args = arguments;
        var now = new Date();

        if (now - previous > wait) {
            func.apply(context, args);
            previous = now;
        }
    }
    return throttled;
}
```

```js
function throttle(func, wait) {
    var timeout;
    var throttled = function() {
        var context = this;
        var args = arguments;

        if (!timeout) {
            timeout = setTimeout(function() {
                func.apply(context, args);
                timeout = null;
            }, wait);
        }
    }
    return throttled;
}
```

```js
// 节流函数。
// 节流的目的是：降低触发回调的频率，减少不必要的过多的调用。
// 常应用于：DOM 元素的拖拽功能实现（mousemove）；搜索联想（keyup）；页面底部自动加载更多。
function throttle(func, wait, options) {
    var timeout, result, context, args;
    var previous = 0;
    // 参数默认值。
    // leading：是否设置节流前缘（leading edge），
    // 前缘的作用是保证第一次尝试调用的 func 会被立即执行，否则第一次调用也必须等待 wait 时间，默认为 true（因为根据 leading=== false 来判断）。
    // trailing：是否设置节流后缘（trailing edge）,
    // 后缘的作用是：当最近一次尝试调用 func 时，如果 func 不能立即执行，会延后 func 的执行，默认为 true。
    if (!options) options = {};

    var later = function() {
        // 执行时，刷新最近一次调用的时间戳。
        // 如果 options.leading === false（禁用第一次立即调用）：则每次触发回调后将 previous 置为 0，否则为当前时间戳。
        // +new Date() 将时间类型转换成数值类型，即 new Date().valueOf() 也等于 new Date().getTime()。
        previous = options.leading === false ? 0 : +new Date();
        timeout = null;
        func.apply(context, args);
        if (!timeout) context = args = null;
    }

    var throttled = function() {
        context = this;
        args = arguments;

        var now = +new Date();
        // 是否是第一次执行。
        // 第一次且第一次立即执行，previous 不变（previous = 0），否则 previous = now。
        if (!previous && options.leading === false) previous = now;
        // func 还要等待多久才能被调用 = 预设的最小等待期 -（当前时间 - 上一次调用的时间）。
        var remaining = wait - (now - previous);
        // 如果计算后能被立即执行。
        // remaining <= 0：不需要等待 => 立即执行。
        // remaining > wait：即 now < previous，是一种特出情况。
        // 当前尝试调用时，已经设置了当前时间点 now 之后，上次延时的函数 later 开始了执行，并刷新了 previous，此时出现了 now < previous。
        // 主要是因为 setTimeout 仅能保证 later 不早于某个时间执行，不能保证到了某个时间一定开始执行。
        if (remaining <= 0 || remaining > wait) {
            // 清除之前的设置的延时执行，就不存在某些回调一同发生的情况了。
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            result = func.apply(context, args);
            // 再次检查 timeout，因为 func 执行期间可能有新的 timeout 被设置，
            // 如果 timeout 被清空了，代表不再有等待执行的 func，也清空 context 和 args。
            if (!timeout) context = args = null;
        } else if (!timeout && options.trailing !== false) {
            // 如果不是第一次且 trailing 不是 false ，那么暂缓此次调用尝试的执行。
            timeout = setTimeout(later, remaining);
        }
        return result;
    }

    // 取消函数执行控制。
    throttled.cancel = function() {
        clearTimeout(timeout);
        timeout = null;
        previous = 0;
    };

    return throttled;
}
```
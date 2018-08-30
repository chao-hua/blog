# 防抖函数

```js
// 防抖函数。
// 防抖的目的是：高频（由 wait 来确定）操作下只响应一次。
// 常应用于：resize、scroll、mousedown、mousemove等；文本输入的验证（keyup、keydown）。
// immediate：false（默认），可以执行时也必须延后至少 wait 个时间才能执行。
// immediate：true，可以执行时立即执行。
function debounce(func, wait, immediate) {
    var timeout, result;
    var debounced = function() {
        var context = this;
        var args = arguments;

        if (timeout) clearTimeout(timeout);
        if (immediate) {
            // 如果有定时器，说明执行过了，不再执行。
            // 如果有定时器，说明执行还在等候时间内，不再执行，否则立即执行。
            var callNow = !timeout;
            // 持续触发时，依然有定时器（callNow 为 false），
            timeout = setTimeout(function() {
                // 执行时，清空定时器标志，意味着回到初始状态。
                timeout = null;
            }, wait);
            // 立即执行。只有在立即执行的情况下，返回值才有意义。
            if (callNow) result = func.apply(context, args)
        } else {
            // 延迟执行。
            timeout = setTimeout(function() {
                func.apply(context, args);
            }, wait);
        }
        return result;
    };

    // 取消防抖（主要用于在等候时间内，想回到初始状态，立即执行），变成初始状态。
    debounced.cancel = function() {
        clearTimeout(timeout);
        timeout = null;
    };

    return debounced;
}
```
`Function.prototype.bind` 在 ECMA-262 第五版才被加入；它可能无法在所有浏览器上运行。MDN 给出的 Polyfill：

```js
if (!Function.prototype.bind) {
    Function.prototype.bind = function(oThis) {
        if (typeof this !== 'function') {
            throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        }
        // 函数入参。
        var aArgs = Array.prototype.slice.call(arguments, 1),
            // 待绑定的函数。
            fToBind = this,
            fNOP = function() {},
            fBound = function() {
                // 上下文校正，
                // 考虑绑定后函数作为构造函数（new）使用的情况，
                // 构造函数的 this，指向示例本身，不会指向绑定函数时传入的 oThis。
                return fToBind.apply(
                    // 根据继承关系 fBound.prototype = new fNOP()，
                    // 可以用 this instanceof fNOP 来判断，是否 是 new 调用。
                    this instanceof fNOP ?
                    this :
                    oThis || this,
                    // 合并参数，
                    // aArgs 是调用 bind 时传递的额外参数，
                    // arguments 是调用 fBound 时传递的参数，合并起来是全部的参数。
                    aArgs.concat(Array.prototype.slice.call(arguments)));
            };
        // 继承关系。
        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP();

        return fBound;
    };
}
```
// 链式写法


// then的使用方式 普通值意味着不是promise
// 1.then中的回调有两个方法 成功或者失败 他们的返回记过 普通值 会传递给外层的下一个then中
// 2.可以再成功和失败中抛出错误 ，会走到下一次then的失败中
// 3.返回的是一个promise 那么会用这个promise状态作为结果 会用promise的结果向下传递
// 4.错误信息 是默认先找离自己最近的错误信息出来 找不到向下查找 找到后执行

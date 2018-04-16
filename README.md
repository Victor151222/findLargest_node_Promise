两种方式实现：寻找文件夹里面最大的文件。

1. `FileSystem.js`

   使用node.js里面原生的异步API，通过一个count计数器来判断所有的异步是否执行完毕。

   ​

2. `findLargest_Promise`

   使用`Promise`处理异步操作。这里使用的是`Promise.all`和`Array.prototype.map()`的联合。

   可读性更好。

[Array.prototype.filter()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。 也就是**过滤**功能。

[Array.prototype.map()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。

[Array.prototype.reduce()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

对累加器和数组中的每个元素（从左到右）应用一个函数，将其减少为单个值。
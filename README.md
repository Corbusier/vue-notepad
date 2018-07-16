# vue-notepad

> demo采用了vue2.5 + vuex + localStorage + sass + webpack实现的本地储存记事本。兼容PC端及移动端。
 
## Build Setup

在线预览: [preview](https://corbusier.github.io/vue-notepad/dist/index.html)

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## introduction
### 基本功能
- 事件状态切换
	 * 添加事件 --> 未完成列表
	 * 未完成  --> 已完成
	 * 未完成  --> 已取消
	 * 已完成  --> 未完成
	 * 已取消  --> 未完成

- 事件筛选
- 编辑事件
- 删除事件
- 清空所有事件
- 本地化储存事件数据
- 导出/导入数据

### 状态切换
事件的保存、状态切换都由vuex管理，当发生相应事件时，提交载荷到vuex，与其中保存的state相比对，符合判断条件的相应state则切换状态。

### 本地储存
使用localStorage储存数据，所有状态的事件都由localStorage保存，基本用法：
```js
	1). 储存数据：localStorage.setItem(item, value)
	2). 获取数据：localStorage.getItem(item)
	3). 清除数据：localStorage.removeItem(item)
```

### 数据筛选
在编辑数据时，可以根据类型和关键词进行筛选。在返回所有事件的计算属性上，使用过滤器，对判断条件──事件类型type及关键词content进行筛选，返回符合条件的事件。

### 数据的导出和导入
利用Blob对象创建指定文件并下载。以导出数据为例，它的过程如下：

- 构造Blob对象。new Blob(array, options)。options是可选参数。
    * type，默认值为"",代表放入Blob中的内容的MIME类型。

- 创建URL对象指定文件的下载链接，新的URL表示指定File对象或Blob对象
- 利用`<a>`标签进行下载。先生成一个`<a>`元素，并为其指定下载链接为`blob`，download属性指定文件名，最后`click()`事件触发下载。
- 释放URL对象。手动释放之前创建的URL对象，能够最大限度的获得最大性能和内存使用状况。方法为：`window.URL.revokeObjectURL(objectURL)`

示例：
```js
   const foo = ['Hello']
   const blob = new Blob([JSON.stringify(foo)], {type: 'text/plain'})
   const filename = `${new Date().valueOf()}.txt`
   const link = document.createElement('a')
   link.href = window.URL.createObjectURL(blob)
   link.download = filename
   link.click() 
   window.URL.revokeObjectURL(link.href) 
```





















# 虚拟列表相关原理

> 以单行单列举例

``` text
scrollTop：页面滚动距离
boxCount：预计数量
realItemCount：渲染数量
itemHeight：单列高度
constant：常量（偏差值，为估算值，防止页面滚动过快的时候，真实节点空白）
```

> 监听滚动事件
>
> 给每一项一个估算值或定值
>
> 容器设置一个超大高度 `boxHeight = boxCount * itemHeight`

### 方式 1：容器设置 paddingTop

```text
在scrollTop 大于或者小于 paddingTop - constant 的时候，去修改paddingTop的距离，并将头部或者尾部的真实节点销毁。

此方法的缺陷，设置 paddingTop 的时候，同时会进行 真实节点 的变化，某些情况下页面可能会晃动。
```

### 方式 2：容器：relective、 真实节点： abslote

[例子](https://raohong.github.io/taro-list-demo/dist/index.html#/pages/normal/index)

```text
记录首尾真实节点的top值。
firstTop：头部的top值，初始为0
endTop：尾部的top值，初始为0 +  (realItemCount - 1) * itemHeight
prevScrollTop ： 上一次的页面滚动距离，初始为0

利用节流函数

在scrollTop 大于 prevScrollTop 且小于 prevScrollTop + itemHeight 的时候，
去给尾部添加添加一个新的的真实节点（top: endTop + itemHeight），
并销毁顶部的一个真实节点，重新给 prevScrollTop 赋值。（可利用另一个变量来进行节流，使其仅执行一次节点修改）

在scrollTop 小于 prevScrollTop 且大于 prevScrollTop - itemHeight  的时候，去给顶部添加添加额外的真实节点，并销毁底部的一个节点，重新给 firstTop 赋值。（节流原理同上）
```

### 参考地址

#### 推荐 1

> [Taro 文档](https://taro-docs.jd.com/taro/docs/3.0.0-beta.5/virtual-list/)
>
> [Tarojs 源码](https://github.com/NervJS/taro/blob/v3.0.0-rc.6/packages/taro-components/virtual-list/index.js)
>
> 这里有 Vue 版本，可读性更佳

#### 推荐 2

> [Taro-list 源码 另一种解决方案](https://github.com/raohong/taro-list)
>
> [taro-list-data-manager 源码](https://github.com/raohong/taro-list-data-manager)
>
> 提供了一些额外的功能（多列等）

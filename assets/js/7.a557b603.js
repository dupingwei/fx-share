(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{356:function(t,e,a){"use strict";a.r(e);var r=a(42),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"虚拟列表相关原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#虚拟列表相关原理"}},[t._v("#")]),t._v(" 虚拟列表相关原理")]),t._v(" "),a("blockquote",[a("p",[t._v("以单行单列举例")])]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("scrollTop：页面滚动距离\nboxCount：预计数量\nrealItemCount：渲染数量\nitemHeight：单列高度\nconstant：常量（偏差值，为估算值，防止页面滚动过快的时候，真实节点空白）\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("blockquote",[a("p",[t._v("监听滚动事件")]),t._v(" "),a("p",[t._v("给每一项一个估算值或定值")]),t._v(" "),a("p",[t._v("容器设置一个超大高度 "),a("code",[t._v("boxHeight = boxCount * itemHeight")])])]),t._v(" "),a("h3",{attrs:{id:"方式-1：容器设置-paddingtop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方式-1：容器设置-paddingtop"}},[t._v("#")]),t._v(" 方式 1：容器设置 paddingTop")]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("在scrollTop 大于或者小于 paddingTop - constant 的时候，去修改paddingTop的距离，并将头部或者尾部的真实节点销毁。\n\n此方法的缺陷，设置 paddingTop 的时候，同时会进行 真实节点 的变化，某些情况下页面可能会晃动。\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h3",{attrs:{id:"方式-2：容器：relective、-真实节点：-abslote"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方式-2：容器：relective、-真实节点：-abslote"}},[t._v("#")]),t._v(" 方式 2：容器：relective、 真实节点： abslote")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://raohong.github.io/taro-list-demo/dist/index.html#/pages/normal/index",target:"_blank",rel:"noopener noreferrer"}},[t._v("例子"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("记录首尾真实节点的top值。\nfirstTop：头部的top值，初始为0\nendTop：尾部的top值，初始为0 +  (realItemCount - 1) * itemHeight\nprevScrollTop ： 上一次的页面滚动距离，初始为0\n\n利用节流函数\n\n在scrollTop 大于 prevScrollTop 且小于 prevScrollTop + itemHeight 的时候，\n去给尾部添加添加一个新的的真实节点（top: endTop + itemHeight），\n并销毁顶部的一个真实节点，重新给 prevScrollTop 赋值。（可利用另一个变量来进行节流，使其仅执行一次节点修改）\n\n在scrollTop 小于 prevScrollTop 且大于 prevScrollTop - itemHeight  的时候，去给顶部添加添加额外的真实节点，并销毁底部的一个节点，重新给 firstTop 赋值。（节流原理同上）\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("h3",{attrs:{id:"参考地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考地址"}},[t._v("#")]),t._v(" 参考地址")]),t._v(" "),a("h4",{attrs:{id:"推荐-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推荐-1"}},[t._v("#")]),t._v(" 推荐 1")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://taro-docs.jd.com/taro/docs/3.0.0-beta.5/virtual-list/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Taro 文档"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/NervJS/taro/blob/v3.0.0-rc.6/packages/taro-components/virtual-list/index.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tarojs 源码"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("这里有 Vue 版本，可读性更佳")])]),t._v(" "),a("h4",{attrs:{id:"推荐-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推荐-2"}},[t._v("#")]),t._v(" 推荐 2")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://github.com/raohong/taro-list",target:"_blank",rel:"noopener noreferrer"}},[t._v("Taro-list 源码 另一种解决方案"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/raohong/taro-list-data-manager",target:"_blank",rel:"noopener noreferrer"}},[t._v("taro-list-data-manager 源码"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("提供了一些额外的功能（多列等）")])])])}),[],!1,null,null,null);e.default=s.exports}}]);
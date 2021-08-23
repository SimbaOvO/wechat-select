# wechat-select  
应该是一个开箱即用(📦?)的微信小程序下拉组件



## Look👀

<img src="https://i.loli.net/2021/08/10/PdVjezt6E8kGBJv.gif" alt="inside.gif" width="261" height="243" />

<img src="https://i.loli.net/2021/08/10/IcvAxql7t4UTZPC.gif" alt="inside.gif" width="264" height="308" />



## Notes📒

- 本项目是为了解决小程序社区中 没有符合业务需求的下拉组件设计的一个demo 欢迎clone康康👏

- 没有展开特别多Props的原因
  1. 不同的设计稿对于内联/外部的选择框有不同的交互需求
  2. 基本上没有很多需要动态计算的地方 大部分都是跟着设计稿来进行还原
  3. 滚动/固定的需求各不相同 所以就开放给大家自己拓展啦
- 目前是将选择框和下拉选项封装在了一起 如果样式/交互不满足你的需求 麻烦你手动fork来进行二次开发 谢谢～



## Props⚙️
| Name     | Description                                                  | Type     | Default                                                      |
| -------- | ------------------------------------------------------------ | -------- | ------------------------------------------------------------ |
| options  | 下拉选项的列表                                               | Option[] | [{ id: 0, label: '车牌号码' },{ id: 1, label: '品牌车系' },{ id: 2, label: '车架号码' }]<br />(目前默认是通过每一项里面的id来作为唯一标识 如果需要改变数据结构 需联动修改页面循环渲染部分) |
| val      | 选中项对应的信息                                             | Option   | null                                                         |
| show     | 控制展示下拉框的flag                                         | boolean  | false                                                        |
| height   | 单个选项的高度                                               | number   | 72                                                           |
| limit    | 展开后一页所渲染的选项个数(用于计算滚动高度)                 | number   | 2                                                            |
| *top(?)* | 使用外部悬空下拉框的时候才需要设置该属性 用于控制距离选择器的间距 | number   | 30                                                           |



## Events📢
*考虑是否需要open & close的event💭*

| Event  | Description      | Details                                                      |
| ------ | ---------------- | ------------------------------------------------------------ |
| select | 选中某项后的回调 | 包含回调数据的Event对象 [想要看官方的类型定义可以点这里](https://github.com/wechat-miniprogram/api-typings/blob/master/types/wx/lib.wx.event.d.ts) |



## Directory📁

```
|-- wechat-select
    |-- app.js
    |-- app.json
    |-- app.wxss
    |-- project.config.json
    |-- sitemap.json
    |-- assets
    |   |-- styles	--> 存放复用的CSS文件夹
    |       |-- common.wxss	--> 组件内部找不到的样式可以来这里找
    |-- components
    |   |-- inside-select	--> 内联Select下拉组件
    |   |   |-- index.js
    |   |   |-- index.json
    |   |   |-- index.wxml
    |   |   |-- index.wxss
    |   |-- outside-select	--> 外置悬空Select下拉组件
    |       |-- index.js
    |       |-- index.json
    |       |-- index.wxml
    |       |-- index.wxss
    |-- mixins	--> 存放组件复用的Behavior
    |   |-- selectMixin.js	--> 主要的逻辑和属性在这里面可以找得到
    |-- pages
        |-- index	--> Demo展示的页面
            |-- index.js
            |-- index.json
            |-- index.wxml
            |-- index.wxss
```



## TODO

- [x] 内联显示 / 外部悬空
- [ ] 蒙层mask(?)
    - 考虑到页面上需要额外的区域来点击取消下拉框的显示
    - 在内容过多的页面 多出蒙层来覆盖原有的层级不是件好事
- [ ]  清空按钮的存在(?)
  - 支持选项过多的时候 清空所选项
  - 大部分都有「全部」的选项 只是单独支持清空为「请选择」状态 
- [ ]  虚拟列表(?)
    - 冗余许多DOM在列表里带来的渲染压力太大了
    - 下拉框不会有很大体量的选择内容吧

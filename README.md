# wechat-select  
应该是一个开箱即用(?)的微信小程序下拉组件

## Props  
// TODO

## Events
// TODO

## TODO

- [ ] 内联显示 / 外部悬空
- [ ] 蒙层mask(?)
    - 考虑到页面上需要额外的区域来点击取消下拉框的显示
    - 在内容过多的页面 多出蒙层来覆盖原有的层级不是件好事
- [ ]  清空按钮的存在(?)
  - 支持选项过多的时候 清空所选项
  - 大部分都有「全部」的选项 只是单独支持清空为「请选择」状态 
- [ ]  虚拟列表(?)
    - 冗余许多DOM在列表里带来的渲染压力太大了
    - 下拉框不会有很大体量的选择内容吧

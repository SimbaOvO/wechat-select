const selectMixins = require('../../mixins/selectMixin')

Component({
  properties: {
    // 距离选择器的高度
    top: {
      type: Number,
      value: 30
    }
  },
  behaviors: [selectMixins],
  observers: {
    'show'(value) {
      const { classNames: prevClassNames } = this.data
      const classNames = {
        ...prevClassNames,
        box: value ? 'select-box__view-box' : 'select-box__hidden-box',
        container: value ? '' : 'container--hidden'
      }
      this.setData({
        classNames
      })
    }
  }
})

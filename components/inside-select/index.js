const selectMixins = require('../../mixins/selectMixin')

Component({
  behaviors: [selectMixins],
  observers: {
    'show'(value) {
      const {
        styles: prevStyles,
        height,
        limit
      } = this.data
      const styles = {
        ...prevStyles,
        maxHeight: value ? height * (limit + 1) : height
      }
      this.setData({
        styles
      })
    }
  }
})

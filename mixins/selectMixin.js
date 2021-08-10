module.exports = Behavior({
  properties: {
    // 是否需要mask蒙层
    // mask: {
    //   type: Boolean,
    //   value: false
    // },
    // 下拉选项
    options: {
      type: Array,
      value: [
        { id: 0, label: '车牌号码' },
        { id: 1, label: '品牌车系' },
        { id: 2, label: '车架号码' }
      ],
    },
    // 返回的数据结构
    val: {
      type: Object,
      value: null
    },
    // 控制展示的flag
    show: {
      type: Boolean,
      value: false
    },
    // 单个选项的高度
    height: {
      type: Number,
      value: 72
    },
    // 非必选项：展开一页所渲染的选项个数(用于计算滚动高度)
    limit: {
      type: Number,
      value: 2
    }
  },
  data: {
    // 页面内联样式
    styles: {
      labelColor: 'grey',
      scrollHeight: 0
    },
    // 页面文案
    texts: {
      label: '请选择'
    },
    // 页面className 具体页面具体指定
    classNames: {
      open: ''
    },
    timer: null
  },
  observers: {
    'val'(value) {
      console.log()
      const styles = {
        ...this.data.styles,
        labelColor: value ? '#000' : 'grey'
      }
      // 页面渲染文本
      const texts = {
        ...this.data.texts,
        label: (value && value.label) ? value.label : '请选择'
      }
      this.setData({
        styles,
        texts
      })
    }
  },
  lifetimes: {
    attached () {
      const {
        styles: prevStyles,
        height,
        limit,
        top
      } = this.data
      const styles = {
        ...prevStyles,
        scrollHeight: height * limit,
        top: `calc(100% + ${top}rpx)`,
      }
      this.setData({
        styles
      })
    },
  },
  methods: {
    /**
     * 修改下拉框状态
     * @param show boolean
     */
    setStatus (show) {
      this.setData({ show })
    },
    // 选择框点击时间
    changeStatus () {
      this.data.show
        ? this.hideSelect()
        : this.showSelect()
    },
    showSelect () {
      this.setStatus(true)
    },
    hideSelect () {
      this.setStatus(false)
    },
    /**
     * 选择下拉选项的回调
     * @param e 下拉元素 用于获取dataset里对应的id
     */
    select (e) {
      const TIME_OUT = 800
      const id = e.currentTarget.dataset.id
      const val = this.data.options
        .find(option => option.id === id) || null
      if (val && this.data.val && val.id === this.data.val.id) return;
      const fn = () => {
        this.setData({ val })
        this.hideSelect()
        this.triggerEvent('select', val)
      }
      if (this.data.timer === null) {
        fn()
        return
      }
      this.data.timer && clearTimeout(this.data.timer)
      this.setData({
        timer: setTimeout(fn, TIME_OUT)
      })
    }
  }
})

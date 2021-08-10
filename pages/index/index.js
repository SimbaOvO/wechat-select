Page({
  handleSelect({ currentTarget, detail }) {
    const {
      dataset: {
        type = 'unknown'
      } = {}
    } = currentTarget || {}
    console.log(`${type} trigger event`)
    console.log('handleSelect', detail)
  }
})

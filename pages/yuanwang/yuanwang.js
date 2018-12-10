const app = getApp()

Page({
  data: {
    baseUrl: app.globalData.baseUrl,
    current: 0
  },
  bindtap(e){
    wx.navigateTo({
      url:'../share/share',
      index: this.data.current
    })
  },
  bindchange(e){
    this.current = e.detail.current
    console.log(e.detail.current)
  }
})
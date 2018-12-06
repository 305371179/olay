const app = getApp()

Page({
  data: {
    baseUrl: app.globalData.baseUrl,
    current: 0,
  },
  bindchange(target){
    this.setData({current:target.detail.current})
  }
})
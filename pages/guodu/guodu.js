const app = getApp()

Page({
  data: {
    baseUrl: app.globalData.baseUrl
  },
  bindtap(){
    console.log(4444)
    wx.navigateTo({
      url: '../page/page'
    })
  }
})
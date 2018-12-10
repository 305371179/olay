const app = getApp()

Page({
  data: {
    baseUrl: app.globalData.baseUrl,
    current: 0,
  },
  bindchange(target){
    this.setData({current:target.detail.current})
  },
  //过渡页跳转
  bindtap(){
    //跳转到选择愿望的页面
    wx.navigateTo({
      url: '../choose/choose'
    })
  }
})
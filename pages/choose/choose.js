const app = getApp()

Page({
  data: {
    baseUrl: app.globalData.baseUrl
  },
  bindtap(e){
    let type = parseInt(e.currentTarget.dataset.type)
    //跳转到愿望页面
    wx.navigateTo({
      url: '../yuanwang/yuanwang?type='+type,
      // type : type
    })
  }
})
const app = getApp()

Page({
  data: {
    baseUrl: app.globalData.baseUrl,
    current: 0,
    value: '',
  },
  onLoad(options){
    this.setData({
      current:options.type
    })
  },
  bindtap(e){
    wx.navigateTo({
      url:'../share/share',
      index: this.data.current
    })
  },
  bindchange(e){
    this.current = e.detail.current
  },
  bindTextAreaBlur(){

  },
  bindTextAreaFocus(){

  }
})
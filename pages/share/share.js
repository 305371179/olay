const app = getApp()

Page({
  data: {
    baseUrl: app.globalData.baseUrl,
    userInfo: '',
    head: '',
    nickName:'',
    hasUserInfo: false,
    show: 'none',
    current:4,
    value: 'adfd',
    values: ['整整齐齐','全家安康'],
    labelShow:true,
    //旅行助力
    lvxingText:16,
    wuzheText:16,
    yiyuanText:16,
  },
  lvxingTap(){

  },
  wuzheTap(){

  },
  yiyuanTap(){

  },
  close(){
    this.setData({
      show: 'none'
    })
  },
  bindtap(){
    this.setData({
      show: 'block'
    })
  },
  onLoad(options){
    console.log(options)
    if(options.type!==undefined){
      const value = options.value
      this.setData({
        current:options.type,
        value: value,
        values: value.split('\n')
      })
    }

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
        head: app.globalData.userInfo.avatarUrl,
        nickName: app.globalData.userInfo.nickName,
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
          head: app.globalData.userInfo.avatarUrl,
          nickName: app.globalData.userInfo.nickName,


        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true,
            head: app.globalData.userInfo.avatarUrl,
            nickName: app.globalData.userInfo.nickName,


          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
      head: app.globalData.userInfo.avatarUrl,
      nickName: app.globalData.userInfo.nickName,

    })
  }
})
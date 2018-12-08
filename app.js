//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        this.globalData.code = res.code
        // this.login()
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              console.log(res.userInfo)
              // this.getUserInfo()
              // this.getUserPhone()
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    debug: true,
    code: '',
    userInfo: null,
    baseUrl: '../res/',
    requestUrl: 'https://h5.waynetechs.com/olay_walmart/',
    loginData: {},
    userData: null,
    phoneData: {},
    wishId: '',
    redeeminfo:null
  },
  showLoading(title){
    wx.showToast({
      icon: 'loading',
      title: title,
      duration: 300000,
      mask: true
    })
  },
  hideLoading(){
    wx.hideLoading()
  },
  showFailLoading(title){
    wx.showToast({
      icon: 'fail',
      title: title,
      duration: 2000,
      mask: false
    })
  },
  redeem(prize,code){
    this.showLoading('保存心愿中')
    wx.request({
      url: this.globalData.requestUrl+'api.php?=getredeeminfo', //仅为示例，并非真实的接口地址
      data: {
        prize,
        code
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data)
        //{"msg":"","data":{"session_key":"123456789","openid":"12345678901","memberId":123},"code":200}
        if(!res.data||res.data.code!==200){
          this.showFailLoading(res.data.msg)
          return
        }
        this.hideLoading()
        // this.globalData.redeeminfo = res.data.data
      },
      fail(){
        this.hideLoading()
        this.showFailLoading()
      }
    })
  },
  getredeeminfo(prize){
    this.showLoading('保存心愿中')
    wx.request({
      url: this.globalData.requestUrl+'api.php?=getredeeminfo', //仅为示例，并非真实的接口地址
      data: {
        prize
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data)
        //{"msg":"","data":{"session_key":"123456789","openid":"12345678901","memberId":123},"code":200}
        if(!res.data||res.data.code!==200){
          this.showFailLoading(res.data.msg)
          return
        }
        this.hideLoading()
        this.globalData.redeeminfo = res.data.data
      },
      fail(){
        this.hideLoading()
        this.showFailLoading()
      }
    })
  },
  reserve(prize){
    this.showLoading('保存心愿中')
    wx.request({
      url: this.globalData.requestUrl+'api.php?=reserve', //仅为示例，并非真实的接口地址
      data: {
        prize
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data)
        //{"msg":"","data":{"session_key":"123456789","openid":"12345678901","memberId":123},"code":200}
        if(!res.data||res.data.code!==200){
          this.showFailLoading(res.data.msg)
          return
        }
        this.hideLoading()
        // this.globalData.wishId = res.data.data.wishId
      },
      fail(){
        this.hideLoading()
        this.showFailLoading()
      }
    })
  },
  savelike(wish){
    this.showLoading('保存心愿中')
    wx.request({
      url: this.globalData.requestUrl+'api.php?=savelike', //仅为示例，并非真实的接口地址
      data: {
        did: this.globalData.wishId
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data)
        //{"msg":"","data":{"session_key":"123456789","openid":"12345678901","memberId":123},"code":200}
        if(!res.data||res.data.code!==200){
          this.showFailLoading(res.data.msg)
          return
        }
        this.hideLoading()
        // this.globalData.wishId = res.data.data.wishId
      },
      fail(){
        this.hideLoading()
        this.showFailLoading()
      }
    })
  },
  saveWish(wish){
    this.showLoading('保存心愿中')
    wx.request({
      url: this.globalData.requestUrl+'api.php?=savewish', //仅为示例，并非真实的接口地址
      data: {
        wish
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data)
        //{"msg":"","data":{"session_key":"123456789","openid":"12345678901","memberId":123},"code":200}
        if(!res.data||res.data.code!==200){
          this.showFailLoading(res.data.msg)
          return
        }
        this.hideLoading()
        this.globalData.wishId = res.data.data.wishId
      },
      fail(){
        this.hideLoading()
        this.showFailLoading()
      }
    })
  },
  register(name,mobile){
    this.showLoading('注册中')
    wx.request({
      url: this.globalData.requestUrl+'api.php?=register', //仅为示例，并非真实的接口地址
      data: {
        mobile: mobile,
        name: name
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data)
        //{"msg":"","data":{"session_key":"123456789","openid":"12345678901","memberId":123},"code":200}
        if(!res.data||res.data.code!==200){
          this.showFailLoading(res.data.msg)
          return
        }
        this.hideLoading()
        this.globalData.loginData = res.data.data
      },
      fail(){
        this.hideLoading()
        this.showFailLoading()
      }
    })
  },
  login(){
    this.showLoading('登录中')
    wx.request({
      url: this.globalData.requestUrl+'api.php?=wxlogin', //仅为示例，并非真实的接口地址
      data: {
        jscode: this.globalData.code
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data)
        //{"msg":"","data":{"session_key":"123456789","openid":"12345678901","memberId":123},"code":200}
        if(!res.data||res.data.code!==200){
          this.showFailLoading(res.data.msg)
          return
        }
        this.hideLoading()
        this.globalData.loginData = res.data.data
      },
      fail(){
        this.hideLoading()
        this.showFailLoading()
      }
    })
  },
  getUserInfo(){
      // this.showLoading('登录中')
      wx.request({
        url: this.globalData.requestUrl+'api.php?=wxuserinfo', //仅为示例，并非真实的接口地址
        data: {
          iv: this.globalData.userInfo.iv,
          encryptedData: this.globalData.userInfo.encryptedData
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success (res) {
          console.log(res.data)
          //{"msg":"","data":{"session_key":"123456789","openid":"12345678901","memberId":123},"code":200}
          if(!res.data||res.data.code!==200){
            this.showFailLoading(res.data.msg)
            return
          }
          this.hideLoading()
          this.globalData.userData = res.data.data
        },
        fail(){
          this.hideLoading()
          this.showFailLoading()
        }
      })
  },
  getUserPhone(){
    this.showLoading('获取用户手机号码')
    wx.request({
      url: this.globalData.requestUrl+'api.php?=wxuserphone', //仅为示例，并非真实的接口地址
      data: {
        iv: this.globalData.userInfo.iv,
        encryptedData: this.globalData.userInfo.encryptedData
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data)
        //{"msg":"","data":{"session_key":"123456789","openid":"12345678901","memberId":123},"code":200}
        if(!res.data||res.data.code!==200){
          this.showFailLoading(res.data.msg)
          return
        }
        this.hideLoading()
        this.globalData.phoneData = res.data.data
      },
      fail(){
        this.hideLoading()
        this.showFailLoading()
      }
    })
  },
  getImg(img){
    return this.globalData.baseUrl + img
  }
})
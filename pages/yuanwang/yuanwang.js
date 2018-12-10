const app = getApp()

Page({
  data: {
    baseUrl: app.globalData.baseUrl,
    current: 0,
    value: '家人安康\n整整齐齐',
    fontSize: 80,
    width:80,
    values: [],
    labelShow:true,
  },
  onLoad(options){
    if(options.type!==undefined)
    this.setData({
      current:options.type
    })
    this.setData({
      values: this.data.value.split('\n')
    })
    // this.setFontSize()
  },
  bindtap(e){
    //调用上传按钮
    wx.navigateTo({
      url:'../share/share',
      index: this.data.current
    })
  },
  bindchange(e){
    this.current = e.detail.current
  },
  bindTextAreaBlur(){
    this.setData({
      labelShow: true
    })
  },
  bindTextAreaFocus(){
    this.setData({
      labelShow: false
    })
  },
  setFontSize(){
    const length = this.data.value.length
    let size = parseInt(20/length*80)
    if(length<10){
      size=80
    }else if(length<15){
      size = 60
    }
    this.setData({
      fontSize: size,
      width:size,
    })
  },
  bindinput(e){
    this.setData({
      value: e.detail.value,
      values: e.detail.value.split('\n')
    })
    // console.log(e.detail.value.split('\n'))
  }
})
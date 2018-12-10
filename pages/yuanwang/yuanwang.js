const app = getApp()
const data=[
  '齐齐整整\n家人安康',
  '遇见对的人\n成为更好的自己',
  '世界会为我让路\n迎着梦想前行',
  '期待的突破会到来\n都会得到认可和回报\n付出的努力',
  ''
]
Page({
  data: {
    baseUrl: app.globalData.baseUrl,
    current: 4,
    value: '',
    fontSize: 80,
    width:80,
    values: [],
    labelShow:true,
    focus: false
  },
  onLoad(options){
    if(options.type!==undefined)
    this.setData({
      current:options.type
    })
    const value = data[this.data.current]
    this.setData({
      value: value,
      values: value.split('\n')
    })
    this.setFontSize()
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
      labelShow: true,
      focus: false
    })
  },
  bindTextAreaFocus(){
    this.setData({
      labelShow: false,
      focus: true
    })
  },
  setFontSize(){
    const length = this.data.value.length
    let size = 80// parseInt(20/length*80)
    if(length<5){
      size = 120
    }else if(length<10){
      size=80
    }else if(length<15){
      size = 60
    }else{
      size=60
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
    this.setFontSize()
    // console.log(e.detail.value.split('\n'))
  }
})
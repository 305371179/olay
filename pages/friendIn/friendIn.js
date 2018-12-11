const app = getApp()

Page({
  data: {
    baseUrl: app.globalData.baseUrl,
    show:false,
    head: app.globalData.baseUrl+'friendIn/head.png',
    nickName:'',
    hasUserInfo: false,
    show: false,
    current:4,
    value: 'adfd',
    values: ['整整齐齐','全家安康'],
    labelShow:true,
    //旅行助力
    lvxingText:16,
    wuzheText:16,
    yiyuanText:16,
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
    size*=0.6
    this.setData({
      fontSize: size,
      width:size,
    })
  },
  onLoad(options){
    if(options.type!==undefined){
      const value = options.value
      this.setData({
        current:options.type,
        value: value,
        values: value.split('\n')
      })
    }
    this.setFontSize()
  },
  close(){
    this.setData({
      show: false
    })
  },
  //领取
  lingqu(){
  },
  //点赞
  zan(){

  }
})
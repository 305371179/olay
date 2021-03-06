const app = getApp()

Page({
  data: {
    baseUrl: app.globalData.baseUrl,
    show:false,
    head: app.globalData.baseUrl+'friendIn/head.png',
    nickName:'',
    hasUserInfo: false,
    show: false,
    id: '',
    current:4,//愿望的类型
    value: 'adfd',//愿望的文本
    values: ['整整齐齐','全家安康'],
    labelShow:true,
    //旅行助力
    lvxingText:16,
    wuzheText:16,
    yiyuanText:16,
    zans:[],
    //点赞数
    zanCount: 0,
    defaultHead: 'background-image:url('+app.globalData.baseUrl+'friendIn/zanfirst.png'+')',
    //是否可以点赞
    isCanZan: true,
    //进度条的宽度
    progressWidth: 0,
    fullWidth: 563,
    goldStar: app.globalData.baseUrl+'friendIn/progress-star-gold.png',
    silverStar: app.globalData.baseUrl+'friendIn/progress-star-silver.png',
    zan15: app.globalData.baseUrl+'friendIn/progress-star-silver.png',
    zan30: app.globalData.baseUrl+'friendIn/progress-star-silver.png',
    zan100: app.globalData.baseUrl+'friendIn/progress-star-silver.png',
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
    if(options.id){
      this.setData({
        id:options.id
      })
    }
    if(options.type!==undefined){
      const value = options.value
      this.setData({
        current:options.type,
        value: value,
        values: value.split('\n')
      })
    }
    this.setFontSize()
    this.setZans()
    this.setProgress(100)
  },
  setProgress(zanCount){
    let zan15 = this.data.silverStar
    let zan30 = this.data.silverStar
    let zan100 = this.data.silverStar
    if(zanCount>=15){
      zan15 = this.data.goldStar
    }
    if(zanCount>=30){
      zan30 = this.data.goldStar
    }
    if(zanCount>=100){
      zan100 = this.data.goldStar
    }
    this.setData({
      zanCount: zanCount,
      progressWidth: Math.round(zanCount/100*this.data.fullWidth),
      zan15,
      zan30,
      zan100,
    })
  },
  setZans(){
    let zans = []
    for (let i = 0; i < 40; i++) {
      zans.push({
        head:'',
        background : this.data.defaultHead
      })
    }
    this.setData({
      zans: zans
    })
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
    if(!this.data.isCanZan){
      return
    }
    this.data.isCanZan = false
    this.data.zans.pop()
    this.data.zans.splice(0,0,{
      //模拟头像
      head:app.globalData.baseUrl+'friendIn/head.png',
      background: ''
    })
    this.setData({
      zans: this.data.zans
    })
  }
})
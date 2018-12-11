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
    //有没有愿望的判断
    hasYuanwang:false,
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
    //已经完成兑换
    isFinish: false,
    //父容器的高度
    pageHeight: 2366,
    notFinishHeight:2366,
    finishHeight: 1826,
    //助力的次数
    lvxingText:16,
    wuzheText:16,
    yiyuanText:16,
    headLeft:0,
    //显示弹窗
    showWindow:false,
    //旅行：0  五折：1  一元：2
    lingquType:-1
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
    this.setPageHeight()
    this.setHeadPosition()
  },
  setHeadPosition(){
    let left = -171
    if(!this.data.hasYuanwang){
      left=0
    }
    this.setData({
      headLeft: left
    })
  },
  setPageHeight(){
    let height = this.data.pageHeight
    if(this.data.isFinish){
      height = this.data.finishHeight
    }else{
      height = this.data.notFinishHeight
    }
    this.setData({
      pageHeight: height
    })
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
  tank(){
    console.log('感谢参与按钮')
  },
  share(){
    console.log('邀请更多好友按钮')
  },
  lvxing(){
    console.log('旅行装按钮')
  },
  newPrize(){
    console.log('新人礼按钮')
  },
  wuzhe(){
    console.log('五折按钮')
  },
  yiyuan(){
    console.log('一元按钮')
  },
  chakan(){
    console.log('查看按钮')
  },
  ranghaoyou(){
    console.log('让好友助力按钮')
  },
  xinyuan(){
    console.log('心愿按钮')
  },
  yes(){
    console.log('弹窗是的按钮')
  },
  no(){
    console.log('弹窗否的按钮')
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
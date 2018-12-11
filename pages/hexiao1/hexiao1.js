const app = getApp()

Page({
  data: {
    baseUrl: app.globalData.baseUrl,
    show:true,
    prizeName:'ONLay明星撞',
    //多少份
    num: '1份',
    //核销码
    hexiaoma:8888,
    value: '',
    data:[
      'aaaaaaaaaa',
      'aaaaaaaaaa',
      'aaaaaaaaaa',
      'aaaaaaaaaa',
      'aaaaaaaaaa',
      'aaaaaaaaaa',
      'aaaaaaaaaa',
      'aaaaaaaaaa',
      'aaaaaaaaaa',
      'aaaaaaaaaa',
      'aaaaaaaaaa',
    ],
    province:'广东',
    selectShow:true
  },
  select(){
    console.log('seledt')
    this.setData({
      selectShow: true
    })
  },
  selectItem(e){
    this.setData({
      value: e.currentTarget.dataset.item,
      // selectShow:false
    })
  },
  duihuan(){
    console.log('兑换按钮')
    this.setData({
      show:false
    })
  },
  hexiao(){
    console.log('确认核销按钮')
  }
})
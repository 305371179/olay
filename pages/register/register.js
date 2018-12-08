const app = getApp()
import { validatePhone} from '../../utils/util.js'
Page({
  data: {
    baseUrl: app.globalData.baseUrl,
    name:'',
    phone:''
  },
  submit(name,phone){
    if(!app.globalData.debug){
      if(!this.data.name||!this.data.phone){
        wx.showToast({
          icon: 'none',
          title: '姓名和电话不能为空',
          duration: 3000,
          mask: true
        })
        return
      }
      if (!validatePhone(this.data.phone)){
        wx.showToast({
          icon: 'none',
          title: '电话号码不正确',
          duration: 3000,
          mask: false
        })
        return
      }
    }
    app.login()
  },
  bindPhone(e){
    this.setData({
      phone: e.detail.value
    })
  },
  bindName(e) {
    this.setData({
      name: e.detail.value
    })
  },
  
})
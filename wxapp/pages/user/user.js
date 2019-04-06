var app = getApp()
var allData = app.globalData
var api = require('../../utils/api.js')
var utils = require('../../utils/util.js')

Component({
  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    user_info: wx.getStorageSync("userInfo"),
  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 4
        })
      }
    }
  },
  methods: {
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    getPhoneNumber(e) {
      this.getPhoneNmu(e.detail.encryptedData, e.detail.iv)
    },

    onShow: function() {
      var t = this
      if (!allData.isGetUser) {
        wx.showLoading({
          title: '加载中',
        })
        utils.GET('userInfo',function(res) {
          console.log('获取用户数据:',res) //回调数据调试
          var iconUrl = !res.data.portrait ? allData.iconUrl : res.data.portrait
          allData.name = res.data.user_name
          allData.address = res.data.address
          allData.phoneNum = res.data.telephone
          allData.iconUrl = iconUrl
          // allData.userID = res.data.id 用户id保存为全局变量，暂时废弃
          allData.gender = res.data.gender
          allData.age = res.data.year

          // //防止点击过快出现数据为缓存后，无法自动再次加载的尴尬情况
          allData.isGetUser = !res.data.address && !res.data.user_name && !res.data.gender ? false : true
          t.setData({
            address: res.data.address,
            userName: res.data.user_name,
            gender: res.data.gender,
            iconUrl: iconUrl,
          })
        },true)
      }
    },
    
    //跳转页面
    toPage(e){
      var page = e.target.dataset.page
      wx.navigateTo({
        url: page,
      })
    }

  }
})
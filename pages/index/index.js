var utils = require('../../utils/util.js')
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    name :"World",
    person:{name:"xiaoming",age:18},
    array:[
      {name : "xiaoming"},
      { name: "xiaohong" }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  getUserInfo: function (e) {
    // 代表事件的类型。tap
    e.type;
    // 页面打开到触发事件所经过的毫秒数。
    e.timeStamp;
    // 触发事件的源组件。
    e.target;
    // 事件绑定的当前组件。
    e.currentTarget;
    e.currentTarget.dataset.customdata;

    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  changeName: function (e) {
    console.log(e);
    this.setData({
      name:"小明"
    })
    
    utils.test();

    // 手动触发下拉刷新
    // wx.startPullDownRefresh();
    // 停止当前页面的下拉刷新
    // wx.stopPullDownRefresh();
  },
  // 生命周期回调—监听页面加载
  onLoad: function () {
    
  },
  // 页面显示/切入前台时触发。
  onShow:function(e){
    // navigateTo - 页面跳转，触发onHide事件,页面左上角会有回退按钮
    wx.navigateTo({
      url: '',
    })
    // navigateTo - 页面重定向，触发onUnload事件，页面左上角没有回退按钮
    wx.redirectTo({
      url: '',
    })
  },
  // 页面初次渲染完成时触发。一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
  onReady: function (e) {

  },
  // 页面隐藏/切入后台时触发。 如 navigateTo 或底部 tab 切换到其他页面，小程序切入后台等
  onHide: function (e) {

  },
  // 页面卸载时触发。如redirectTo或navigateBack到其他页面时。
  onUnload: function (e) {

  },
  // 监听用户下拉动作
  onPullDownRefresh:function(e){

  },
  // 页面上拉触底事件的处理函数
  onReachBottom:function(e){

  },
  // 用户点击右上角转发
  onShareAppMessage:function(e){

  },
  // 页面滚动触发事件的处理函数
  onPageScroll:function(e){

  },
  // 页面尺寸改变时触发
  onResize:function(e){

  },
  // 当前是 tab 页时，点击 tab 时触发
  onTabItemTap:function(e){

  }
})



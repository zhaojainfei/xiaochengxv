// API文档 - https://developers.weixin.qq.com/miniprogram/dev/framework/MINA.html
// https://mp.weixin.qq.com/wxopen/initprofile?action=home&lang=zh_CN&token=1122343240
// 函数用来注册一个小程序。接受一个 Object 参数，其指定小程序的生命周期回调等
// 全局js
App({
  // 小程序初始化完成时（全局只触发一次）
  onLaunch: function (options) {
    // 打开小程序的路径
    console.log(options.path);
    // 打开小程序的 query
    console.log(options.query);
    // 打开小程序的场景值
    console.log(options.scene);
  },
  // 小程序启动，或从后台进入前台显示时
  onShow:function(options){

  },
  // 小程序从前台进入后台时
  onHide: function (options){

  },
  // 小程序发生脚本错误，或者 api 调用失败时触发，会带上错误信息
  onError: function (options){

  },
  // 小程序要打开的页面不存在时触发，会带上页面信息回调该函数
  onPageNotFound: function (oboptionsj){
    
  },
  globalData: {
    userInfo: null
  }
})
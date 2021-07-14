// pages/information/information.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperImg:[
      {
        img:"/static/banner/banner1.jpg"
      },
      {
        img:"/static/banner/banner2.jpg"
      },
      {
        img:"/static/banner/banner3.jpg"
      },
      {
        img:"/static/banner/banner4.jpg"
      }
    ],
    weather: { 'wea_img': 'qing'},//实况天气
    weatherweek:[],//七日天气
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onLoad: function () {
    this.getapi();
  },
  getapi:function(){
    var _this = this;
    // 获取IP地址, 请更换为自己的appid和appsecret
    wx.request({
      url: 'https://www.tianqiapi.com/ip?appid=&appsecret=',
      data: {
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res);
        // 根据IP获取天气数据
        _this.weatherweekday(res.data.ip);
      }
    });
  },
  // 天气api天气获取, 请更换为自己的appid和appsecret
  weatherweekday: function (ip) {
    var _this = this;
    wx.request({
      url: 'https://www.tianqiapi.com/api/?version=v9&appid=&appsecret=',
      data: {
        'ip': ip
      },
      method: 'GET',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        _this.setData({
          weatherweek: res.data
        });
        console.log(_this.data.weatherweek)
      }
    });
  }

})
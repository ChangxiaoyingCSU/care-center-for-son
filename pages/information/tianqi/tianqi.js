//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    weather: { 'wea_img': 'qing'},//实况天气
    weatherweek:[],//七日天气
    swiperImg:[
      {
        img:"/static/banner/g1.jpg"
      },
      {
        img:"/static/banner/banner2.jpg"
      },
      {
        img:"/static/banner/banner3.jpg"
      },
      {
        img:"/static/banner/g4.jpg"
      },
      {
        img:"/static/banner/g5.jpg"
      },
      {
        img:"/static/banner/g6.jpg"
      },
    ]
  },
  onLoad: function () {
    this.getapi();
  },
  getapi:function(){
    var _this = this;
    // 获取IP地址, 请更换为自己的appid和appsecret
    wx.request({
      url: 'https://www.tianqiapi.com/ip?appid=65386114&appsecret=1UNuTzyh',
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
      url: 'https://www.tianqiapi.com/api/?version=v9&appid=65386114&appsecret=1UNuTzyh',
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

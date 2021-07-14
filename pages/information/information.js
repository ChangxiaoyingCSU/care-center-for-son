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
    excellentHouse: [{
      id: '1',
      zd: '1',
      img: '/assets/doctor/1.jpg',
      title: '梅岭社区颐养中心服务，营养配餐、清洁卫生、居室安全',
      stmel: '天心区',
      stmels: '梅岭社区',
      number: '7',
      specifications: '从业7年',
      squaremeter: '93.7',
      homesuper: '任劳任怨',
      avatar: '../../../assets/home/Headportrait/s01.png',
      type: '个人'
    },
    {
      id: '2',
      img: '/assets/doctor/2.jpg',
      title: '梅岭社区颐养中心服务，护理卫生、衣物清洗、协助沐浴',
      stmel: '天心区',
      stmels: '梅岭社区',
      number: '9',
      specifications: '从业3年',
      squaremeter: '89.7',
      homesuper: '热情干练',
      avatar: '../../../assets/home/Headportrait/s02.png',
      type: '个人'
    }
  ],
  personalHousing: [{
      id: '1',
      zd: '1',
      img: '/assets/doctor/3.jpg',
      title: '梅岭社区颐养中心服务，健康保健，常见老年病的护理，正确掌握给药途径',
      stmel: '天心区',
      stmels: '梅岭社区',
      number: '6',
      specifications: '从业4年',
      squaremeter: '91.5',
      homesuper: '知识充沛',
      avatar: '../../assets/home/Headportrait/s01.png',
      type: '企业'
    },
    {
      id: '2',
      img: '/assets/doctor/4.jpg',
      title: '梅岭社区颐养中心服务，帮助老人洗脸、擦身、洗澡、喂饭、锻炼身体',
      stmel: '天心区',
      stmels: '梅岭社区',
      number: '5',
      specifications: '从业2年',
      squaremeter: '93.2',
      homesuper: '细致用心',
      avatar: '../../assets/home/Headportrait/s02.png',
      type: '个人'
    },
    {
      id: '3',
      img: '/assets/doctor/1.jpg',
      title: '梅岭社区颐养中心服务，沟通陪伴，针对病患存在和潜在的心理问题，给予关怀、支持和帮助',
      stmel: '天心区',
      stmels: '梅岭社区',
      number: '10',
      specifications: '从业6年',
      squaremeter: '97.8',
      homesuper: '学历优秀',
      avatar: '../../assets/home/Headportrait/s03.png',
      type: '企业'
    }
  ]
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
// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgas1:["../../assets/publish/healthy1-1.png"],
    imgas4:["../../assets/publish/healthy2-2.png"],
    imgas2:["../../assets/publish/diet.png"],
    imgas3:["../../assets/publish/location.gif"]
  },
	healthy(){
    if(getApp().globalData.phone == ""){
      console.log(getApp().globalData.phone),

      wx.showModal({
        title: '提示',
        content: '您还未登录',
        success: function(res) {
         if (res.confirm) {
          console.log('用户点击确定')
         }
        }
       })

    }else{
      wx.request({
        url: 'http://localhost:8088/healthyForSun/getHealthyList',
        data:{
          // custname:"张三",
          // phone:"12345612312"
          custname:getApp().globalData.custName,
          phone:getApp().globalData.custPhone,
        },
        method:'GET',
        header: {
          'content-type': 'application/json' // 默认值
        },
        success:function(res){
          wx.setStorageSync('healthyList', res.data);
          console.log(res.data)
  
        },
        fail:function(res){
          console.log(".....fail.....");
        }
      });

      wx.navigateTo({
        url: '/pages/healthy/healthy/healthy'
      })
    }
  },
  healthy2(){
    if(getApp().globalData.phone == ""){
      console.log(getApp().globalData.phone),

      wx.showModal({
        title: '提示',
        content: '您还未登录',
        success: function(res) {
         if (res.confirm) {
          console.log('用户点击确定')
         }
        }
       })

    }else{
      wx.request({
        url: 'http://localhost:8088/healthyForSun/getHealthyVO',
        data:{
          // custname:"张三",
          // phone:"12345612312"
          custname:getApp().globalData.custName,
          phone:getApp().globalData.custPhone
        },
        method:'GET',
        header: {
          'content-type': 'application/json' // 默认值
        },
        success:function(res){
           wx.setStorageSync('customer', res.data);
          console.log(res.data);
        },
        fail:function(res){
          console.log(".....fail.....");
        }
      });
      wx.navigateTo({
        url: '/pages/healthy/card/add',
      })
    }
  },
	diet(){
    if(getApp().globalData.phone == ""){
  
      wx.showModal({
        title: '提示',
        content: '您还未登录',
        success: function(res) {
         if (res.confirm) {
          console.log('用户点击确定')
         }
        }
       })

    }else{
      var that = this;
      wx.request({
        url: 'http://localhost:8088/dietForCustomer/getOrderDietById',
        async : false,
        data:{
          custname: getApp().globalData.custName,
          phone:getApp().globalData.custPhone
        },
        method:'GET',
        header: {
          'content-type': 'application/json' // 默认值
        },
        success:function(res){
          var dietList = res.data;
          var planList = new Array(1);
          var breakList = new Array(1); 
          var lunchList = new Array(1); 
          var dinnerList = new Array(1); 
          for(var i = 0; i < dietList.length; i++){
            planList[i] = dietList[i].day;
            breakList[i] = dietList[i].breakfastId;
            lunchList[i] = dietList[i].lunchId;
            dinnerList[i] = dietList[i].dinnerId;
          }
          wx.setStorageSync('planList', planList);
          wx.setStorageSync('breakList', breakList);
          wx.setStorageSync('lunchList', lunchList);
          wx.setStorageSync('dinnerList', dinnerList);
        },
        fail:function(res){
          console.log(".....fail.....");
        }
      });
      wx.navigateTo({
        url: '/pages/timeline/index'
      })
    }

	},
	location(){
		wx.navigateTo({
			url: '/pages/healthy/map/map',
		})
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

  }
})
//无语！
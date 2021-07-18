// pages/home/homeGod/homeGodDetail/homeGodDetail/homeGodDetailAther/homeGodDetailAther.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
      nurseId:null,
  //   nurContent:null,
      price:null,
      name:null,
      days:0,
      allMoney:0
  },
  /**
   * 生命周期函数--监听页面加载
   */
	call(){
		wx.makePhoneCall({
		  phoneNumber: '10086'
		})
	},
	back(){
		wx.navigateBack({
			delta:1
		})
  },
  
  formSubmit: function(e) {

    var that = this; 
   // console.log(this.data.nurContent),
   console.log(this.data.nurseId)
    wx.request({
      
      url: 'http://localhost:8088/nurseForCustomer/addNurseAndCust',
      data:
      {
        nurseId:this.data.nurseId,
  //      nurContent:this.data.nurContent,
        time:this.data.days,
        custName:getApp().globalData.custName,
        custPhone:getApp().globalData.custPhone,
      }
    ,
    method:'POST',
    header: {
      'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    success:function(res){
        
        that.setData({
          allMoney:that.data.price * that.data.days
        })
        console.log(that.data.days)
        wx.navigateTo({
          url: '/pages/pay/pay?money='+that.data.price+'&name='+that.data.name+'&days='+that.data.days+'&allMoney='+that.data.allMoney
        })

    },
    fail: function(res) {
      console.log("fail...")
  },
  })

  },

  // 获取输入姓名
  nameInput: function (e) {
    this.setData({
      name: e.detail.value
    })
  },

  // 获取输入天数
  dayInput: function (e) {
    this.setData({
      days: e.detail.value
    })
  },
  
  onLoad: function (options) {
    var that = this;
    that.setData({
   //   nurContent:JSON.parse(options.nurContent),
      nurseId:options.id,
      price:options.price
    })
 //   console.log(this.data.nurContent);
  },

  //获取订单总金额
  getAllMoney(){
    // console.log(this.data.days);
    var allMoney = (this.data.nurContent.price)*(this.data.days);
    // console.log(allMoney);
    return allMoney;
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
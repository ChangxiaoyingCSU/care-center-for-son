// pages/home/homeGod/homeGodDetail/homeGodDetail/homeGodDetailAther/homeGodDetailAther.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      name:null,
      days:0,
      money:0,
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
    let allMoney = this.getAllMoney();
    this.setData({
      allMoney:allMoney
    })
    wx.navigateTo({
      url: '/pages/pay/pay?money='+this.data.money+'&name='+this.data.name+'&days='+this.data.days+'&allMoney='+this.data.allMoney
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
    this.setData({
      money:JSON.parse(options.money)
    })
    // console.log(options.allMoney);
  },

  //获取订单总金额
  getAllMoney(){
    // console.log(this.data.days);
    var allMoney = (this.data.money)*(this.data.days);
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
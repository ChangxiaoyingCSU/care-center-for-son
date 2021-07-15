// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgas1:["../../assets/publish/healthy1.png"],
    imgas4:["../../assets/publish/healthy2.png"],
    imgas2:["../../assets/publish/diet.png"],
    imgas3:["../../assets/publish/location.gif"]
  },
	healthy(){
		wx.navigateTo({
			url: '/pages/healthy/healthy/healthy',
		})
  },
  healthy2(){
    wx.navigateTo({
			url: '/pages/healthy/card/add',
		})
  },
	diet(){
		wx.navigateTo({
			url: 'buy/buy',
		})
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
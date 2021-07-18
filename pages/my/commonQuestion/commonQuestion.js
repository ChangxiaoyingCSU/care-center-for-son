// pages/my/commonQuestion.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperImg:[
      {
        img:"/assets/publish/temp1.png"
      },
      {
        img:"/assets/publish/temp4.png"
      },
      {
        img:"/assets/publish/temp3.png"
      }
    ],
		question:[{
			question:"1.无法获取健康信息？",
			answer:"请先检查是否进行登录和绑定，如果仍未获取到数据，我们每日后台更新健康数据时间为中午12点，以获取最新数据，当查询时间过早时，无法获取数据"
		},{
			question:"2.为何获取的信息不是自己绑定的用户？",
			answer:"若您之前已用改手机号绑定过其它用户，则无法重新进行绑定，一个手机号仅可绑定一位用户"
		},{
			question:"3.如何进行支付",
			answer:"选择您心仪的护工，点击签约，输入您的真实姓名和签约时间后，会跳转至支付页面，支付即可。注意支付后请点击生成合同，具有法律效应"
		},{
			question:"4.获取的信息不是最新的信息",
			answer:"如遇此类问题，请退出该页面，重新进入，即可，如果仍未解决，请致电客服"
		},{
			question:"5.如何获取实时定位？",
			answer:"点击定位即可进入当前梅岭社区颐养中心，您的位置，您的家属位置的地图，点击即可查看"
		},{
			question:"6.我填写的个人信息会泄漏吗？",
			answer:"在整个过程中我们的数据都保存于公司内部，我们会最大限度保障您的个人信息安全，免去骚扰。"
		},{
			question:"7.其它问题：",
			answer:"如遇其它问题未解决，请致电客服：400-890-8890"
		}],
		current:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		
  },
	fold(e){
		var id=e.currentTarget.dataset.id
		this.setData({
			current:id
		})
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
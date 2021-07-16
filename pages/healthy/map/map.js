// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
	  latitude:28.149387, //中心点
	  longitude: 112.998914,//中心点
	  markers:[
		  {
			  id: 0,
			  latitude: 28.149387, //初始位置
				longitude:112.998914,//初始位置
			  iconPath:"/icon/定点.PNG",
			  width:30,
			  height:35,
			  callout:{
			  	content:"梅岭社区颐养中心",
			  	fontSize:13,
			  	borderRadius:5,
			  	borderWidth:1,
			  	padding:2,
			  	display:"BYCLICK"
			  }
		  }
	  ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	  var that = this;
	  wx.getLocation({
		  type: "wgs84",
		  success:function(res){
			  console.log(res);
			  that.setData({
				  markers:[
				  		  {
				  			  id: 0,
				  			  latitude: 28.149387, //初始位置
				  		  	  longitude: 112.998914,//初始位置
				  			  iconPath:"/icon/定点.PNG",
				  			  width:30,
				  			  height:35,
				  			  callout:{
				  			  	content:"梅岭社区颐养中心",
				  			  	fontSize:13,
				  			  	borderRadius:5,
				  			  	borderWidth:1,
				  			  	padding:2,
				  			  	display:"BYCLICK"
				  			  }
								},
								{
									id: 1,
									latitude: res.latitude,
									longitude: res.longitude,
									iconPath:"/icon/定点.PNG",
									width:30,
									height:35,
									callout:{
										content:"您当前的位置",
										fontSize:13,
										borderRadius:5,
										borderWidth:1,
										padding:2,
										display:"BYCLICK"
									}
								},
								{
									id: 2,
									latitude: 28.138032,
									longitude: 112.966405,
									iconPath:"/icon/定点.PNG",
									width:30,
									height:35,
									callout:{
										content:"您的亲属当前位置",
										fontSize:13,
										borderRadius:5,
										borderWidth:1,
										padding:2,
										display:"BYCLICK"
									}
								}
				  ]
				  
			  })
		  }
	  })
  },
  
  
/*  地图放大缩小事件 */
   bindregionchange(e) {
      console.log('=bindregiοnchange=', e)
    },

		/*
* 很简单，直接在按钮中触发函数调用api即可
* 返回的res就包含了用户所选择的当前位置信息
* [api其他配置项请参照文档根据自身需求配置]
*/

 
 /**
   * 点击地图事件，有经纬度信息返回
   * @param {*} e 
   */
  bindtapMap(e) {
    console.log('=bindtapMap=', e)
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
  //跳转
  // locantion:function(){
  //   wx.navigateTo({url: "/pages/yly/yly",})
  // }
})
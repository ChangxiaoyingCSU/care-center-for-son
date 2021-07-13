// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
	  latitude: 29.40268, //中心点
	  longitude: 106.54041,//中心点
	  markers:[
		  {
			  id: 0,
			  latitude: 29.40268, //初始位置
		  	  longitude: 106.54041,//初始位置
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
			  id: 1,
			  latitude: 29.385396966, 
			  longitude: 106.515959483,//"乔鹤养老院"
			  iconPath:"/icon/定点.PNG",
			  width:30,
			  height:35
		  },
		  {
		  		id: 2,
				latitude: 29.408994, 
				longitude: 106.553443,//"狮子山老年公寓"
				iconPath:"/icon/定点.PNG",
				width:30,
				height:35
		  },
		  {
		  		id: 3,
				latitude: 29.427551, 
				longitude: 106.56582,//"小泉养老公寓"
		  		iconPath:"/icon/定点.PNG",
		  		width:30,
		  		height:35
		  },
		  {
		  		id: 4,
				latitude: 29.374510809,
				longitude: 106.692200405,//"南彭敬老院"
		  		iconPath:"/icon/定点.PNG",
		  		width:30,
		  		height:35
		  },
		  {
		  		id: 5,
				latitude: 29.296250809,
				 longitude: 106.512470405,//"重庆市巴南区快乐养老院"
		  		iconPath:"/icon/定点.PNG",
		  		width:30,
		  		height:35
		  },
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
				  			  latitude: 29.40268, //初始位置
				  		  	  longitude: 106.54041,//初始位置
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
				  			  id: 1,
				  			  latitude: 29.385396966, 
				  			  longitude: 106.515959483,//"乔鹤养老院"
				  			  iconPath:"/icon/定点.PNG",
				  			  width:30,
				  			  height:35,
							  callout:{
							  	content:"乔鹤养老院",
							  	fontSize:13,
							  	borderRadius:5,
							  	borderWidth:1,
							  	padding:2,
							  	display:"BYCLICK"
							  }
				  		  },
				  		  {
				  		  		id: 2,
				  				latitude: 29.408994, 
				  				longitude: 106.553443,//"狮子山老年公寓"
				  				iconPath:"/icon/定点.PNG",
				  				width:30,
				  				height:35,
								callout:{
									content:"狮子山老年公寓",
									fontSize:13,
									borderRadius:5,
									borderWidth:1,
									padding:2,
									display:"BYCLICK"
								}
				  		  },
				  		  {
				  		  		id: 3,
				  				latitude: 29.427551, 
				  				longitude: 106.56582,//"小泉养老公寓"
				  		  		iconPath:"/icon/定点.PNG",
				  		  		width:30,
				  		  		height:35,
								callout:{
									content:"小泉养老公寓",
									fontSize:13,
									borderRadius:5,
									borderWidth:1,
									padding:2,
									display:"BYCLICK"
								}
				  		  },
				  		  {
				  		  		id: 4,
				  				latitude: 29.374510809,
				  				longitude: 106.692200405,//"南彭敬老院"
				  		  		iconPath:"/icon/定点.PNG",
				  		  		width:30,
				  		  		height:35,
								callout:{
									content:"南彭敬老院",
									fontSize:13,
									borderRadius:5,
									borderWidth:1,
									padding:2,
									display:"BYCLICK"
								}
				  		  },
				  		  {
				  		  		id: 5,
				  				latitude: 29.296250809,
				  				 longitude: 106.512470405,//"重庆市巴南区快乐养老院"
				  		  		iconPath:"/icon/定点.PNG",
				  		  		width:30,
				  		  		height:35,
								callout:{
									content:"重庆市巴南区快乐养老院",
									fontSize:13,
									borderRadius:5,
									borderWidth:1,
									padding:2,
									display:"BYCLICK"
								}
				  		  },
				  ]
				  
			  })
		  }
	  })
  },
  
  
/*  地图放大缩小事件 */
   bindregionchange(e) {
      console.log('=bindregiοnchange=', e)
    },

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
// pages/my/my.js

Page({

	/**
	 * 页面的初始数据
	 */
	data: {

		phone:"",
		animationData: {},
		isShow: [0, 0, 0],
 		/**客服数据接口 */
		KeHuItme:[
			{
				img:'../../assets/svg/Khu.svg',
				title:"签约服务网点",
				txt:"一触即达,分分钟解决问题"
			},
			{
				img:'../../assets/svg/Phone.svg',
				title:"客服电话",
				txt:"400-890-88900"
			}
		],
	},
	rotate() {
		var animation = wx.createAnimation({
			duration: 1000,
			timingFunction: "ease"
		});
		this.animation = animation
		animation.rotate(760).step()
		this.setData({
			animationData: animation.export()
		});
		wx.showToast({
			title: "更新成功",
			icon: "none"
		})
		setTimeout(() => {
			animation.rotate(0).step()
			this.setData({
				animationData: animation.export()
			})
		}, 1200)
	},
	question() {
		wx.navigateTo({
			url: 'commonQuestion/commonQuestion'
		})
	},
	healthy() {
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
	diet() {
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
	map() {
		wx.navigateTo({
			url: '/pages/healthy/map/map'
		})
	},
	nurse() {
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
			
			wx.request({
				url: 'http://localhost:8088/nurseContent/getNurseContent',
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
					
					wx.setStorageSync('nurContent', res.data);
				},
				fail:(res)=>{
					console.log(".....fail.....");
				}
			});

			wx.navigateTo({
				url: '/pages/home/nurse/nurse?nurContent'
			});
		 
		}
	},
	getuserinfo() {
		wx.getSetting({
			success(res) {
				if (res.authSetting['scope.userInfo']) {
					wx.login({
						success(res) {
							wx.request({
								url: "",
								method: "POST",
								data: {
									code: res.code
								},
								success(res) {
									console.log(res)
									// 换取openId  然后换取获取token
								}
							})
						}
					})
				} else {
					wx.showToast({
						title: "授权失败",
						icon: "none"
					});
					wx.openSetting({
						success(res) {
							console.log(res)
						}
					})
				}
			}
		})
	},
	goto() {
		wx.navigateTo({
			url: "pages/home/homeWYue/homeWYue"
		})
	},
	phone() {
		wx.makePhoneCall({
			phoneNumber: "10086",
		})
	},
	/**
	 * 生命周期函数--监听页面显示
	 */
	AboutUs() {
		wx.navigateTo({
			url: 'AboutUs/AboutUs'
		})
	},
	agreement() {
		wx.navigateTo({
			url: 'agreement/agreement'
		})

	},
	getInfo(){
		wx.navigateTo({
		  url: 'login/login',
		})
	},
	onShow: function() {
		var that = this;
		that.setData({
			phone:getApp().globalData.phone,
		})
		console.log(this.data.phone)
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {

	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function() {

	},


	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function() {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function() {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function() {

	}
})
